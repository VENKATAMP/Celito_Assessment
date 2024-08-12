import { Locator, Page, expect, BrowserContext } from '@playwright/test';
import ENV from "../lib/env";
import Twilio from '../util/twilioSMS'
export class GitHubMFAPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly username: Locator;
    readonly password: Locator;
    readonly signInBtn: Locator;
    readonly sendSMSBtn: Locator;
    readonly authenticationCodeTxt: Locator;
    readonly verifyBtn: Locator;
    readonly dashBoardLabel: Locator;
  

    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.username = page.locator("#login_field");
        this.password = page.locator("#password");
        this.signInBtn = page.getByRole("button",{name:"Sign in"});
        this.sendSMSBtn = page.getByRole("button",{name:"Send SMS"});
        this.authenticationCodeTxt= page.locator("#sms_totp");
        this.verifyBtn = page.getByRole("button",{name:"Verify"});
        this.dashBoardLabel = page.getByLabel("Dashboard");
        
    }
    async  login(userName: string,password: string) {
        await this.page.goto(ENV.gitHubBaseUrl);
        await this.page.waitForSelector("#login_field",{state:'visible',timeout:2000}); 
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.signInBtn.click();
    }
    async handleMFA(){
        await this.sendSMSBtn.click();
        await this.page.waitForSelector("#sms_totp",{state:"visible",timeout:2000});
        await this.authenticationCodeTxt.fill(Twilio.getLatestSMS('+919866937190'));
        await this.verifyBtn.click();
        await this.page.waitForSelector("//label[contains(text(),'Dashboard')]",{state:"visible",timeout:2000});
    }
    async verifyLoginSuceessAfterHandlingMFA(){
        expect(await this.dashBoardLabel).toBeVisible();
    }
}
