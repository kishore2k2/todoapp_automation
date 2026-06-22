import {BrowserContext,Page} from '@playwright/test';
import { AnyARecord } from 'dns';

export class Navigation{

    constructor(protected page:Page){}
    
    async navigate(url:string){
        await this.page.goto(url);
    }
    async byText(textintag:string){
        await this.page.getByText(textintag).click();
}

    async lxc(locator:string){
        await this.page.locator(locator).click();
}

    async newtab(locator:any,context:BrowserContext){

    const [newtab]= await Promise.all([
        context.waitForEvent('page'),this.page.locator(locator).click()
        
    ]);
    await newtab.waitForLoadState('domcontentloaded');
    return newtab;
    }

    async locator(locator:any){
    await this.page.locator(locator);
    }

    async role(rolearea:any,rolevalue:any){
    await this.page.getByRole(rolearea, rolevalue).click();
}
    async text(textvalue:any){
    await this.page.getByText(textvalue).click();
}


    async back(){
        await this.page.goBack({waitUntil:'domcontentloaded'});
    }


    async completed(locator:any,nthvalue:any){
        
    await this.page.locator(locator).nth(nthvalue).check();
    }

}

