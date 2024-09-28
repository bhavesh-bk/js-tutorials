const objs = {
    name : "Bhavesh",
    age : 21,
    location : 'Bengaluru',
    email : 'bhaveshbk2003@gmail.com'
}

// console.log(objs.email);
// console.log(objs['email']);

objs.greeting = function(){
    console.log(`Hello World , ${this.location}`);
}
console.log(objs.greeting());
