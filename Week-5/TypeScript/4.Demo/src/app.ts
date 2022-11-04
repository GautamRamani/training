import cors from 'cors';
import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import helmet from 'helmet';

import * as productCRUD from './product-crud-mongo';

dotenv.config();

if(!process.env.PORT){
    console.log('Error to get ports');
    process.exit(1);
}

const PORT:number=parseInt(process.env.PORT as string,10);

const app=express();

app.use(helmet());
app.use(cors());
app.use(express.json());

const server=app.listen(PORT,()=>{
    console.log(`Server listening the port number ${PORT}`)
});

const url: string = process.env.database!;
mongoose.connect(url, (err: any) => {
if (err) {
console.log(err.message);
} else {
console.log(`Database Connected Successfully`);
}
});

app.get("/",(req,res)=>{
    res.send("Welcome to NodeJs App using TypeScript")
})

app.get('/products', productCRUD.getProductList);
app.post('/products',productCRUD.createProduct);
app.post('/updateproduct',productCRUD.updateproduct);
app.post('/deleteproduct',productCRUD.deleteproduct);
