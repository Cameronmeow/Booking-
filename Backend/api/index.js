import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import authRoute from "./routes/auth.js"
// import userRoute from "./routes/users.js"
import hotelRoute from "./routes/hotels.js"
// import roomRoute from "./routes/rooms.js"

dotenv.config();

const app = express();
const port = 3000;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
    }
};

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
});

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
});

// /middlewares
//middlewares are important able to reach request and response before sending anything to the user


app.use(express.json())
// app.use("/api/auth",authRoute)
// app.use("/api/users",userRoute)
app.use("/api/hotels",hotelRoute)
// app.use("/api/rooms",roomRoute)


//error handling middleware
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!"
    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message: errorMessage,
        stack: err.stack
    })
    // console.log("Middleware")
})
app.listen(port, () => {
    connect();
    console.log(`Server running at port ${port}`);
});
