import {test} from '@playwright/test';

// data driven 
import userdata from '../data/testdata.json';  
import {testdata} from '../utility/PropertiesReader';
import {readXML} from '../utility/xmlreader';



import {Common} from '../utility/common'
import {Navigation} from '../utility/navigation'
import {DataCollection} from '../utility/Collection'
import { TaskCreation } from '../utility/taskcreation';


test.use({
  browserName: 'chromium',
  screenshot:'off',
  video:'off',
  trace:'off'

});

test("todoapp",async ({page})=>{


  // importing the classes from utility pacakages

    const common = new Common(page);
    const navigation = new Navigation(page);
    const data1 = new DataCollection(page);
    const task = new TaskCreation(page);

await page.goto(testdata.url)


});
