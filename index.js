const gitHelpers = require('./lib/git-helper');

if (process.argv.length < 3) {
    console.error('Provide namespace and url');
} else {
    gitHelpers.clone(process.argv[2], process.argv[3]).catch(err => {
        console.log('oh poop!', err.stderr);
    });
}

process.on('unhandledRejection', up => { throw up });
