import { Page,expect} from '@playwright/test';
import { readXML } from './xmlreader';


export class DataCollection{

    constructor(protected page:Page){}

    async addxml(obtain:any){
        const data = await readXML('./testdata/testdata.xml');
        return data.testdata[obtain]
    }


}