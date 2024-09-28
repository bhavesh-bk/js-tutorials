const tinderUser = new Object()


tinderUser.id = "101abc"
tinderUser.name = 'John'
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regUser = {
    email : 'bhaveshnk@gmail.com',
    fullname : {
        userfullname: {
            firstname: 'bhavesh',
            lastname : 'bk'
        }
    }
}

// console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1 : 'a' , 2 : 'b'}
const obj2 = {3 : 'd' , 4 : 'c'}
// // const obj3 = {
//     obj1, obj2
// }

// const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1 , ...obj2}

// console.log(obj3);

const users = [
    {
        id: '123',
        name: 'a'
    },
    {
        id: '123',
        name: 'a'
    },{
        id: '123',
        name: 'a'
    }
]

users[1].name
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));


// const course = {
//     cn: 'js',
//     price: '99',
//     cI: 'bk'
// }

// const {cI} = course
// console.log(cI);
 
// {
//     name: 'js',
//     cI: 'bk',
//     price: '99'
// }