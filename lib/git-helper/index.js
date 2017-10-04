const git = require('simple-git')();
const manifest = require('./manifest');


function sync(manifest) {
	const remote = manifest.remote[0];
	git
		.addRemote(remote.name, remote.repo)
		.push(remote.name, 'master');
}

sync(manifest);


exports.sync = sync;
