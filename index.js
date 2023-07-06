

const faculties = [
  {
    name: "IT",
    courses: [
      {
        courseName: "Computer Engineering",
        requirements: {
          aps: 30,
          subjects: [ 'Maths',"Science"],
        },
      },
      {
        courseName: "Information Technology: Software Development",
        requirements: {
          aps: 26,
          subjects: [ "Science", 'Maths'],
        },
      },
      {
        courseName: "Information Technology: Web and Application Development",
        requirements: {
          aps: 20,
          subjects: [ "Science", 'Maths'],
        },
      },
    ],
  },
  {
    name: "Science",
    courses: [
      {
        courseName: "Biotechnology",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science", "Life Sciences"],
        },
      },
      {
        courseName: "Chemistry",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Industry Physics",
        requirements: {
          aps: 20,
          subjects: ["Maths", "Science"],
        },
      },
    ],
  },
  {
    name: "Art & Design",
    courses: [
      {
        courseName: "Design",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Performing Arts",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science"],
        },
      },
      {
        courseName: "Fine Art",
        requirements: {
          aps: 20,
          subjects: ["Maths", "Science"],
        },
      },
    ],
  },
  {
    name: "Humanities",
    courses: [
      {
        courseName: "Education",
        requirements: {
          aps: 30,
          subjects: ["Maths", "Science", "English"],
        },
      },
      {
        courseName: "Journalism",
        requirements: {
          aps: 26,
          subjects: ["Maths", "Science", "English"],
        },
      },
    ],
  },
];

let select = document.getElementById("apScore");

function compar() {
  // dropdown input grabbing and validating
  value = select.options[select.selectedIndex].value;
  // if (Number(value) === faculties[0].courses[0].requirements.aps) {
  //     console.log("you qualify")
  // } else {
  //     console.log("you dont qualify")

  // };
  // console.log(value)
  // console.log(faculties[0].courses[0].requirements.aps)

  //checkboxes grabbing and validating
  let arr = [];
  checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
  for (let i = 0; i < checkboxes.length; i++) {
    arr.push(checkboxes[i].value);
  }

  // console.log(arr.toString());

  if (
    arr[0].toString() === faculties[0].courses[0].requirements.subjects[0] &&
    arr[1].toString() === faculties[0].courses[0].requirements.subjects[1] &&
    Number(value) === faculties[0].courses[0].requirements.aps
  ) {
    console.log("You qualify for: Computer Engineering, Design ");
  } else {
    console.log("subject requirements Not met");

    if (
      arr[0].toString() === faculties[0].courses[0].requirements.subjects[0] &&
      arr[1].toString() === faculties[0].courses[0].requirements.subjects[1] &&
      arr[2].toString() === faculties[1].courses[0].requirements.subjects[2] &&      
      Number(value) === faculties[0].courses[0].requirements.aps
    ) {
      console.log("You qualify for: ");
    }
    // if (
    //   arr[0].toString() === faculties[0].courses[0].requirements.subjects[0] &&
    //   arr[1].toString() === faculties[0].courses[0].requirements.subjects[1] &&
    //   Number(value) === faculties[0].courses[0].requirements.aps
    // ) {
    //   console.log("You qualify for: Computer Engineering, Design ");
    // }
  }

  // console.log(arr[0])
  // console.log(arr[1])
}

function compare() {

    let arr = [];

    checkboxes = document.querySelectorAll("input[type='checkbox']:checked");
    for (let i = 0; i < checkboxes.length; i++) {
      arr.push(checkboxes[i].value);
    }
  

    for ( let f = 0; f < faculties.length; f++) {
        // console.log(faculties[f]);
        let faculty = faculties[f]
        // console.log(faculty);
        for (let c = 0; c < faculty.courses.length; c++) {
            // console.log(faculty.courses[c])
            let course = faculty.courses[c]
            var aps = 25
            if (aps >= course.requirements.aps) {
                console.log('you qualify')
            } else {
                console.log('bye bye');
            }
        
            
        }
    }


} 