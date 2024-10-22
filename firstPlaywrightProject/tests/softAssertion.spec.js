const {test, expect} = require("@playwright/test");

test("Soft Assertion", async({page})=>{

    await page.goto("https://demoblaze.com/");


    //hard assertion : execution of the test case is terminated as soon the assertion fails at any point 
    // await expect(page).toHaveTitle("STORE");
    // await expect(page).toHaveURL("https://demoblaze.com/");

    //soft assertion : execution of the test case is not terminated no matter assertion fails at any point 
    await expect.soft(page).toHaveTitle("STORE123");
    await expect.soft(page).toHaveURL("https://demoblaze.com/");

})