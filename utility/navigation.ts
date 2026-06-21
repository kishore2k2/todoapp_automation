import {BrowserContext,Page} from '@playwright/test';

export class Navigation{

    constructor(protected page:Page){}
    
    async navigate(url:string){
        await this.page.goto(url);
    }
    async nbText(textintag:string){
        await this.page.getByText(textintag).click();
}

    async xpath(locator:string){
        await this.page.locator(locator).click();
}

        async newtab(locator:any,context:BrowserContext){

        const [newtab]= await Promise.all([
            context.waitForEvent('page'),this.page.locator(locator).click()
            
        ]);
        await newtab.waitForLoadState('domcontentloaded');
        return newtab;
    }



}

