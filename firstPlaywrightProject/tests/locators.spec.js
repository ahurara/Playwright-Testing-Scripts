const {test,expect} = require("@playwright/test");



    /**
       There are 2 approaches to interact with the web element 
       1) await page.locator("locator").click()
       2) await page.click("locator")

       There are 2 approaches to interact with the web element 
       1) await page.locator("locator").click()
       2) await page.click("locator")

       There are 2 approaches to fill in the input field
        1)await page.fill("#loginusername", "pavanol")
        2)await page.locator("locator").fill("john Doe")
     
     */


test("locators", async({page})=>{

    await page.goto("https://demoblaze.com/#carouselExampleIndicators");

  
       await page.click("id=login2");

       await page.locator("#loginusername").fill("pavanol")
      

       await page.fill("id=loginpassword", "test@123")

       await page.click("//button[normalize-space()='Log in']")

       const logoutLink = await page.locator("id=logout2");

       await expect(logoutLink).toBeVisible();

       await page.close()

})