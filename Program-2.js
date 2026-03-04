function fetchStudentData(rollNumber) {
    return new Promise((resolve, reject) => {
        console.log("Fetching student data...");

        setTimeout(() => {
            if (typeof rollNumber === "number" && rollNumber > 0) {
                resolve({
                    rollNumber: rollNumber,
                    name: "John Doe"
                });
            } else {
                reject("Invalid roll number. Please enter a positive number.");
            }
        }, 2000); 
    });
}

function fetchStudentGrades(rollNumber) {
    return new Promise((resolve) => {
        console.log("Fetching student grades...");

        setTimeout(() => {
            resolve({
                rollNumber: rollNumber,
                grades: ["A", "B+", "A-"]
            });
        }, 1500);
    });
}

fetchStudentData(101)
    .then((student) => {
        console.log("Student Data:", student);
        return fetchStudentGrades(student.rollNumber); 
    })
    .then((grades) => {
        console.log("Student Grades:", grades.grades);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

fetchStudentData(-5)
    .then((student) => {
        console.log("Student Data:", student);
        return fetchStudentGrades(student.rollNumber);
    })
    .then((grades) => {
        console.log("Student Grades:", grades.grades);
    })
    .catch((error) => {
        console.log("Error:", error);
    });