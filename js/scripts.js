$(document).ready(function() {

  const flavors = ['Strawberry', 'Chocolate', 'Vanilla', 'Cherry', 'Orange']

for (let i=0; i < flavors.length; i++) {
  const item = flavors[i]
    $("p").append(item);
  console.log(item)
}

// var contacts =[];

// function getInfo() {
//     var firstName = prompt("Enter first name");
//     var lastName = prompt("Enter last name");
//     var emailId = prompt("Enter Email ID");
//     var phoneNo = prompt("Enter Phone number");
//    // var fname, lname, email, phone; //also this is not required. you can set dynamic property names in a object.
//     var person ={
//         fname : firstName,
//         lname : lastName,
//         email : emailId,
//         phone : phoneNo
//     };
//     contacts.push(person);  

//     var currPerson = contacts[contacts.length-1]; //take the last pushed object from the array
    
//     var lastNameFirstChar = currPerson.lname.charAt(0).toUpperCase();
  
//     if(!document.getElementById(lastNameFirstChar + "_holder")){      
//     document.getElementById("mydiv").innerHTML += "<div  id='"+lastNameFirstChar+"_holder' class='holder'><span class='charValue'>"+lastNameFirstChar+"</span></br></div>";
    
//   }
//   document.getElementById(lastNameFirstChar + "_holder").innerHTML += currPerson.fname+" "+currPerson.lname + "<br/>";


// }



// const flavors = ['Strawberry', 'Chocolate', 'Vanilla', 'Cherry', 'Orange']

// for (const x of (flavors)) {
//   console.log(x);
// }