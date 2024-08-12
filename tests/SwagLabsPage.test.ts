import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";

test('Verify Roofing section, @UI, @both', async ({ page, swagLabsPage }) => {
  await page.goto(ENV.baseURL);
  await page.waitForLoadState("domcontentloaded");
  await swagLabsPage.login(ENV.USERNAME,ENV.PASSWORD);
  await swagLabsPage.addProductToCartAndVerifyCart();
  await swagLabsPage.checkOut();
  await swagLabsPage.verifyTax();
});