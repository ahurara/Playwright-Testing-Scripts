const {test, expect} = require('@playwright/test');

test("Handle Bootstrap Dropdown", async({page})=>{

    await page.goto("https://www.jquery-az.com/boots/demo.php?ex=63.0_2");

    
    await page.locator(".multiselect").click(); // click the dropdown

    //1)
    const options = await page.locator("ul>li label input");
    await expect(options).toHaveCount(11);
   

    //2) Select options from the dropdown
    const option = await page.$$("ul>li label");
    for(let options of option)
    {
        const value=await options.textContent();
        if(value.includes("Angular") || value.includes("Java")){
            await options.click();
        }
        if(value.includes("HTML") || value.includes("CSS")){
            await options.click();
        }
    }

    await page.waitForTimeout(3000);
})