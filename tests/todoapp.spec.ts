import {test} from '@playwright/test';

// data driven 
import userdata from '../data/jsdata.json';  
import {propdata} from '../utility/Collection';
import {readXML} from '../utility/xml';



import {Common} from '../utility/common'
import {Navigation} from '../utility/navigation'
import { TaskCreation } from '../utility/taskcreation';
import { join } from 'path';


test.use({
  browserName: 'chromium',
  screenshot:'on',
  video:'on',
  trace:'on'

});

test("todoapp",async ({page})=>{


  // importing the classes from utility pacakages

    const common = new Common(page);
    const navigation = new Navigation(page);
    const task = new TaskCreation(page);

await navigation.navigate(userdata[0].url)
await common.loadstate("domcontentloaded");

await navigation.role('link', {name:"Download"});



await navigation.role('link', {name:"View on GitHub"});
await navigation.back();


await navigation.role('link', {name:"Blog"});
await navigation.back();


await common.verifytitle("TodoMVC")
await navigation.text('Compile-to-JS');
await navigation.text('Labs');
await navigation.lxc('paper-tab[data-target="js"]');

await navigation.lxc('//a[@class="applist-item"]//child::span[text()="React"]');

await common.verifytitle("TodoMVC: React");
await common.verify('//h1[text()="todos"]','todos');


//await task.addtask('.new-todo',propdata.task1)

for (let i = 1; i < 10; i++) {
  await task.addtask('.new-todo',propdata[`task${i}` as keyof typeof propdata]);
}

for (let i = 0; i < 8; i+=2) { 

//await navigation.completed('.toggle', i);

await navigation.completed('.toggle', i);
await page.waitForLoadState('domcontentloaded');
}



await navigation.role('link',{name:"Active"});
await navigation.role('link',{name:"Completed"});
await navigation.role('link ',{name:"All"});



await navigation.lxc('.clear-completed');
await common.to(3000)








});
