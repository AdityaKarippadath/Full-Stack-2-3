function downloadFile(fileName, fileSize, onComplete, onSave) {
    console.log(`Starting download of ${fileName}...`);

    if (typeof fileSize !== "number" || fileSize <= 0) {
        console.log("Error: Invalid file size.");
        return;
    }

    setTimeout(() => {
        console.log(`Download complete: ${fileName} (${fileSize}MB)`);

        if (typeof onComplete === "function") {
            onComplete(fileName, fileSize);
        }

        if (typeof onSave === "function") {
            onSave(fileName);
        }

    }, 3000);
}

function showFileDetails(name, size) {
    console.log(`File Details -> Name: ${name}, Size: ${size}MB`);
}

function confirmSave(name) {
    console.log(`${name} has been saved to the Downloads folder.`);
}

downloadFile("file.txt", 5, showFileDetails, confirmSave);
downloadFile("image.png", 10, showFileDetails, confirmSave);
downloadFile("invalid.doc", -3, showFileDetails, confirmSave); 