function checkExamResult(score) {
    return new Promise((resolve, reject) => {
        console.log("Checking exam result...");

        setTimeout(() => {
            if (score >= 50) {
                resolve("You passed!");
            } else {
                reject("You failed, try again.");
            }
        }, 2000); 
    });
}

checkExamResult(65)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });