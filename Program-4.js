function fetchBookDetails(bookId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching details for Book ID: ${bookId}...`);

        setTimeout(() => {
            if (typeof bookId === "number" && bookId > 0) {
                resolve({
                    bookId: bookId,
                    title: `Book Title ${bookId}`,
                    available: bookId % 2 === 0 
                });
            } else {
                reject("Invalid Book ID. Please provide a positive number.");
            }
        }, 1000); 
    });
}

async function displayBook(bookId) {
    try {
        const book = await fetchBookDetails(bookId);
        console.log(`Title: ${book.title}`);
        console.log(`Availability: ${book.available ? "Available" : "Not Available"}`);
        console.log("---------------------------");
    } catch (error) {
        console.log("Error:", error);
        console.log("---------------------------");
    }
}

async function displayTwoBooks(bookId1, bookId2) {
    try {
        const book1 = await fetchBookDetails(bookId1);
        console.log(`Title: ${book1.title}`);
        console.log(`Availability: ${book1.available ? "Available" : "Not Available"}`);
        console.log("---------------------------");

        const book2 = await fetchBookDetails(bookId2);
        console.log(`Title: ${book2.title}`);
        console.log(`Availability: ${book2.available ? "Available" : "Not Available"}`);
        console.log("---------------------------");

    } catch (error) {
        console.log("Error:", error);
    }
}

displayBook(1);      
displayBook(2);      
displayBook(-5);     

displayTwoBooks(3, 4);