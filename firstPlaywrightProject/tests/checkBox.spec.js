const { test, expect } = require("@playwright/test");
const exp = require("constants");

test("submit checkbox", async ({ page }) => {
  await page.goto("https://demoqa.com/automation-practice-form/");

  //check a single checkbox

  // const hobbyCheckBox= await page.getByText("Sports");
  // hobbyCheckBox.scrollIntoViewIfNeeded();
  // hobbyCheckBox.check();

  // //asserting the checkbox

  // await expect(hobbyCheckBox).toBeChecked();
  // await expect(hobbyCheckBox.isChecked()).toBeTruthy();

  //check multiple checkboxes at a time

  const checkboxes = ["Sports", "Reading", "Music"];

  for (const locator of checkboxes) {
    await page.getByText(locator).check();
  }

  //explicitly giving wait to see the output
  await page.waitForTimeout(5000);

  //now unchecking the checkboxes that are previously checked

  for (const locator of checkboxes) {
    if (await page.getByText(locator).isChecked()) {
      await page.getByText(locator).click();
    }
  }
});
