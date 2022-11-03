import express from "express";
import routes from '../Controller/user'
const router=express.Router();

router.use("/",routes)

export default router;
