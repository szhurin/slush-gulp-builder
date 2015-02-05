function getCommon(codeDir, dest, resultName, wrapFileNames) {

    dest = dest || 'js/';
    if (dest.substr(-1, 1) !== '/') {
        dest += '/';
    }

    resultName = resultName || 'main.js';
    wrapFileNames = wrapFileNames || {
        start: '_start',
        end: '_end'
    };

    return {
        codeDir: codeDir,
        dest: dest,
        initDest: codeDir + '/__init/__temp/',
        destFileName: resultName,
        filterNoInitArray: ['**/*.js', '!**/__init/**', '!**/__temp/**'],
        filterInitArray: ['**/__init/**', '!**/__temp/**'],
        globalReplaceArray: [],
        wrapFileNames: wrapFileNames
    };
}

function getTaskData() {
    return {
        "js_test": getCommon('js_test', 'js', 'main_test.js'),

        "js": getCommon('js_parts', 'js', 'main.js')

    };
}

module.exports = getTaskData();