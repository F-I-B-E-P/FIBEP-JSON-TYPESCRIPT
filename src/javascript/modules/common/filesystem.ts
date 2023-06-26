var fs = require('fs').promises;

exports.readFile = function (path: string): Promise<string> {
    return fs.readFile(path, function (err: any, data: any): Promise<string> {
        if (err) {
            throw err;
        }

        return data;
    });
};

exports.writeFile = function (path: string, content: string) {
    fs.writeFile(path, content, function (err: any) {
        if (err) {
            throw err;
        }
    });
};