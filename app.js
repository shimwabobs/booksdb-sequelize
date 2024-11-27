import Book from "./models/books.js";
import express from "express";
import logger from "morgan";

const app=express();
const port=7900;
const host="localhost";

app.use(logger("dev"));
app.use(express.json());
const syncDatabase=async()=>{
    try{
        await sequelize.sync({force:true});
        console.log("synced succesful");
    }catch(error){
        console.log("Error to sync");
    }
}

syncDatabase();

app.post("/addbook",async (req,res)=>{
    try{
        const {title,author,genre,published_year,available}=req.body;
        const result=await Book.create({title,author,genre,published_year,available});
        res.status(201).json(result);
    }
    catch(error){
        res.status(500).json({
            message:"Unable to add",
            error:error.message
        })
    }
})

app.get("/books",async(req,res)=>{
    try{
        const result= await Book.findAll();
        res.status(200).json({result});
    }catch(error){
        res.status(500).json({
            message:"Unable to fetch",
            error:message.error
        })
    }
})

app.put("/update/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const {title,author,genre,published_year,available}=req.body;
        const result=await Book.update({title:title,author:author,genre:genre,published_year:published_year,available:available},{where:{id:id}});
        res.status(200).json(result[id]);
    }catch(error){
        res.status(500).json({
            message:"Error",
            error:error.message
        })
    }
})

app.delete("/delete/:id",async(req,res)=>{
    try{
        const id=req.params.id;
        const result= await Book.destroy({where:{id:id}});
        res.status(204).json({result});
    }catch(error){
        res.status(500).json({
            message:"Error to delete",
            error:error.message
        })
    }
})

app.listen(port,host,()=>{
    console.log(`Works on ${port},${host}`)
})