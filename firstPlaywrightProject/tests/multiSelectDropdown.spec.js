const {test, expect} = require('@playwright/test');

test("Handle Dropdown", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    //Select multiple options from dropdown
    await page.selectOption("#colors", ['Blue','Red','Yellow']);

    await page.waitForTimeout(2000);
})