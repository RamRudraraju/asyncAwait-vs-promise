// How 'asyncAwait' differce from the 'Promise'. 

// Creating
const displayMessage = (message) => {
  return new Promise((resolve, reject) => { // It is just like an API call to the server.
    setTimeout(() => {                      // setTimeout Example.
      //  if (message === 'Wassup?') {
      //   return reject('Something went wrong');
      // } 
      return resolve(message);
    }, 3000);
  });
}

// promise

/*
 displayMessage('Hello').then(result => {  // Making any other call after getting the result of this
  console.log('result', result);           
  displayMessage('There?').then(result => { // We have to put the other calls in the above call backs only 
    console.log('result', result);          // So we end up in callback hell. // .this is callback
    displayMessage('Wassup?').then(result => {
      console.log('result', result);
    }).catch(error => {
      console.log('Error 3', error);
    });
  }).catch(error => {
    console.log('Error 2', error);
  })
}).catch(error => {
  console.log('Error 1', error);
}); */

console.log("-- Javascript is Async ");



// Async Await keyword will helps use to work more with promises & make it more readable.
// By making it look more syncronous.

const greetings = async () => {
  return 'Hey'   // async will implicitly resolve the return as a promise.
}

 greetings().then(result => console.log('***', result)); 

/* The alternate solution for the Callback hell is as follows  */
const myFunc = async () => {
  try {                                      // We can use only one try catch block for async await 
    let result = '';
    result = await displayMessage('Hello');  // await keyword only in two cases.
    console.log(result);                       // 1) Before the function that returns a promise 
    result = await displayMessage('There?');   // 2) The function should be a Async function. If it is not returning a promise.
    console.log(result);
    result = await displayMessage('Wassup?');
    console.log(result);
    result = await greetings();
    console.log(result);
  } catch (error) {
    console.log('Error', error);
  }
}

myFunc();