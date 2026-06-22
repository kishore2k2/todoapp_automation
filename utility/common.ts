import { Page,expect} from '@playwright/test';

export class Common{

    constructor(protected page:Page){}
    
    async to(time:number){
        await this.page.waitForTimeout(time);
    }

    async loadstate(state:any){
        await this.page.waitForLoadState(state);
    }

        async verify(locator:string,toverify:any){
        await expect(this.page.locator(locator)).toHaveText(toverify);
    }

    async verifytitle(toverify:any){
        await expect(this.page).toHaveTitle(toverify);
    }   


}



