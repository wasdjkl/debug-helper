import childProcess from "child_process";

export class FileTransfer {
    constructor(phoneResourcesPath) {
        this.phoneResourcesPath = phoneResourcesPath;
    }

    push(filePath) {
        return new Promise((resolve, reject) => {
            filePath = filePath.replace(/\\/g, "/");
            childProcess.exec(`adb push ${filePath} ${this.phoneResourcesPath}${filePath}`, function (execException, stdout) {
                if (execException) reject(execException);
                else {
                    resolve(stdout);
                }
            });
        })
    }

}
