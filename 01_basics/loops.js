for (let i = 0; i < 10; i++) {
    const element = i;
   // console.log(element);
    
}
const num =[1,2,3,4,5]
for (const i of num) {
   // console.log(i)
}
Maps

const map = new Map();
map.set('in',"india")
map.set('us',"usa")
map.set('pak',"pakistan")
map.set('fr',"france")
 //console.log(map)
 for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

 const myObject = {  cant use forof in objects
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {   FOR IN loop
   // console.log(`${key} shortcut is for ${myObject[key]}`);
}

//foreach loops

const coding = ["js", "ruby", "java", "python", "cpp"]

 coding.forEach( function (val){
     //console.log(val);
 } )

 coding.forEach( (item) => {
     //console.log(item);
 } )
 
 //access object through for each
 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )