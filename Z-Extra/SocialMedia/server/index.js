import express from "express"
import bodyparser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import multer from "multer"
import helmet from "helmet"
import morgan from "morgan"
import path from "path"
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import {createPost} from "./controllers/posts.js"
import {register} from "./controllers/auth.js"
import { verifyToken } from "./middleware/auth.js"
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

/* Configuration */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(bodyparser.json({ limit: "30mb", extended: true }));
app.use(bodyparser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));

/* File Storage */
const File_TYPE_MAP = {
    "image/png": "png",
    "image/jpeg": "jpeg",
    "image/jpg": "jpg"
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const isvalid = File_TYPE_MAP[file.mimetype];
        let uploadError = new Error("Invalid image upload")
        if (isvalid) {
            uploadError = null;
        }
        cb(uploadError,'public/assets')
    },
    filename: function (req,file,cb){
        const filename=file.originalname.split(" ").join("-");
        const extension=File_TYPE_MAP[file.mimetype];
        cb(null,`${filename}-${Date.now()}.${extension}`)
    }
})

const upload = multer({ storage });

/* ROUTES with FILES */
app.post("/auth/register",upload.single("image"),register)
app.post("/posts",verifyToken,upload.single("image"),createPost)

/* ROUTES */
app.use("/auth",authRoutes);
app.use("/users",userRoutes);
app.use("/posts",postRoutes);

/* Mongoose Setup */
const PORT = process.env.PORT || 6001;
mongoose.set('strictQuery', false)
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database Connected Successfully")
    app.listen(PORT, () => {
        console.log(`Server started at Port: ${PORT}`)
    })
    // User.insertMany(users)
    // Post.insertMany(posts)
}).catch((err) => {
    console.log(err)
})