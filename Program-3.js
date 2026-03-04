function fetchUserProfile(userId) {
    return new Promise((resolve, reject) => {
        console.log("Fetching user profile...");

        setTimeout(() => {
            if (typeof userId === "number" && userId > 0) {
                resolve({
                    userId: userId,
                    name: "Alice"
                });
            } else {
                reject("Invalid user ID. Please provide a positive number.");
            }
        }, 1000); 
    });
}

function fetchUserCourses(userId) {
    return new Promise((resolve) => {
        console.log("Fetching user courses...");

        setTimeout(() => {
            resolve({
                userId: userId,
                courses: [101, 102, 103] 
            });
        }, 2000); 
    });
}

function fetchCourseDetails(courseId) {
    return new Promise((resolve) => {
        console.log("Fetching course details...");

        setTimeout(() => {
            resolve({
                courseId: courseId,
                courseName: "JavaScript Basics",
                credits: 3
            });
        }, 1500);
    });
}

fetchUserProfile(1)
    .then((profile) => {
        console.log("User Profile:", profile);
        return fetchUserCourses(profile.userId);
    })
    .then((courseData) => {
        console.log("Course List:", courseData.courses);
        return fetchCourseDetails(courseData.courses[0]);
    })
    .then((courseDetails) => {
        console.log("Course Details:", courseDetails);
    })
    .catch((error) => {
        console.log("Error:", error);
    });

fetchUserProfile(-1)
    .then((profile) => {
        console.log("User Profile:", profile);
        return fetchUserCourses(profile.userId);
    })
    .then((courseData) => {
        console.log("Course List:", courseData.courses);
        return fetchCourseDetails(courseData.courses[0]);
    })
    .then((courseDetails) => {
        console.log("Course Details:", courseDetails);
    })
    .catch((error) => {
        console.log("Error:", error);
    });