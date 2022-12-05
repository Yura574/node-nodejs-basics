import path from 'path'
import fs from 'fs'
import {fileURLToPath} from 'url'


const read = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const _dirname = path.dirname(_filename)
    const filePath = path.join(_dirname, 'files')

    fs.createReadStream(path.join(filePath, 'fileToRead.txt'), {encoding: 'utf-8'})
        .pipe(process.stdout)

};

await read();