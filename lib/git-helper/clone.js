const util = require('util');
const cp = require('child_process');
const fs = require('fs');
const execP = util.promisify(cp.exec);
const mkdirP = util.promisify(fs.mkdir);

async function clone(nameSpace, url) {
    const command = `git clone ${url}`;
    const options = {
        cwd: nameSpace
    };
    
    try {
        await execP(command, options);
        return;
    } catch (e) {
        try {
            if (e.code === 'ENOENT') {
                // create dir and retry clone
                await mkdirP(nameSpace);
                clone(nameSpace, url);
            }  else {
                // something else went wrong
                throw e;
            }
        } catch (e2) {
            console.log('some crazy shit happened');
            throw e2;
        }
    }
}

module.exports.clone = clone;
