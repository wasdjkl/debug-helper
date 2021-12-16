const childProcess = require("child_process");

function md5Sum(filePath) {
    return new Promise((resolve, reject) => {
        childProcess.exec(`adb shell md5sum ${filePath}`, function (execException, stdout) {
            if (execException) reject(execException);
            else {
                const md5 = stdout.split(" ")[0];
                resolve(md5);
            }
        });
    })
}

md5Sum(`${phoneResourcesPath}biz/js/marketingForm.js`).then(e => {
    console.log(e)
})

