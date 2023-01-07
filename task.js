// Task 1
function create(obj) {
    if (obj.IsIterable) {
      for (let element of obj.sampleArray) {
        console.log(element);
      }
    } else {
      console.log("provided array isn't iterable");
    }
  }
  let sampleObject = {
    IsIterable: true,
    sampleArray: [12,63,21,34,98,57]
  };
  
  create(sampleObject);

// Task 2
 function checkPythagoras (x,y,z) {
    if (x**2+y**2==z**2) {
        console.log(true);
    }
    else {
        console.log(false);
    }
 }

 checkPythagoras(4,3,5)

 //Task 3
 function minMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    return `Min value is ${min} and Max value is ${max}`;
  }
  let result = minMax([2,14,25,75,11,6]);
  console.log(result); 

//Task 4
function checkDeg(deg) {
    if (deg < 0 || deg > 180) {
      return "Invalid angle";
    } else if (deg < 90) {
      return "Acute angle";
    } else if (deg === 90) {
      return "Right angle";
    } else if (deg < 180) {
      return "Obtuse angle";
    } else {
      return "Straight angle";
    }
  }

  let result1 = checkDeg(92);
  console.log(result1); 
  
  result = checkDeg(45);
  console.log(result1); 
  
  result = checkDeg(180);
  console.log(result1);
  
  result = checkDeg(-10);
  console.log(result1); 

// Task 5
function checkStudentGrade(students) {
    for (let student of students) {
      if (student.grade >= 81) {
        student.finalResult = 'A';
      } else if (student.grade >= 71) {
        student.finalResult = 'B';
      } else if (student.grade >= 61) {
        student.finalResult = 'C';
      } else if (student.grade >= 51) {
        student.finalResult = 'D';
      } else {
        student.finalResult = 'F';
      }
    }
    return students;
  }
  let students = [
    {name: 'student1', grade: 91},
    {name: 'student2', grade: 71},
    {name: 'student3', grade: 45}
  ];
  
  students = checkStudentGrade(students);
  console.log(students);
