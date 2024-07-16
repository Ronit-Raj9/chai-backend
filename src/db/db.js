import mongoose from "mongoose";
import { DB_NAME} from "../constants.js";

const connectDB = async () => {
    const dbUri = `${process.env.DATABASE_LOCAL}/${DB_NAME}`;
    console.log("Connection started with: " , dbUri);
    try {
        const connectionInstance = await mongoose.connect(`${process.env.DATABASE_LOCAL}/${DB_NAME}`);
        console.log(`\nMongoDB connected !! DB HOST: ${connectionInstance.connection.host}`);
    } catch (err) {
        console.log("MONGOB connection error: " + err);
        process.exit(1);
     }


}

export default connectDB; 