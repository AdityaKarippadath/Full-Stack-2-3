function boilWater(callback) {
    console.log("Boiling water...");
    
    setTimeout(() => {
        console.log("Water is boiled!");
        callback(); 
    }, 3000);
}

function makeTea() {
    console.log("Making tea...");
    console.log("Tea is ready! ☕");
}

boilWater(makeTea);