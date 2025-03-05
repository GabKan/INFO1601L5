let bob = {
  fname: "bob",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1603',
      grades: [ 89, 34, 67 ]
    },
    {
      course: 'INFO 1601',
      grades: [ 89, 34, 67 ]
    }
  ]
};

let sally = {
  fname: "sally",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1601',
      grades: [ 100, 89, 79 ]
    }
  ]
};

let paul = {
  fname: "paul",
  lname: "smith",
  age: 18,
  height: 6,
  transcript:[
    {
      course: 'INFO 1600',
      grades: [ 89, 34, 67 ]
    }
  ]
};

const students = [bob, sally, paul];

function getAverageGrade(student, course) {
    let sum = 0;
    let count = 0;
    for(let transcript of student.transcript) {
        if(transcript.course === course) {
            for(let g of transcript.grades){
                sum += g;
                count++;
            }
            found = true;
        }
    }
    if(count > 0) {
        return sum / count;
    } else {
        return -1;
    }
}

function getAssignmentMark(student, course, num) {
    for(let transcript of student.transcript) {
        if(transcript.course === course) {
            return transcript.grades[num];
        }
    }
    return -1;
}

function averageAssessment(students, courseName, assignment) {
    let sum = 0;
    let count = 0;
    for(let student of students) {
        let mark = getAssignmentMark(student, courseName, assignment);
        if(mark !== -1) {
            sum += mark;
            count++;
        }
    }
    return sum / count;
}