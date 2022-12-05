import path from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import * as a from './files/a.json' assert { type: "json" };
import b from './files/b.json' assert { type: "json" };
import {fileURLToPath} from 'url'



const random = Math.random();

export let unknownObject;
random > 0.5
    ? unknownObject = a
    : unknownObject = b

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const _filename = fileURLToPath(import.meta.url)
const _dirname = path.dirname(_filename)
console.log(`Path to current file is ${_filename}`);
console.log(`Path to current directory is ${_dirname}`);

export const myServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});


