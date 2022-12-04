import {Transform, pipeline} from "stream";


const transform = async () => {
    // Write your code here
    const readable = process.stdin
    const writable = process.stdout
    const transform = new Transform({
        transform(chunk, encoding, callback) {
            const chunkStr = chunk.toString().trim()
            const reversString = chunkStr.split('').reverse().join('')
            callback(null, reversString + '\n')
        },
    });

    pipeline(
        readable,
        transform,
        writable,
        err => {
            console.log(err)
        }
    )
};

await transform();