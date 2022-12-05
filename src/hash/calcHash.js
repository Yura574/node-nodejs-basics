import crypto from "crypto";
import path from 'path'
import fs from 'fs/promises'
import {fileURLToPath} from 'url'


const calculateHash = async () => {
    const _filename = fileURLToPath(import.meta.url)
    const _dirname = path.dirname(_filename)
    const filePath = path.join(_dirname, 'files', 'fileToCalculateHashFor.txt')

    const input = await fs.readFile(filePath, {encoding: 'utf-8'})

    const hash = crypto.createHash('sha256').update(input).digest('hex');
    console.log(hash)
};

await calculateHash();