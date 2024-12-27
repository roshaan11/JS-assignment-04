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
//     colourNames[0]="white";
//     colourNames[1]="black";
//     document.write(colourNames+"<br>");

//   }else if(userAsk=="blue"){
//     colourNames[0]="blue";
//     colourNames[2]="black";
//     document.write(colourNames+"<br>");
//   }else if(userAsk=="green"){
//     colourNames[0]="green";
//     colourNames[3]="black";
//     document.write(colourNames+"<br>");
//   }else{
//     alert("you entered the wrong colour")
//   }

//part B

// let colourNames=["black", "white", "blue", "green"];
// let userAsk=prompt("which colour you want in the last from "+colourNames);
// if(userAsk=="green"){
//     alert("The colour you asked for is already at the beginning of the array.");
//     userAsk=prompt("which colour you want in the beginning from "+colourNames);
// }
// if(userAsk=="white"){
//     colourNames[3]="white";
//     colourNames[1]="green";
//     document.write(colourNames+"<br>");

//   }else if(userAsk=="blue"){
//     colourNames[3]="blue";
//     colourNames[2]="green";
//     document.write(colourNames+"<br>");
//   }else if(userAsk=="black"){
//     colourNames[3]="black";
//     colourNames[0]="green";
//     document.write(colourNames+"<br>");
//   }else{
//     alert("you entered the wrong colour")
//   }

// part C
// let colourNames=["black", "white", "blue", "green"];
// let userAsk=prompt("how many colours you want to add in "+colourNames+ "? ");
// if (userAsk>4){
//     alert("you can add 4 colours only");
//     userAsk=prompt("how many colours you want to add in "+colourNames+ "? ");
// }

// for(let i=0;i<userAsk;i++){
//    usercolour=prompt("Add your "+(i+1)+" colour name:");
//    console.log(colourNames[i]=usercolour);
//    if(userAsk==2){
//    console.log(colourNames[4]="black");
//    console.log(colourNames[5]="white");
//     }else if(userAsk==3){
//     console.log(colourNames[4]="black");
//     console.log(colourNames[5]="white");
//     console.log(colourNames[6]="blue");
//     }else if(userAsk==4){
//     console.log(colourNames[4]="black");
//     console.log(colourNames[5]="white");
//     console.log(colourNames[6]="blue");
//     console.log(colourNames[7]="green");
//     }

// }
// document.write(colourNames);

//part D
// let colourNames=["black", "white", "blue", "green"];

// let userAsk=prompt("which colour you want to delete from "+colourNames+ "? ");

// if(userAsk.toLowerCase()=="black"){
//     delete colourNames[0];
//     document.write(colourNames);
// }else if(userAsk.toLowerCase()=="white"){
//     delete colourNames[1];
//     document.write(colourNames);
// }else if(userAsk.toLowerCase()=="blue"){
//     delete colourNames[2];
//     document.write(colourNames);
// }else if(userAsk.toLowerCase()=="green"){
//     delete colourNames[3];
//     document.write(colourNames);
// }else{
//     alert("you write the wrong colour")
// }

// part F

// let colourNames=["black", "white", "blue", "green"];

// let userAsk=+prompt("At which position you want to add colour in "+colourNames+ "? ");
// let usercolour=prompt("which colour you want to add in "+colourNames+ "? ");
// if (userAsk>4){
//     alert("There is no colour at "+userAsk);
//     userAsk=+prompt("At which position you want to add colour in "+colourNames+ "? ");
// }

// if(userAsk==1){
//     colourNames[0]=usercolour;
//     document.write(colourNames);
// }else if(userAsk==2){
//     colourNames[1]=usercolour;
//     document.write(colourNames);
// }else if(userAsk==3){
//     colourNames[2]=usercolour;
//     document.write(colourNames);
// }else if(userAsk==4){
//     colourNames[3]=usercolour;
//     document.write(colourNames);
// }

// part G 

// let colourNames=["black", "white", "blue", "green"];

// let userCount=+prompt("How many colours you want to delete?");
// if (userCount>4){
//     alert("ONLY 4 COLOURS ARE THERE IN LIST");
//     userCount=+prompt("How many colours you want to delete?")
// }
// for(i=0;i<userCount;i++){
//     userAsk=+prompt("At which position you want to delete colour in "+colourNames+ "? ");
//   if (userAsk>4){
//       alert("There is no colour at "+userAsk);
//       userAsk=+prompt("At which position you want to delete colour in "+colourNames+ "? ");
//   }
  
//   if(userAsk==1){
//       delete colourNames[0];
//       console.log(colourNames);
//     }else if(userAsk==2){
//         delete colourNames[1];
//         console.log(colourNames);
//     }else if(userAsk==3){
//         delete colourNames[2];
//         console.log(colourNames);
//     }else if(userAsk==4){
//         delete colourNames[3];
//         console.log(colourNames);
//     }
// }
// document.write(colourNames);

// Question 10
// Answer
// let studentScores=[80,90,70,60];
// studentScores.sort();
// console.log(studentScores);

// Question 11
// Answer
// let cityNames=["karachi", "islamabad", "lahore", "faisalabad", "multan"];
// let selectedCities=["karachi", "islamabad", "lahore"];

// document.write("All cities are :<br>"+cityNames+"<br>");
// document.write("Selected cities are :<br>"+selectedCities);


// let cityNames=["karachi", "islamabad", "lahore", "faisalabad", "multan"];
// let selectedCities=[];


// let selectCount=prompt("how many you want to select? ")

// if(selectCount>5){
//     alert("You can select only 5 cities");
//     selectCount=prompt("how many you want to select? ");
// }

// for(let i=0;i<selectCount;i++){
// let select=prompt("Enter your selected cities:");
// // if(select.toLowerCase()!=cityNames){
// //     alert("This city is not in the list");
// // }else
//  if(select.toLowerCase()=="karachi"){
//     delete cityNames[0];
//     selectedCities[0]="karachi";
//     console.log(selectedCities);
// }else if(select.toLowerCase()=="islamabad"){
//     delete cityNames[1];
//     selectedCities[1]="islamabad";
//     console.log(selectedCities);
// }else if(select.toLowerCase()=="lahore"){
//     delete cityNames[2];
//     selectedCities[2]="lahore";
//     console.log(selectedCities);
// }else if(select.toLowerCase()=="faisalabad"){
//     delete cityNames[3];
//     selectedCities[3]="faisalabad";
//     console.log(selectedCities);
// }else if(select.toLowerCase()=="multan"){
//     delete cityNames[4];
//     selectedCities[4]="multan";
//     console.log(selectedCities);}

// }

// document.write(selectedCities);

