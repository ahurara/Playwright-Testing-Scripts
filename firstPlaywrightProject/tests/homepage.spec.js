const {test,expect} = require("@playwright/test");

//page is a fixture which can be used to interact with the web element 

/*

Inorder to run a single file and on specific browser u can run : 
npx playwright test filename --project=borwsername 

Inorder to run a single file and on specific browser with headed mode (ui) u can run : 
npx playwright test filename --project=borwsername --headed

Inorder to run a single file and on specific browser with headed mode (ui) in debug mode u can run : 
npx playwright test filename --project=borwsername --headed --debug

*/
test("homepage", async({page})=>{

    await page.goto("https://demoblaze.com/#carouselExampleIndicators");

    const pageTitle =await page.title();
    console.log("The page title is :",pageTitle);

    //to validate if the page has the title or not
    await expect(page).toHaveTitle("STORE");

    await page.close();

})