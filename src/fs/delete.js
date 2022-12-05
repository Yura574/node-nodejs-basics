import {fileURLToPath} from 'url'
import fs from 'fs/promises'
import path from 'path'

const remove = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const _dirname = path.dirname(_filename)
    const filePath = path.resolve(_dirname, 'files')
    fs.access(path.join(filePath, 'fileToRemove.txt'), fs.constants.F_OK)
        .then(async ()=> await fs.unlink(path.join(filePath, 'fileToRemove.txt')))
        .catch(()=>{
            throw new Error('FS operation failed')
        })
};

await remove();