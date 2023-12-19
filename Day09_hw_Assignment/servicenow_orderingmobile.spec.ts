// 2 .ServiceNow -Ordering Mobile(Frames)
// ---------------------------
// Note: Steps to create your instance is attached under reference document. Kindly create your own instance and automate the application

// 1. Launch ServiceNow application
// 2. Login with valid credentials 
// 3. Click-All Enter Service catalog in filter navigator and press enter or Click the ServiceCatalog
// 4. Click on  mobiles
// 5. Select Apple iphone13pro
// 6. Choose yes option in lost or broken iPhone
// 7. Enter phonenumber as 99 in original phonenumber field
// 8. Select Unlimited from the dropdown in Monthly data allowance
// 9. Update color field to SierraBlue and storage field to 512GB
// 10. Click on Order now option
// 11. Verify order is placed


import { test, chromium, expect } from "@playwright/test";

test("Ordering Mobile", async ({ page }) => {

    await page.goto('https://dev211057.service-now.com/navpage.do');

    //await page.getByRole('button', { name: 'Sign in' }).click();
    //await page.waitForTimeout(10000);

    await page.fill('#user_name', 'admin');
    //await page.getByRole('button', {name: 'Next'}).click();
    await page.fill('#user_password', 'Automation@2023');
    await page.getByRole('button', { name: 'Log in' }).click();

    await page.getByRole('button', { name: 'All' }).click();

    await page.fill('#filter', 'Service Catalog');
    await page.click('.filter-match');

    const frame = page.frameLocator("#gsft_main");
    await frame.getByLabel('Mobiles. Cell phones to meet').click();
    //await frame.getByText('Apple iPhone 13').click();

    await frame.getByRole('link', { name: 'Apple iPhone 13', exact: true }).click();

    await page.waitForTimeout(5000);
    const url = await page.title();
    console.log(`the current url is + ${url}`);

    await frame.getByText('Yes').check();
    await frame.getByRole('textbox', { name: 'What was the original phone' }).fill('99');
    //await frame.locator('.cat_item_option sc-content-pad form-control').fill('99');
    //await frame.locator('.form-group sc-row sc-row-6 is-filled').selectOption('Unlimited [add $4.00]');
    await frame.locator("//select[@class='form-control cat_item_option ']").selectOption('Unlimited [add $4.00]');
    await frame.getByText('Blue').check();
    //await frame.getByText('512 GB', { exact: true }).check();
    //await frame.getByRole('radio', {name : '512 GB'}).check();
    await frame.locator("//label[@class='radio-label']").nth(10).click();
    await frame.getByRole('button', { name: 'Order Now' }).click();

    await page.waitForTimeout(5000);

    const orderresult = await page.title();
    console.log(`the current order result page is ${orderresult}`);

    await expect(frame.locator('text=Thank you, your request has been submitted')).toHaveText('Thank you, your request has been submitted');

})