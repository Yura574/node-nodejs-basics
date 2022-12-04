import fs from 'fs/promises'
import {fileURLToPath} from 'url'
import path from "path";

const copy = async () => {

    const _filename = fileURLToPath(import.meta.url);
    const _dirname = path.dirname(_filename);
    const filePath = path.resolve(_dirname, 'files')
    const filePathCopy = path.resolve(_dirname, 'files_copy')

    const exist = async (filePath) => {
        return fs.access(filePath, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false)
    }
    if (!await exist(filePath) || await exist(filePathCopy)) {

        throw new Error('FS operation failed must be thrown')
    } else {
        await fs.mkdir(filePathCopy, () => {
        })
        const copyFiles = async (filePath, filePathCopy) => {
            (await fs.readdir(filePath)).forEach((el) => {
                const newPath = path.join(filePath, el)
                fs.lstat(path.join(filePath, el))
                    .then(res => {
                        if (!res.isFile()) {
                            fs.mkdir(path.join(filePathCopy, el), () => {
                            })
                            copyFiles(newPath, path.join(filePathCopy, el))
                        } else {
                             fs.copyFile(path.join(filePath, el), path.join(filePathCopy, el))
                        }
                    })
            })
        }
        await copyFiles(filePath, filePathCopy)
    }
};

copy();