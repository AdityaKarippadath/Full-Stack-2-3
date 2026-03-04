function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data received");
        }, 1000); 
    });
}

async function fetchData() {
    const result = await getData();
    console.log(result);
}

fetchData();