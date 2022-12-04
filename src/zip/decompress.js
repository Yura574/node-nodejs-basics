import {fileURLToPath} from "url";
import path from "path";
import zlib from "zlib";
import fs from "fs";
import fsPromises from "fs/promises";

const decompress = async () => {
    // Write your code here
    const _filename = fileURLToPath(import.meta.url)
    const _dirname = path.dirname(_filename)
    const filePath  = path.join(_dirname, 'files')

    const unzip = zlib.createUnzip()

    const input = fs.createReadStream(path.join(_dirname, 'files', 'archive.gz'))
    const output = fs.createWriteStream(path.join(_dirname, 'files','fileToCompress.txt'))
    input.pipe(unzip).pipe(output)

    fsPromises.access(path.join(filePath, 'archive.gz'), fsPromises.constants.F_OK)
        .then(async ()=> await fsPromises.unlink(path.join(filePath, 'archive.gz')))
        .catch((err)=>{
            console.log(err)
            throw new Error('FS operation failed')
        })

};


await decompress();