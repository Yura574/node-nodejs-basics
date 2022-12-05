import {fileURLToPath} from "url";
import path from "path";
import fs from "fs";

const write = async () => {
    // Write your code here
    const _filename = fileURLToPath(import.meta.url)
    const _dirname = path.dirname(_filename)
    const filePath = path.join(_dirname, 'files')

    const file = fs.createWriteStream(path.join(filePath, 'fileToWrite.txt'))
    process.stdin.pipe(file)

    process.stdin.resume();

};

await write();