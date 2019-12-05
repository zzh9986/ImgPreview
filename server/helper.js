exports.findArg = function (arg) {
    if (process.argv.join('').indexOf(arg) > -1) {
        return process.argv[process.argv.indexOf('--' + arg) + 1];
    }
    return null;
}