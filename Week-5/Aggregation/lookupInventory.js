//db.getCollection("lookupInventory").find()

//db.getCollection("lookupInventory").aggregate([{$project:{"_id":1,"item":1,"qty":1,"price":1}}])
//db.getCollection("lookupInventory").aggregate([{$project:{"_id":0,"item":1,"qty":1,"price":1}}])


//db.getCollection("lookupInventory").aggregate([
//{$match:{"item":"computer"}},
//{$lookup:{from:"lookupOrder",localField:"item",foreignField:"item",as:"order_details"}}
//])

//db.getCollection("lookupInventory").aggregate([
//{$match:{"item":"laptop"}},
//{$lookup:{from:"lookupOrder",localField:"item",foreignField:"item", as:"order_details"}}
//])

