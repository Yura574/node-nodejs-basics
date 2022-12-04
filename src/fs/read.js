import fs from 'node:fs/promises'
import path from 'path'
import {fileURLToPath} from 'url'

const read = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const _dirname = path.dirname(_filename)
    const pathName = path.resolve(_dirname, 'files')

    fs.access(path.join(pathName, 'fileToRead.txt'), fs.constants.F_OK)
        .then(async () => {
                console.log(await fs.readFile(path.join(pathName, 'fileToRead.txt'), {encoding: 'utf-8'}))
            }
        )
        .catch(() => {
            throw new Error('FS operation failed')
        })

};

await read();