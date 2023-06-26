const fileSystemUtils = require('../common/filesystem');

exports.toFile = async function (path: string, content: string) {
    return fileSystemUtils.writeFile(path, content);
};

exports.toString = function (content: string) {
    return JSON.stringify(content);
};