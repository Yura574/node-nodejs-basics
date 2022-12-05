import zlib from 'zlib'
import fs from 'fs'
import fsPromises from 'fs/promises'
import path from 'path'
import {fileURLToPath} from 'url'

const compress = async () => {
    // Write your code here
    const _filename = fileURLToPath(import.meta.url)
    const _dirname = path.dirname(_filename)
    const filePath  = path.join(_dirname, 'files')

    const zip = zlib.createGzip()

    const input = fs.createReadStream(path.join(filePath, 'fileToCompress.txt'), {encoding:"utf-8"})
    const output = fs.createWriteStream(path.join(filePath,'archive.gz'))

    input.pipe(zip).pipe(output)

    fsPromises.access(path.join(filePath, 'fileToCompress.txt'), fsPromises.constants.F_OK)
        .then(async ()=> await fsPromises.unlink(path.join(filePath, 'fileToCompress.txt')))
        .catch((err)=>{
            console.log(err)
            throw new Error('FS operation failed')
        })

};

await compress();