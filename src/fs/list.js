import fs from 'fs/promises'
import path from 'path'
import {fileURLToPath} from 'url'

const list = async () => {
    // Write your code here
    const _filename = fileURLToPath(import.meta.url)
    const _dirname = path.dirname(_filename)
    const filePath = path.resolve(_dirname, 'files')

    fs.access(path.join(filePath), fs.constants.F_OK)
        .then(async () => {
            (await fs.readdir(filePath)).forEach(el=> console.log(el))
        })
        .catch(() =>{
            throw new Error('error')
        })


    // if (!fs.existsSync(filePath)) {
    //     throw new Error('FS operation failed')
    // } else {
    //     fs.readdirSync(filePath).forEach(el => {
    //         console.log(el)
    //     })
    // }

};

await list();