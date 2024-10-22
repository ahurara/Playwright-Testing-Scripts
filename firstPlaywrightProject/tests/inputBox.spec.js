const {test, expect} = require("@playwright/test");


test("handle inputbox", async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form/");


    //assertions for firt name input field
    await expect(page.locator('id=firstName')).toBeVisible();
    await expect(page.locator('id=firstName')).toBeEmpty();
    await expect(page.locator('id=firstName')).toBeEditable();
    await expect(page.locator('id=firstName')).toBeEnabled();
    
    const fName =await page.locator('id=firstName');
    await fName.scrollIntoViewIfNeeded();
    await fName.fill("Abu");

    await page.waitForTimeout(5000); // pausing the code 


})