function downloadFile(callback) {
    console.log("Downloading file...");

    setTimeout(function () {
        callback();  
    }, 2000);
}

function onDownloadComplete() {
    console.log("File downloaded");
}

downloadFile(onDownloadComplete);