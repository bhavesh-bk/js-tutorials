function name()
{
    console.log('b');
    console.log('k');
    
    
}
// name()

// function add( n1, n2){
//     console.log(n1+n2);
    
// }
function add( n1, n2){
   let res = n1 +n2
    return res    
}

const res = add(3, 4)

// console.log("Result: " , res);

function loguser(user){
    if(!user){
         console.log('Enter a name');
         return
    }
        

    return `${user} just in`
}

// console.log(loguser());

function manyf(...num1){
    return num1
}
// console.log(manyf(200,2,33));

const user1 = {
    name: 'bk',
    price: '99'
}

// function handleobject(anyobj){
//     console.log(`Name is ${anyobj.name} with price = ${anyobj.price}`);
//  }
// handleobject({
//     name: 'a',
//     price: '20'
// })

const arr = [10, 20, 30, 40]

function secondvalue(arr1){
    return arr1[1]
}

console.log(secondvalue(arr))