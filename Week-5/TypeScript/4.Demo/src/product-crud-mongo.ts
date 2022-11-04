import { Product } from './product';
import products from './product-schema';

export const getProductList = async (req: any, res: any) => {
  products.find((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      // console.log(JSON.stringify(result))
      res.send(result);
    }
  });
};

export const createProduct = async (req: any, res: any) => {
  const request: Product = req.body;
  // console.log(JSON.stringify(request))
  let prod = new products(request);
  prod.save((err: any, result: any) => {
    if (err) {
      res.send("Error!");
    } else {
      // console.log(JSON.stringify(result))
      res.send(result);
    }
  });
};

export const updateproduct = async (req: any, res: any) => {
  //Update
  products.findOneAndUpdate(
    { _id: req.body.id },
    req.body,
    { upsert: true, new: true, },
    (err: any, result: any) => {
      if (err) {
        res.send("Error!")
      } else {
        res.send(result)
      }
    }
  )};

export const deleteproduct = async (req: any, res: any) => {
  //delete
  products.deleteOne({ _id: req.body.id }, (err: any, result: any) => {
    if (err) {
      res.send("Error!")
    } else {
      res.send(result);
    }
  })
};

