import chokidar from 'chokidar'

export class FileWatcherFactory {
    static createFileWatcher(...args) {
        return new FileWatcher(...args)
    }
}

export class FileWatcher {
    constructor(path, ignoreRules) {
        this.path = path;
        this.ignoreRules = ignoreRules;
    }

    watch(fileChangeListener) {
        chokidar.watch(this.path, {
            ignored: this.ignoreRules,
            ignoreInitial: true,
        }).on('all', fileChangeListener);
    }
}

