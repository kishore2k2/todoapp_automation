import {BrowserContext,Page} from '@playwright/test';

export class TaskCreation{

    constructor(protected page:Page){}

    async addtask(locator:string,taskname:any){
        const add = await this.page.locator(locator)
        await add.fill(taskname)
        await add.press('enter')

    }

    async edittask(locator:string,newtaskname:any){
        const selecttask= await this.page.locator(locator)
        await selecttask.dblclick();
        await selecttask.clear()
        await selecttask.fill(newtaskname);


    }

}