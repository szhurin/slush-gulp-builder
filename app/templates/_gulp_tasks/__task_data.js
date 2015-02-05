function getCommon(codeDir, dest, resultName, useInit, wrapFileNames) {

    dest = dest || 'js/';
    if (dest.substr(-1, 1) !== '/') {
        dest += '/';
    }

    useInit = useInit || false;
    var initDest = (useInit) ? codeDir + '/__init/__temp/' : dest;


    resultName = resultName || 'main.js';
    wrapFileNames = wrapFileNames || {
        start: '_start',
        end: '_end'
    };

    return {
        codeDir: codeDir,
        dest: dest,
        initDest: initDest,
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