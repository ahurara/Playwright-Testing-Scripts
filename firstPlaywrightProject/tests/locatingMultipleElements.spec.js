const {test,expect} = require("@playwright/test");



/**
   
   To locate multiple web elements
   const elements = await page.$$locate(locator)
 */


test("locators", async({page})=>{

await page.goto("https://demoblaze.com/#carouselExampleIndicators");

/**There are 2 approaches to interact with the web element 
   1) await page.locator("locator").click()
   2) await page.click("locator")
 */

//    const links = await page.$$("a");
   
//    for(const link of links)
//    {
//         const LinkText= await link.textContent();
//         console.log(LinkText);
//    }

// TO capture the name of every card 

        //waiting for the selector till it is availble 
    await page.waitForSelector("//div[@id='tbodyid']//div//h4/a");
    const cardNames = await page.$$("//div[@id='tbodyid']//div//h4/a")

    for(const name of cardNames)
    {
        const pNames = await name.textContent();
        console.log(pNames);
    }

    
//    await page.close()

})