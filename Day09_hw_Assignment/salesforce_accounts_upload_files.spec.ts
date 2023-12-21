// SalesForce -Accounts (upload files)
// -----------------------------------
// 1.Login to Salesforce
// 2.Click on toggle menu
// 3.Search for Accounts
// 4.Click the Accounts
// 5.Click on the first resulting account name
// 6.Upload files under Notes and Attachments 
//   Hint : use page.focus(selector) to scroll to view the element - uploadfiles 
// 7.Verify the toast message


import { test, chromium, expect } from "@playwright/test";
import path from "path";
test("uploadfiles",async ({page,context}) => {
await page.goto("https://login.salesforce.com");

await page.fill("#username", "pranavrajaroun@testleaf.com");
await page.fill("#password", "Automation@2023");

await page.locator('//input[@id="Login"]').click();
await page.getByRole ('button' , {name: 'App Launcher'}).click();

await page.getByPlaceholder ('Search apps and items...').fill('Accounts');

await page.locator('.slds-size_small').click();

await page.locator("//a[@data-refid ='recordId']").click();

await page.waitForLoadState('load');

//creating a promise and resolving them 
const fileChooserPromise = page.waitForEvent('filechooser');
await page.locator("//div[@title='Upload Files']").click();
const fileChooser=await fileChooserPromise;
await fileChooser.setFiles(path.join(__dirname, '1.txt'));

await page.waitForTimeout(5000);

})