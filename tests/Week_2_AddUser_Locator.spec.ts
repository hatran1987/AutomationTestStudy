import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://opensource-demo.orloginangehrmlive.com/web/index.php/auth/login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  //Go to Admin function
  await page.getByRole('link', { name: 'Admin' }).click();

  //Add new user
  await page.getByRole('button', { name: ' Add' }).click();

  //select data for User Role field
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'ESS' }).click();
  
  await page.getByText('-- Select --').click();
  await page.getByText('Enabled').click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('a');
  await page.getByText('Emily  Clark').click();
  await page.getByRole('textbox').nth(2).click();
  await page.getByRole('textbox').nth(2).fill('HaTest');
  await page.getByRole('textbox').nth(3).click();
  await page.getByRole('textbox').nth(3).fill('HaTest@123');
  await page.getByRole('textbox').nth(4).click();
  await page.getByRole('textbox').nth(4).fill('HaTest@123');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForTimeout (2000);

   //Search created user by username
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('HaTest');
  //await page.waitForTimeout (2000);
  
  await page.getByRole('button', { name: 'Search' }).isVisible();
  await page.getByRole('button', { name: 'Search' }).click();
  
  //Delete created user
  await page.locator("//button[@class='oxd-icon-button oxd-table-cell-action-space' and contains(@class, 'oxd-icon-button')]/i[@class='oxd-icon bi-trash']").isVisible();
  await page.locator("//button[@class='oxd-icon-button oxd-table-cell-action-space' and contains(@class, 'oxd-icon-button')]/i[@class='oxd-icon bi-trash']").first().click();
  await page.locator("//button[normalize-space()='Yes, Delete']/..//button[normalize-space()='Yes, Delete']").click();

  //await page.locator("//div[@role='dialog']//button[@class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin']").click();

  //Logout
  await page.locator("i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});

test('test2', async ({ page }) => {

  // Go to https://opensource-demo.orloginangehrmlive.com/web/index.php/auth/login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();

  //Go to Admin function
  await page.getByRole('link', { name: 'Admin' }).click();

   //Search created user by username
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('HaTest1');
  await page.getByRole('button', { name: 'Search' }).click();

  //Delete created user
  await page.locator("//button[@class='oxd-icon-button oxd-table-cell-action-space' and contains(@class, 'oxd-icon-button')]/i[@class='oxd-icon bi-trash']").first().click();
  await page.locator("//button[normalize-space()='Yes, Delete']").click();


  await page.locator("//div[@role='dialog']//button[@class='oxd-button oxd-button--medium oxd-button--label-danger orangehrm-button-margin']").click();

  //Logout
  await page.locator("i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});