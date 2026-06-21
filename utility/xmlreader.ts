import fs from 'fs';
import {parseStringPromise} from 'xml2js';

export async function readXML (filepath:string):Promise<any>{

    const xmldata = fs.readFileSync(filepath,'utf-8');
    const result =await parseStringPromise(xmldata);
    return result;
    

}