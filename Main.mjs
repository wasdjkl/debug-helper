import {FileWatcherFactory} from "./FileWatcher.mjs";
import {FileTransfer} from "./FileTransfer.mjs";

export function main(args) {
    const options = Object.assign({
        watchResourcesPath: '.',
        phoneResourcesPath: "/sdcard/debug-helper",
        ignoreRules: [],
    }, args)

    const filetransfer = new FileTransfer(options.phoneResourcesPath);

    function fileChangeListener(event, filePath) {
        console.log(`file changed: ${event} ${filePath}`);
        if (event === 'add' || event === 'change') {
            filetransfer.push(filePath, options.phoneResourcesPath).then(e => {
                console.log(e)
            })
        }
    }

    const fileWatcher = FileWatcherFactory.createFileWatcher(options.watchResourcesPath, options.ignoreRules);
    fileWatcher.watch(fileChangeListener)
}
