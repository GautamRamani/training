const AWS=require("aws-sdk")

let s3= new AWS.S3({
    region:"",
    accessKeyId:"",
    secretAccessKey:""
})

s3.createBucket({
    Bucket:"Bucket-created-from-sdk"
},(err,success)=>{
    if(err){
        console.log(err)
    }
    console.log(success)
})

// s3.putObject({
//     Bucket:"Bucket-created-from-sdk",
//     Key:"basic.txt",
//     Body:Buffer("All glory comes from daring to begin")
// },(err,success)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(success)
// })

// s3.deleteObject({
//     Bucket:"Bucket-created-from-sdk",
//     Key:"basic.txt"
// },(err,success)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(success)
// })

// s3.deleteBucket({
//     Bucket:"Bucket-created-from-sdk"
// },(err,success)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(success)
// })