function loginUser(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Checking login credentials...");

        setTimeout(() => {
            if (username === "student" && password === "pass123") {
                resolve("Login successful!");
            } else {
                reject("Invalid username or password.");
            }
        }, 1000); 
    });
}

function fetchUserPreferences(username) {
    return new Promise((resolve) => {
        console.log("Fetching user preferences...");

        setTimeout(() => {
            resolve({
                username: username,
                theme: "dark",
                notifications: true
            });
        }, 1500); 
    });
}

async function userLoginFlow(username, password) {
    try {
        const loginMessage = await loginUser(username, password);
        console.log(loginMessage);

        const preferences = await fetchUserPreferences(username);
        console.log("User Preferences:", preferences);
        console.log("---------------------------");
    } catch (error) {
        console.log("Error:", error);
        console.log("---------------------------");
    }
}

userLoginFlow("student", "pass123"); 
userLoginFlow("student", "wrongpass"); 
userLoginFlow("guest", "pass123"); 