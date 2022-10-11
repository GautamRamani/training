// console.log('Before')
// setTimeout(() => {
//   console.log('Reading a user from a database')  
// },2000);
// console.log('after')

// console.log('Before')
// const user=getUser(1,function(user){
//     console.log('User',user)
// });
// console.log('after')

// function getUser(id,callback){
//     setTimeout(()=>{
//         console.log('Reading a user from a database...')
//         callback({id:id,gitHubUsername:'yash'})
//     },2000)
//     return 1;
// }


// console.log('Before')
// const repo=getRepositories(function(userrepo){
//     console.log('Repositories',userrepo)
// })
// console.log('after')

// function getRepositories(callback){
//     setTimeout(()=>{
//         console.log('Calling GitHub API...')
//         callback(['repo1','repo2','repo3'])           
//     },2000)   
// }

//callback

// setTimeout(function one(){
//     console.log('Calling...1')
//     setTimeout(function two(){
//         console.log('Calling...2')
//         setTimeout(function three(){
//             console.log('Calling...3')
//         },1000)
//     },1000)
// },1000)

//Promise


// const promise1=new Promise ((resolve,reject)=>{
//     resolve(1)
//     // reject(new Error('reason for a rejection...'))
// })

// *************then catch***********

// promise1.then((posRes)=>{
//     console.log(posRes)
// },(error)=>{
//     console.log(error)
// }).catch((e)=>console.log(e))

// *************Async await***********

// promise1.then(async (posRes)=>{
//     console.log(await posRes)
// },(error)=>{
//     console.log(error)
// }).catch((e)=>console.log(e))

//use
// const p=Promise.reject(new Error('reason for rejection...'))
// p.catch(err=>console.log(err))

// const promise1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('Async operation 1...')
//         resolve(1);
//         // reject(new Error('reject for rejection...'))
//     },2000)
// })

// const promise2=new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log('Async operation 2...')
//         resolve(2);
//     },2000)
// })

// Promise.race([promise1,promise2])
//         .then(result=>console.log(result))
//         .catch((err)=>console.log('Error',err.message))
