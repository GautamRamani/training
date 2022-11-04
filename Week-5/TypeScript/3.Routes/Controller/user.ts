import { Router } from "express";
import CreateReminderDto from "../dtos/create-reminder";
import Reminder from "../Models/reminder"

const router=Router();
const reminders:Reminder[]=[];

router.get("/get",(req,res)=>{
    // res.send("Router working successfully")
    res.json(reminders)
})

router.post("/post",(req,res)=>{
   const {title}= req.body as CreateReminderDto;
   const reminder=new Reminder(title);
   reminders.push(reminder);
   res.status(201).json(reminder);
})

export default router;