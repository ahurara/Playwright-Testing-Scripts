const { test,expect } = require("@playwright/test");


/*
Playwright includes test assertions in the form of expect function.

https://playwright.dev/docs/test-assertions

1) expect(page).toHaveURL()            Page has URL
2) expect(page).toHaveTitle()          Page has title
3) expect(locator).toBeVisible()       Element is visible
4) expect(locator).toBeEnabled()       Control is enabled
   expect(locator).toBeDisabled()      Element is disabled
5) expect(locator).toBeChecked()       Radio/Checkbox is checked
6) expect(locator).toHaveAttribute()   Element has attribute
7) expect(locator).toHaveText()        Element matches text
8) expect(locator).toContainText()     Element contains text
9) expect(locator).toHaveValue(value)  Input has a value
10) expect(locator).toHaveCount()      List of elements has given length
 */

test("AssertionTest", async ({page})=>{

   await page.goto("https://demo.nopcommerce.com/register");

    //expect(page).toHaveURL()            Page has URL
   await expect(page).toHaveURL("https://demo.nopcommerce.com/register");

   //expect(page).toHaveTitle()          Page has title
   await expect(page).toHaveTitle("nopCommerce demo store. Register");

   //expect(locator).toBeVisible()       Element is visible
    const logoImg = await page.getByAltText("nopCommerce demo store");
    await expect(logoImg).toBeVisible;

    //expect(locator).toBeEnabled() and expect(locator).toBeDisabled()     Control is enabled | Control is disabled
    const srchbar = await page.locator("id=small-searchterms");
    await expect(srchbar).toBeEnabled();

    //expect(locator).toBeChecked()       Radio/Checkbox is checked
    const radioBtn = await page.locator("id=gender-male");
    await radioBtn.click();
    await expect(radioBtn).toBeChecked();


    //expect(locator).toBeChecked()       Radio/Checkbox is checked
   const newsLetterCheckBox = await page.locator("id=Newsletter");
   await newsLetterCheckBox.scrollIntoViewIfNeeded();
   await newsLetterCheckBox.check();
   await expect(newsLetterCheckBox).toBeChecked();

   // expect(locator).toHaveAttribute()   Element has attribute
   await expect(newsLetterCheckBox).toHaveAttribute("id","Newsletter");



})