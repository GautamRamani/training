import { Router } from "express";

const router=Router();

router.get("/",(req,res)=>{
    res.send("Router working successfully")
})

export default router;