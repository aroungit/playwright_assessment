//1. MergeContact (Alert and windowHandle)
// -----------		  
// 1. Launch URL "http://leaftaps.com/opentaps/control/login"
// 2. Enter UserName and Password Using Id Locator
// 3. Click on Login Button using Class Locator
// 4. Click on CRM/SFA Link
// 5. Click on contacts Button
// 6. Click on Merge Contacts using Xpath Locator
// 7. Click on Widget of From Contact
// 8. Click on First Resulting Contact
// 9. Click on Widget of To Contact
// 10. Click on Second Resulting Contact
// 11. Click on Merge button using Xpath Locator
// 12. Accept the Alert
// 13. Verify the title of the page


import { test, chromium, expect } from "@playwright/test";

test('MergeContact',async ({page, context}) => {

await page.goto('http://leaftaps.com/opentaps/control/login');

await page.fill('#username', 'Demosalesmanager');
await page.fill('#password', 'crmsfa');
await page.click('.decorativeSubmit');
await page.locator('a').filter({hasText:'CRM/SFA'}).click();


await page.locator('a').filter({hasText:'Contacts'}).click();
await page.locator('//a[@href="/crmsfa/control/mergeContactsForm"]').click();


const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    await page.locator('//img[@src="/images/fieldlookup.gif"]').first().click(),
])

console.log(newPage.url());
await newPage.waitForTimeout(5000);
await newPage.locator(".linktext").first().click();

const [newPage2] = await Promise.all([
    context.waitForEvent("page"),
    await page.locator('//img[@src="/images/fieldlookup.gif"]').last().click(),
])
console.log(newPage2.url());
await newPage2.locator(".linktext").nth(6).click();


page.once('dialog', async dialog =>{


    const text = dialog.message();
    console.log(`Message: ${text}`);
    const type = dialog.type();
    console.log(`I am from ${type}`);
    await dialog.accept();
   //await dialog.dismiss();

})
await page.click("//a[@class='buttonDangerous']");

await page.waitForTimeout(3000);

const currentPage = await page.title();
console.log(`the current page is + ${currentPage}`);

expect(currentPage).toEqual('View Contact | opentaps CRM');
    
})