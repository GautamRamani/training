//Callback Function:-"Callback Function is a Function passed into another Function as an arguments, which is then invoked inside the outer function to complete some kind of routine or action".

// function one(arg){
//     console.log(arg)
// }
// function two(){
//     return 'All glory comes from daring to begin !!'
// }
// one(two())

// function createQuote(quote, callback){ 
//     var myQuote = "Like I always say, " + quote;
//     callback(myQuote); // 2
//   }
  
//   function logQuote(quote){
//     console.log(quote);
//   }
// createQuote("eat your vegetables!", logQuote); // 1

//set timeout
// function serverRequest(query, callback){
//     setTimeout(function(){
//       var response = query + "full!";
//       callback(response);
//     },5000);
//   }
  
//   function getResults(results){
//     console.log("Response from the server: " + results);
//   }
  
//   serverRequest("The glass is half ", getResults);