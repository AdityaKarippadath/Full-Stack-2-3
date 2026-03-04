function preparePizza() {
    return new Promise((resolve) => {
        console.log("Preparing pizza...");
        
        setTimeout(() => {
            resolve("Pizza ready!");
        }, 2000); 
    });
}

async function orderPizza() {
    const message = await preparePizza(); 
    console.log(message);
    console.log("Delivering pizza");
}

orderPizza();