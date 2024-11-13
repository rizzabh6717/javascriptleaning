const jsuser={
    name:"rishabh",
    email:"rishabh@gmail.com",
    num:8445513154,
    adress:"kotdwara",
    age:19,
}
console.log(jsuser.adress);
console.log(jsuser["email"]);
console.log(jsuser["name"]);
console.log(jsuser.age);
console.log(jsuser.num);


jsuser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
jsuser.email = "hitesh@microsoft.com"
// console.log(JsUser);


jsuser.greeting= function(){
    console.log("hello people")
}

console.log(jsuser.greeting())
