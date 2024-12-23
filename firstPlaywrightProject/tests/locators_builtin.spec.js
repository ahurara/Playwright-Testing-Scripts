const { test, expect } = require("@playwright/test");

/*
page.getByAltText() - to locate an element, usually image, by its text alternative.
page.getByPlaceholder() - to locate an input by placeholder.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.

page.getByLabel() to locate a form control by associated label's text.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be con
*/


/*
npx playwright codegen' command  is used to generate the code against our actions
npx playwright codegen --deivce "device name" is used to open code and browser of screen size of the device 
npx playwright codegen -b "browser name" is used to generate the code and open the specific browser 

*/

test("builtin-locators", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  //page.getByAltText() - to locate an element, usually image, by its text alternative.
  const img = await page.getByAltText("company-branding");
  await expect(img).toBeVisible();

  //page.getByPlaceholder() - to locate an input by placeholder.
  await page.getByPlaceholder("Username").fill("Admin")
  await page.getByPlaceholder("Password").fill("admin123")

  //page.getByRole() to locate by explicit and implicit accessibility attributes. Test 520 p
  await page.getByRole('button',{type:"submit"}).click()
  
  //page.getByText() to locate by text content.
  await expect(await page.getByText("My Actions")).toBeVisible();
  await expect(await page.getByText("Dashboard")).toBeVisible();

});
