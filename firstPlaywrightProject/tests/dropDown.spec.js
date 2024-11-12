const {test, expect} = require('@playwright/test');

test("dropdown handle", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

        //Multiple ways to select option from dropdown by label and value

       //await page.locator("#country").selectOption({label:"India"}); //by using label attribute
       //await page.locator("#country").selectOption("India"); //  short way by using label
       //await page.locator("#country").selectOption({value:"uk"}); // by using value
       //await page.locator("#country").selectOption("uk"); // short way  by using value
       //await page.locator("#country").selectOption({index:3}); // by using index 
       //await page.selectOption("#country","India") // shortest way to do so
       
       //Assertions

       //1) Check number of available options in the dropdown
    //    const options = await page.locator("#country option");
    //    await expect(options).toHaveCount(10);
    //    console.log(options.allTextContents())

       //2)Check presense of a particular option
       const options = await page.locator("#country").textContent();
       await expect(options.includes("India")).toBeTruthy();

        await page.waitForTimeout(2000);

    

})