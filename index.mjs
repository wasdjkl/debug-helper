import {main} from './Main.mjs'

/**
 * Setting
 */
const watchResourcesPath = '.';
const phoneResourcesPath = '/sdcard/lncmop/';
const ignoreRules = [
    /^.idea/,
    /^libs/,
    /^WEB-INF/,
    /^encrypt/,
]

main({
    watchResourcesPath,
    phoneResourcesPath,
    ignoreRules,
});