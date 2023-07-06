// Get selected  dropdown list value

var select = document.getElementById('apScore');

function sCore() {
var value = select.options[select.selectedIndex].value;
console.log(value)

//Converted array to string & alert
alert(value.toString());
}




// Get selected checkbox values

function storeCheckbox() {
    let arr = [];
    let checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0; i < checkboxes.length; i++) {
      arr.push(checkboxes[i].value)
    }
  // Converted array to string & alert
    alert(arr.toString());
   }

   

// Get selected  dropdown list value



function sCore() {
  var value = select.options[select.selectedIndex].value;
  console.log(value)

  //Converted array to string & alert
}




// Get selected checkbox values
let checkboxes

function checkBox() {
  let arr = [];
  checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  console.log(checkboxes)
  for (let i = 0; i < checkboxes.length; i++) {
      arr.push(checkboxes[i].value)
  }
  // Converted array to string & alert
  

  sCore()

}


// var filterCourses = faculties.filter(faculties => faculties.name === 'Science');
// console.log(filterCourses)

// faculties.forEach(faculty => {
//     faculty.courses.forEach(course => {
//         console.log(course.requirements )
//         console.log(course)
//         let apsValid = [''];
//         apsValid.push(course.requirements)
// })
// });



if ((arr.toString()) === faculties[0].courses[0].requirements.subjects[0]) {
  console.log("subject requirements met:Computer Engineering ")
}else {console.log("You dont qualify for" + faculties[0].courses[0].toString())}



if ((arr.toString()) === faculties[0].courses[1].requirements.subjects[0]) {
  console.log("subject requirements met:Information Technology: Software Development")
}else {console.log("You dont qualify for" + faculties[0].courses[1])}



if ((arr.toString()) === faculties[0].courses[2].requirements.subjects[0]) {
  console.log("subject requirements met: 'Information Technology: Web and Application Development'")
}else {console.log("You dont qualify for" + faculties[0].courses[2])}

if ((arr.toString()) === faculties[1].courses[0].requirements.subjects[0]) {
  console.log("subject requirements met:Biotechnology")
}else {console.log("You dont qualify for" + faculties[1].courses[0])}

if ((arr.toString()) === faculties[1].courses[1].requirements.subjects[0]) {
  console.log("subject requirements met:Chemistry")
}else {console.log("You dont qualify for" + faculties[1].courses[1])}

if ((arr.toString()) === faculties[1].courses[2].requirements.subjects[0]) {
  console.log("subject requirements met:Industry Physics")
}else {console.log("You dont qualify for" + faculties[1].courses[2])}

if ((arr.toString()) === faculties[2].courses[0].requirements.subjects[0]) {
  console.log("subject requirements met:Design")
}else {console.log("You dont qualify for" + faculties[2].courses[0])}

if ((arr.toString()) === faculties[2].courses[1].requirements.subjects[0]) {
  console.log("subject requirements met:Performing Arts")
}else {console.log("You dont qualify for" + faculties[2].courses[1])}

if ((arr.toString()) === faculties[2].courses[1].requirements.subjects[0]) {
  console.log("subject requirements met:Fine Art")
}else {console.log("You dont qualify for" + faculties[2].courses[1])}


if ((arr.toString()) === faculties[3].courses[0].requirements.subjects[0]) {
  console.log("subject requirements met:Education")
}else {console.log("You dont qualify for" + faculties[3].courses[0])}

if ((arr.toString()) === faculties[3].courses[1].requirements.subjects[0]) {
  console.log("subject requirements met:Journalism")
} else {console.log("You dont qualify for" + faculties[3].courses[1])}

{/* <input type="checkbox" id="subjects" name="Math_Literacy" value="mathslit">
            <label for="mathslit"> Mathematics Literacy</label><br>
            <input type="checkbox" id="subjects" name="Technical_Mathematics" value="mathstech">
            <label for="mathstech"> Technical Mathematics</label><br><br></br>

            <input type="checkbox" id="subjects" name="Sepedi_HL" value="SEPHL">
            <label for="SEPHL"> Sepedi HL</label><br>
            <input type="checkbox" id="subjects" name="Life_Orientation" value="LO">
            <label for="LO">Life Orientation</label><br><br>
            
            <input type="checkbox" id="subjects" name="Electrical" value="ELT">
            <label for="ELT"> Electrical Technology</label><br>
            <input type="checkbox" id="subjects" name="Mechanical" value="MECT">
            <label for="mECT"> Mechanical Technology</label><br>
            <input type="checkbox" id="subjects" name="Civil" value="CVT">
            <label for="CVT"> Civil Technology</label><br><br>
            
            <input type="checkbox" id="subjects" name="Drawing" value="EGD">
            <label for="EGD"> Engineering Graphics and Design</label><br></br> */}


            //  console.log(arr.length);
//  console.log(subReg.length);
    for(let i = 0; i < subReg.length; i++ ) {
      console.log(arr.includes(subReg[i]));
  }
  // for (let i = 0; i < arr.length; i++) {
      // console.log(i);
      for (let m = 0; m < subReg.length; m++ ) {
          // console.log({  s: subReg[m]});

          let subjects = ['CAT', 'LO', 'Afr']
          let greeting = "hello"
          // console.log(subjects);
          for (let n = 0; n < subjects.length; n++){
              // console.log(subjects[n]);
              // console.log(greeting);
              // console.log({  sInNest: subReg[m]});



          }        }
  // }