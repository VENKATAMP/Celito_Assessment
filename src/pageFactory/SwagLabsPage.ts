import { Locator, Page, expect, BrowserContext } from '@playwright/test';
export class SwagLabsPage {
    readonly page: Page;
    readonly context: BrowserContext;
    readonly addToCartBtn: Locator;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginBtn: Locator;
    readonly shoppingCart: Locator;
    readonly checkout: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;
    readonly continueBtn: Locator;
    readonly productPrice: Locator;
    readonly actualTaxPrice: Locator;


    constructor(page: Page, context: BrowserContext) {
        this.page = page;
        this.context = context;
        this.addToCartBtn = page.locator(".inventory_item").first().getByText("Add to cart");
        this.username = page.getByPlaceholder("Username");
        this.password = page.getByPlaceholder("Password");
        this.loginBtn = page.locator("#login-button");
        this.shoppingCart= page.locator("#shopping_cart_container")
        this.checkout= page.locator("#checkout");
        this.firstName= page.getByPlaceholder("First Name");
        this.lastName= page.getByPlaceholder("Last Name");
        this.zipCode= page.getByPlaceholder("Zip/Postal Code");
        this.continueBtn= page.locator("#continue");
        this.productPrice= page.locator(".inventory_item_price");
        this.actualTaxPrice= page.locator(".summary_tax_label");
    }
    async  login(userName: string,password: string) {
        await this.page.waitForSelector(".login_logo",{state:'visible',timeout:2000}); 
        await expect(this.page).toHaveTitle('Swag Labs'); 
        await this.username.fill(userName);
        await this.password.fill(password);
        await this.loginBtn.click();
        await this.page.waitForURL("https://www.saucedemo.com/inventory.html",{timeout:3000});
        await this.page.waitForSelector(".inventory_item",{state:'visible',timeout:2000});
    }
    async addProductToCartAndVerifyCart(){
        await this.addToCartBtn.click();
        await this.page.waitForSelector(".shopping_cart_badge",{state:"visible",timeout:2000});
        await this.shoppingCart.click();
        await this.page.waitForSelector(".cart_quantity_label",{state:"visible",timeout:2000});
    }
    async checkOut(){
        await this.checkout.click();
        await this.page.waitForSelector(".title",{state:"visible",timeout:2000});
        await this.firstName.fill("Venkat");
        await this.lastName.fill("Kopanathi");
        await this.zipCode.fill("533124");
        await this.continueBtn.click();
        await this.page.waitForSelector(".title",{state:"visible",timeout:2000});
    }
    async verifyTax(){
        var productPrice=await this.productPrice.textContent();
        let actualTaxPrice=await this.actualTaxPrice.textContent();
        let taxPercentageValue=0.08;
        //console.log(Number(actualTaxPrice.split("$")[1]))
        //console.log(Number(productPrice.split("$")[1])*0.08)
        //console.log(Math.ceil((Number(productPrice.split("$")[1])*taxPercentageValue)*(Math.pow(10,2)))/(Math.pow(10,2)));
        expect(Number(actualTaxPrice.split("$")[1])).toEqual(Math.ceil((Number(productPrice.split("$")[1])*taxPercentageValue)*(Math.pow(10,2)))/(Math.pow(10,2)))
    }
}
