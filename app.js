// chapter 14-16

// Question 01 
//Answer
// let studentName=[];
// studentName[0]="roshaan";
// studentName[1]="faizan";
// studentName[2]="hamza";
// studentName[3]="kamil";
// console.log(studentName);
// console.log(studentName[0]);

// Question 02
// Answer

// const studentInfo = [
//     studentName="roshaan",
// ];
// console.log(studentInfo);

// Question 03
// Answer

// let studentNames=["roshaan","faizan","kamil","sami"];
// console.log(studentNames);

// Question 04
// Answer

// let studentAges=[20,19,15,20];
// console.log(studentAges);


// Question 05
// Answer

// let boolean=["true","false"];
// console.log(boolean);

// Question 06
// Answer

// let mixed=["true","roshaan",20];
// console.log(mixed);

// Question 07
// Answer

// let qualifications=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.","PhD"];
// document.write("1) "+qualifications[0]+"<br>");
// document.write("2) "+qualifications[1]+"<br>");
// document.write("3) "+qualifications[2]+"<br>");
// document.write("4) "+qualifications[3]+"<br>");
// document.write("5) "+qualifications[4]+"<br>");
// document.write("6) "+qualifications[5]+"<br>");
// document.write("7) "+qualifications[6]+"<br>");
// document.write("8) "+qualifications[7]+"<br>");

// Question 08
// Answer

// let studentNames=["roshaan", "faizan", "kamil"];
// let studentMarks=[400,350,300];
// let totalMarks=500;

// let studentone=(studentMarks[0]/totalMarks)*100;
// let studenttwo=(studentMarks[1]/totalMarks)*100;
// let studentthree=(studentMarks[2]/totalMarks)*100;

// document.write("Score of Roshaan is "+studentMarks[0]+". "+"percentage: "+studentone+"%"+"<br>");
// document.write("Score of Faizan is "+studentMarks[1]+". "+"percentage: "+studenttwo+"%"+"<br>");
// document.write("Score of Kamil is "+studentMarks[2]+". "+"percentage: "+studentthree+"%"+"<br>");


// Question 09
// Answer

// let colourNames=["black", "white", "blue", "green"];
// document.write(colourNames[0]+"<br>");
// document.write(colourNames[1]+"<br>");
// document.write(colourNames[2]+"<br>");
// document.write(colourNames[3]+"<br>");

//part A

// let colourNames=["black", "white", "blue", "green"];
// let userAsk=prompt("which colour you want in the beginning from "+colourNames);
// if(userAsk=="black"){
//     alert("The colour you asked for is already at the beginning of the array.");
//     userAsk=prompt("which colour you want in the beginning from "+colourNames);
// }
// if(userAsk=="white"){
//     // colourNames.shift();
//     colourNames.splice(1,1);
//     colourNames.unshift(userAsk);
//     // colourNames[1]="black";
//     document.write(colourNames+"<br>");

//   }else if(userAsk=="blue"){
//     colourNames.splice(2,2);
//     colourNames.unshift(userAsk);
//     document.write(colourNames+"<br>");
//   }else if(userAsk=="green"){
//     colourNames.splice(3,3);
//     colourNames.unshift(userAsk);
//     document.write(colourNames+"<br>");
//   }else{
//     colourNames.unshift(userAsk);
//     document.write(colourNames+"<br>");


//   }

//part B

// let colourNames=["black", "white", "blue", "green"];
// let userAsk=prompt("which colour you want in the last from "+colourNames);
// if(userAsk=="green"){
//     alert("The colour you asked for is already at the End of the array.");
//     userAsk=prompt("which colour you want in the beginning from "+colourNames);
// }
// if(userAsk=="white"){
//     colourNames.splice(colourNames.indexOf(userAsk),1);
//     colourNames.push(userAsk);
//     document.write(colourNames+"<br>");

//   }else if(userAsk=="blue"){
//     colourNames.splice(colourNames.indexOf(userAsk),1);
//     colourNames.push(userAsk);
//     document.write(colourNames+"<br>");
//   }else if(userAsk=="black"){
//     colourNames.splice(colourNames.indexOf(userAsk),1);
//     colourNames.push(userAsk);
//     document.write(colourNames+"<br>");
//   }else{
//     alert("you entered the wrong colour")
//   }

// part C
// let colourNames=["black", "white", "blue", "green"];
// let userAsk=prompt("how many colours you want to add in "+colourNames+ "? ");

// if(userAsk=="" || userAsk<=0){
//     alert("You can add atleast one colour");
//     userAsk=prompt("how many colours you want to add in "+colourNames+ "? ");
// }
// for(let i=0;i<userAsk;i++){
//    usercolour=prompt("Add your "+(i+1)+" colour name:");
//    if(colourNames.includes(usercolour)){
//        alert("You can't add the same colour twice");
//        usercolour=prompt("Add your "+(i+1)+" colour name:");
//    }
//    colourNames.splice(0,0);
//    colourNames.unshift(usercolour);
// }
// document.write(colourNames);

//part D
// let colourNames=["black", "white", "blue", "green"];

// let userAsk=prompt("which colour you want to delete from "+colourNames+ "? ");
// 
// if(userAsk.toLowerCase()=="black"){
//     colourNames.splice(colourNames.indexOf(userAsk),1);
//     document.write(colourNames);
// }else if(userAsk.toLowerCase()=="white"){
//     document.write(colourNames);
// }else if(userAsk.toLowerCase()=="blue"){
//     colourNames.splice(colourNames.indexOf(userAsk),1);
//     document.write(colourNames);
// }else if(userAsk.toLowerCase()=="green"){
//     colourNames.splice(colourNames.indexOf(userAsk),1);
//     document.write(colourNames);
// }else{
//     alert("you write the wrong colour")
// }

//optimize
// if(colourNames.includes(userAsk)){
// colourNames.splice(colourNames.indexOf(userAsk),1);
// document.write(colourNames);
// }else{alert("you write the wrong colour")};


// part F

// let colourNames=["black", "white", "blue", "green"];

// let userAsk=+prompt("At which position you want to add colour in "+colourNames+ "? ");

// if(userAsk==""||userAsk==null){
//     alert("You should enter a position");
//     userAsk=+prompt("At which position you want to add colour in "+colourNames+ "? ");
// }
// let usercolour=prompt("which colour you want to add in "+colourNames+ "? ");

// if(userAsk==1){
//     colourNames.unshift(usercolour);
//     document.write(colourNames);
// }else if(userAsk==2){
//     colourNames.splice(1,0,usercolour);
//     document.write(colourNames);
// }else if(userAsk==3){
//     colourNames.splice(2,0,usercolour);
//     document.write(colourNames);
// }else if(userAsk==4){
//     colourNames.splice(3,0,usercolour);
//     document.write(colourNames);
// }

// part G 

// let colourNames=["black", "white", "blue", "green"];
// let userdPositions=[]
// let userCount=+prompt("How many colours you want to delete?");
// if (userCount>4){
//     alert("ONLY 4 COLOURS ARE THERE IN LIST");
//     userCount=+prompt("How many colours you want to delete?")
// }
// for(i=0;i<userCount;i++){
//     userAsk=+prompt("At which position you want to delete colour in "+colourNames+ "? ");
//     if(userAsk==""||userAsk==null){
//         alert("You should enter a position");
//         userAsk=+prompt("At which position you want to delete colour in "+colourNames+ "? ");
//     }
//     if(userdPositions.includes(userAsk)){
//         alert("You can't delete same position twice");
//         userAsk=+prompt("At which position you want to delete colour in "+colourNames+ "? ");
//     }
//     userdPositions.push(userAsk);
//   if (userAsk>4){
//       alert("There is no colour at "+userAsk);
//       userAsk=+prompt("At which position you want to delete colour in "+colourNames+ "? ");
//   }
  
//   if(userAsk==1){
//       colourNames.splice(0,1);
//       console.log(colourNames);
//     }else if(userAsk==2){
//         colourNames.splice(1,1);
//         console.log(colourNames);
//     }else if(userAsk==3){
//         colourNames.splice(2,1);
//         console.log(colourNames);
//     }else if(userAsk==4){
//         colourNames.splice(3,1);        
//         console.log(colourNames);
//     }
   
// }
// document.write(colourNames);

// Question 10
// Answer
// let studentScores=[80,90,70,60];
// studentScores.sort();
// console.log(studentScores);





// Question 11(not completed)
// Answer

// let cityNames=["karachi", "islamabad", "lahore", "faisalabad", "multan"];
// let selectedCities=[];


// let selectCount=prompt("how many you want to be copied from "+cityNames+"? ");

// if(selectCount>5){
//     alert("You can select only 5 cities");
//     selectCount=prompt("How many you want to be copied from "+cityNames+"?");
// }

// for(let i=0;i<selectCount;i++){
//     let select=prompt("Enter your selected cities:");
//     if(!cityNames.includes(select)){
//         alert("Your selection is not in "+cityNames);
//         select=prompt("Enter your selected cities:");
//     }
//     selectedCities=cityNames.slice(cityNames.indexOf(select),cityNames.indexOf(select)+1)+" ";
//     let one = selectedCities;
//     document.write(one);
// }






// Question 12
// Answer

// let arr = ["This", " is ", " my ", " cat"];
// console.log("Array: "+arr);
// console.log("String: "+arr.join(""));


// Question 13
// Answer

// let devices=[];

// let userAsk=+prompt("How many devices to be added to your list; ");

// for(i=0;i<userAsk;i++){
//     let deviceName=prompt("Enter your "+(i+1)+" device");
//     devices.push(deviceName);
//     console.log("List of Devices: "+devices);
// }

// for(i=0; i=devices.length; i++){
//   console.log("OUT:"+devices.shift(i));
// }

// Question 14
// Answer

// let devices=[];

// let userAsk=+prompt("How many devices to be added to your list; ");

// for(i=0;i<userAsk;i++){
//     let deviceName=prompt("Enter your "+(i+1)+" device");
//     devices.unshift(deviceName);
//     console.log("List of Devices: "+devices);
// }

// for(i=0; i=devices.length; i++){
//   console.log("OUT:"+devices.shift(i));
// }


// Question 15
// Answer
// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


// let dropdown="<select>";

// for(let i=0;i<phoneManufacturers.length;i++){
//     dropdown+="<option value="+phoneManufacturers[i]+">"+phoneManufacturers[i]+"</option>";
// }
// dropdown+="</select>";

// document.write(dropdown);






