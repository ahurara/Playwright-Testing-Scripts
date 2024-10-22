const {test, expect} = require("@playwright/test");
const exp = require("constants");

test("submit radio", async({page})=>{

    await page.goto("https://demoqa.com/automation-practice-form/");

    const genderRadio = await page.getByText('Male', { exact: true });
    genderRadio.check();

    await expect(genderRadio).toBeChecked();
    await expect(genderRadio.isChecked).toBeTruthy();

})