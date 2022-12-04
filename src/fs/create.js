import fs from 'fs/promises'
import * as path from "path";
import {fileURLToPath} from 'url'

const create = async () => {

    const _filename = fileURLToPath(import.meta.url);
    const _dirname = path.dirname(_filename);
    const filePath = path.resolve(_dirname, 'files')
    const fileName = 'fresh.txt'
    const exist = async (filePath, fileName) => {
        return fs.access(path.join(filePath, fileName), fs.constants.F_OK)
            .then(() => true)
            .catch(() => false)
    }
    if (!await exist(filePath, fileName)) {
        console.log(1)
        await fs.writeFile(path.join(filePath, fileName), 'I am fresh and young')
    } else {
        throw new Error('FS operation failed')
    }


};

await create();