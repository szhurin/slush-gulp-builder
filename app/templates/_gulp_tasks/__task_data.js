var taskData = {
    "js_test": {
        codeDir: 'js_test',
        dest: './js/',
        initDest: 'js_test/__init/__temp/',
        destFileName: 'main_test.js',
        filterNoInitArray: ['**/*.js', '!**/__init/**', '!**/__temp/**'],
        filterInitArray: ['**/__init/**', '!**/__temp/**'],
        globalReplaceArray: []
    },
    "js": {
        codeDir: 'js_parts',
        dest: './js/',
        initDest: 'js_parts/__init/__temp/',
        destFileName: 'main.js',
        filterNoInitArray: ['**/*.js', '!**/__init/**', '!**/__temp/**'],
        filterInitArray: ['**/__init/**', '!**/__temp/**'],
        globalReplaceArray: []
    }
};


module.exports = taskData;