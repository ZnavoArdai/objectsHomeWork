// //
// var manger={
//     firstName:"dodo",
//     lastName:"momo",
//     age:34,
//     salery:2655,

// };

// var employe={
//     fullName:"avrahm avrom",
//     birthday:31/12/1993,
//     email:"avrham@gmail.com",
//     adress:"zalmn 21",

// };

// var fruit={
//     name:"avocado",
//     color:"green",
//     type:"trupi",

// };

// document.write(fruit.name+"<br>");
// document.write(fruit.color+"<br>");
// document.write(fruit.type+"<br>");

// var classOfStudents={
//     StudentsNumber:5,
//     names:["solomon","yossi","avi","natan","yoni"]

// };

// var myKey=prompt("enter key");
// console.log(classOfStudents[myKey]);

// for(var i=0;i<classOfStudents.StudentsNumber;i++){
//     document.write(classOfStudents.names[i]+"<br>");

// }

//9
// var kimderGarden={
//     naniName:"brorya",
//     numberOfKids:10,
//     kidsName:["ron","dodi","roni","dor","rona","dora","rina","doba","ramona","drakola"],
// };



// for(var i=0;i<kimderGarden["kidsName"].length;i++){
// document.write(kimderGarden["kidsName"][i]+"<br>");
// }

// var myKey=prompt("enter key");
// document.write(myKey);

//12
// var classOfStudents={};

// classOfStudents.classNumber=parseInt(prompt("enter class number"));

// classOfStudents.StudentsNumber=parseInt(prompt("enter students number"));

// classOfStudents.age=parseInt(prompt("enter age"));

// console.log(classOfStudents)

//13
// var teachr={};

// var keyfromUser=prompt("enter key");
// var valueFromUser=prompt("enter value");

// teachr[keyfromUser]=valueFromUser;


// var princple={};

//14
// for(var i=0;i<4;i++){
//     var keyfromUser=prompt("enter key");
//     var valueFromUser=prompt("enter value");

//  princple[keyfromUser]=valueFromUser;
// }

// console.log(princple);
//15

// var user={};

// for(var i=0;i<1;i++){
    
// var keyfromUser=prompt("enter key");
// var valueFromUser=prompt("enter value");
// user[keyfromUser]=valueFromUser;
// document.write("<div>"+ user[keyfromUser]+"</div>");

// };

// console.log(window)
//16

// var carArray=[];
// for (var i=0;i<4;i++){
// var car={};
// car.brand=prompt("enter the car barnd");
// car.color=prompt("enter the car color");
// car.model=prompt("enter the car model");
// car.year=prompt("enter the car year");

// carArray.push(car);
// document.write("<div>"+car.brand+" "+car.color+" "+car.model+" "+car.year+"</div>")
// }

// console.log(carArray)
//17
// function catFunc(){
// var catArray=[];
// for(var i=0;i<3;i++){
// var cat={};
// cat.name=prompt("cat name");
// cat.bithday=prompt("cat year of birh");
// cat.type=prompt("cat ttype");
// cat.wight=prompt("cat wight");
// catArray.push(cat);
// document.write("<h1>"+cat.name+" "+cat.bithday+" "+cat.type+" "+cat.wight+"</h1>");
// }
// }

// catFunc();
//18

// function dogFunc(){
// var dogArray=[];
// var usernumber=prompt("chose number");
// for(var i=0;i<usernumber;i++){
// var dog={};
// dog.name=prompt("dog name");
// dog.age=prompt("dog age");
// dog.type=prompt("dog type");
// dog.ownerName=prompt("owner name");
// dogArray.push(dog);
// document.write("<p>"+dog.name+" "+dog.age+" "+dog.type+" "+dog.ownerName+"</p>");
// }
// }
// dogFunc();

//19


// function bogFunc(){
// var usernumber=prompt("user number");
// var bogArray=[];
// for(var i=0;i<usernumber;i++){
// var bog={};

// bog.name=prompt("bog name");
// bog.sinceName=prompt("bog since name");
// bog.bogLegs=prompt("number of legs");
// bog.wings=prompt("do have wings");
// bogArray.push(bog);
// if(bog.wings=="yes"){
//     document.write("<h3>"+bog.name+" "+bog.sinceName+" "+bog.bogLegs+" "+bog.wings+"</h3>");
// // }
// // }

// // }

// // bogFunc();

// //20

// function kidsFunc(){
// var kidsArray=[];
// var userNumber=parseInt(prompt("enter how many kids"));
// for(var i=0;i<userNumber;i++){
// var kids={};

// kids.fullName=prompt("enter full name");
// kids.age=parseInt(prompt("enter age"));
// kids.garden=prompt("do the kid in kidergarden?");
// kidsArray.push(kids);
// if(kids.age>4){
//     document.write("<p>"+kids.fullName+" "+kids.age+" "+kids.garden+"</p>");

// }

// }

// }

// kidsFunc();

//21
// function cumputersFunc(x){
// var cumputersArray=[];
// for(var i=0;i<x;i++){
// var cumputers={};
// cumputers.compny=prompt("enter compny");
// cumputers.model=prompt("enter model");
// cumputers.wight=prompt("enter wight");
// cumputers.avalible=prompt("enter is avalibele");
// cumputersArray.push(cumputers);
// if(cumputers.avalible=="yes"&&cumputers.wight>2){
//     document.write("<p>"+cumputers.compny+" "+cumputers.model+" "+cumputers.wight+" "+cumputers.avalible+"</p>");

// }
// }
// }

// cumputersFunc(2);

//22
// function teachersFunc(argonumber){
// var teachersArray=[];
// for(var i=0;i<argonumber;i++){
// var teachers={};
// teachers.name=prompt("enter name");
// teachers.salary=+prompt("enter salery");
// teachers.email=prompt("enter email");
// teachers.yearOfBirth=+prompt("enter year of birth");
// teachersArray.push(teachers);
// if(teachers.salary>100||teachers.yearOfBirth<1990){
//     document.write("<span>"+teachers.name+" "+teachers.salary+" "+teachers.email+" "+teachers.yearOfBirth+"</span>");

// }
// }
// }
// teachersFunc(2);

//23
// function furnituresFunc(argoNum){
// var furnituresArray=[];
// for(var i=0;i<argoNum;i++){
// var furnitures={};
// furnitures.name=prompt("enter name");
// furnitures.brand=prompt("enter brand");
// furnitures.storArray=[];
// furnitures.price=+prompt("enter price");
// var numOfStores=+prompt("enter number of stores");

// document.write(furnitures.name+"<br>");

// for(var j=0;j<numOfStores;j++){
//     furnitures.storArray.push(prompt("enter stores"));

//     document.write(furnitures.storArray[j]+"<br>");

// }
// furnituresArray.push(furnitures);

// }
// }

// furnituresFunc(2);



// function appartmentsFunc(argoNume){

//    var appartmentsArray=[];
//    for(var i=0;i<argoNume;i++){
//        var appartments={};
//        appartments.addres=prompt("enter addres");
//        appartments.rentPrice=+prompt("enter rent price");
//        appartments.sellPrice=+prompt("enter sell price");
//        appartments.intresting=[];
//        appartments.isTivoh=confirm("is it tivoh");
    

//        if(!appartments.isTivoh){
//        document.write(appartments.addres+"<br>");
// var intPp=+prompt("hom many intetesing");
//        for(var j=0;j<intPp;j++){
// appartments.intresting.push(prompt("enter intersting"))
//         document.write(appartments.intresting[j]+"<br>");

//        }
//     }

//        appartmentsArray.push(appartments);
       
//    } 
// }

// appartmentsFunc(1);

//25

// function statsFunc(){
// var usrerNum=+prompt("enter user number");
// statsArray=[];

// for(var i=0;i<usrerNum;i++){
// var stats={};
// stats.name=prompt("name");
// stats.citizens=+prompt("how many citizens");
// stats.citys=[];
// stats.isHabad=confirm("is habad thers?");

// if(stats.isHabad){
   
//  document.write(stats.name+"<br>");

// var citycNum=+prompt("how many citys");
// for(var j=0;j<citycNum;j++){
//     stats.citys.push(prompt("city name"+j))
//     document.write(stats.citys[j]+"<br>");

// }
// }



// }

// }
// statsFunc();



