function greet(userName, callback){
    console.log(`Hello there ${userName}`);
    callback();
};

function intro(){
    console.log(`This is me`);
};

greet('Mary', intro);


setTimeout(intro, 2000);

const interval = () => {
    console.log('Execute me');
}
setInterval(interval, 3000);


