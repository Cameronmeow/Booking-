import express from "express";
// import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
// import body from "body-parser";
const router = express.Router();

//create
// router.post("/",async (req,res)=>{
//     const newHotel = new Hotel(req.body)

//     try{
//         const savedHotel = await newHotel.save()
//         res.status(200).json(savedHotel)
//     }catch(error){
//         res.status(500).json(error)
//     }
// });
// //update
// router.put("/:id",async (req,res)=>{
//     const id = req.params.id
//     try{
//         const updatedHotel = await Hotel.findByIdAndUpdate(id,{$set:req.body},{new:true}) // mongoDB set method
//         res.status(200).json(updatedHotel)
//     }catch(error){
//         res.status(500).json(error)
//     }
// });
// //delete
// router.delete("/:id",async (req,res)=>{
//     const id = req.params.id
//     try{
//         await Hotel.findByIdAndDelete(id) // mongoDB set method
        
//         res.status(200).json("Hotel has been deleted");
//     }
//     catch(error){
//         res.status(500).json(error)
//     }
// });

// //get
// router.get("/:id",async (req,res)=>{
//     const id = req.params.id
//     try{
//         const hotel = await Hotel.findById(id) // mongoDB set method
//         res.status(200).json(hotel)
//     }catch(error){
//         res.status(500).json(error)
//     }
// });
// // get all
// router.get("/",async (req,res,next)=>{
//     // console.log("hotel route";
//     const failed = true;
    
//     if(failed) return next(createError(401,"You are not autheticated!"));
//     // next()//it means go to next middle ware
//     try{
//         const hotels = await Hotel.findById("asdasd");// mongoDB set method
//         res.status(200).json(hotels)
//     }catch(error){
//         // res.status(500).json(error)
//         next(error)
//     }
// });
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotelController.js";
import Hotel from "../models/Hotel.js";
// import {verifyAdmin} from "../utils/verifyToken.js"
// const router = express.Router();

//CREATE
router.post("/", createHotel);

//UPDATE
router.put("/:id",  updateHotel);
//DELETE
router.delete("/:id",  deleteHotel);
//GET

router.get("/find/:id", getHotel);
//GET ALL

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;