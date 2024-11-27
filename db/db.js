import {Sequelize} from "sequelize";
import dotenv from "dotenv";

dotenv.config();


const sequelize=new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    
    {
        host:process.env.DB_HOST,
        port:process.env.DB_PORT,
        dialect:"postgres",
        logging:false,
    }
)

const connectDb= async()=>{
    try{
        await sequelize.authenticate();
        console.log("Connected succeful")
    }catch(error){
        console.log("Unable to connect")
    }
};

connectDb();

export default sequelize;