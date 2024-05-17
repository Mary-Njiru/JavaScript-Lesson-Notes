const internship = false;
const ourPromise = new Promise((resolve, reject)=>{
    if(internship){
        resolve('I made it!');
    }else{
        reject('Pray for me')
    }
});

ourPromise.then(()=>{
    console.log('I will be confirmed');
})
.catch(()=>{
    console.log('I will continue applying for jobs');
})
.finally(()=>{
    console.log("I will still be successful");
});


// console.log({ourPromise});


//Asynchrous Functions. Instead of chaining we use try() and catch()
const successWish = async()=>{
try{
    await ourPromise;
    console.log('My successful wish'); 
}catch{
    console.log('My wish is not successful');
}
   
}
successWish();

function greeting(){
    console.log('Hello');
}
greeting();
