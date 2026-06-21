import {test} from '@playwright/test';
// import userdata from '../testdata/testdata.json';
import {testdata} from '../utility/PropertiesReader';

// import {readXML} from '../utils/xmlreader';



import {Common} from '../utility/common'
import {Navigation} from '../utility/navigation'
import {DataCollection} from '../utility/Collection'
import { TaskCreation } from '../utility/taskcreation';


test.use({
  browserName: 'chromium',
  screenshot:'on',
  video:'on',
  trace:'on'

});

test("todoapp",async ({page})=>{

    const common = new Common(page);
    const navigation = new Navigation(page);
    const data1 = new DataCollection(page);
    const task = new TaskCreation(page);

await page.goto(testdata.url)
});
