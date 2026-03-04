function bookTrainTicket(isAvailable) {
    return new Promise((resolve, reject) => {
        console.log("Processing ticket booking...");

        setTimeout(() => {
            if (isAvailable) {
                resolve("Ticket booked successfully");
            } else {
                reject("Ticket booking failed");
            }
        }, 2000);
    });
}

bookTrainTicket(true)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });