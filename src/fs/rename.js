import path from 'path'
import fs from 'fs/promises'
import {fileURLToPath} from 'url'

const rename = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const _dirname = path.dirname(_filename)
    const filePath = path.join(_dirname, 'files')
    const oldName = 'wrongFilename.txt'
    const newName = 'properFilename.md'
    const exist = async (filePath, fileName) => {
        return fs.access(path.join(filePath, fileName), fs.constants.F_OK)
            .then(() => true)
            .catch(() => false)
    }

    if (await exist(filePath, oldName) && !await exist(filePath, newName)) {
        await fs.rename(path.join(filePath, oldName), path.join(filePath, newName))
    } else {
        throw new Error('FS operation failed')
    }
};

await rename();