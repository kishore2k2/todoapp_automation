
// xml file

import fs from 'fs';
import { parseStringPromise } from 'xml2js';

export async function readXML(filePath: string): Promise<any> {
  const xmlData = fs.readFileSync(filePath, 'utf-8');
  const result = await parseStringPromise(testdata);
  return result;
}
