const arr = [1, 2, 3, 4]

for (const val of arr) {
    // console.log(val);
    
}

const greet = "Hello World"

for (const val of greet) {
    // console.log(`Word = ${val}`);
    
    
}

const mp = new Map()

mp.set('IN','INDIA')
mp.set('USA',"United States ofAmerica")
mp.set('FR','France')
mp.set('IN','INDIA')

// console.log(mp);

for (const [ket, val] of mp) {
    // console.log(ket + " " +val);
    
    
}

const myobj = {
    js: "JavaScript",
    cp: "C++",
    py: "Python"
}
const pgm = ['js', 'c++', 'py']

for (const key in pgm) {
    // console.log(key);
    
}

const coding = ['js', 'c++', 'py', 'java']

// coding.forEach( function (val){
//     console.log(val);
    
// })


// coding.forEach(  (val) => {
//     console.log(val);
    
// })

function printele(item){
    // console.log(item);
    
}
// coding.forEach(printele)

const MyCoding = [
    {
        language: 'JS',
        languagefile: 'js'
    },
    {
        language: 'python',
        languagefile: 'py'
    },
    {
        language: 'Java',
        languagefile: 'java'
    }
]

MyCoding.forEach( (itwm) => {
    console.log(itwm.languagefile);
    
})