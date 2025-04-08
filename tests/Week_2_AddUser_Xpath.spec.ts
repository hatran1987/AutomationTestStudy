import { test, expect } from '@playwright/test';
import { Console } from 'console';

test('Add New User', async ({ page }) => {

  //Go to https://opensource-demo.orloginangehrmlive.com/web/index.php/auth/login
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  //Input Username: Admin
  await page.locator ("//input[@name='username']").click();
  await page.locator ("//input[@name='username']").fill('Admin');
 
  //Input Password: admin123
  await page.locator ("//input[@name='password']").click();
  await page.locator ("//input[@name='password']").fill('admin123');

  //Click Login button
  await page.locator ("//button[@type='submit']").click();
 
  await page.waitForLoadState('load');
      
  //Go to Admin function
  await page.locator("//a[contains(@href, 'viewAdminModule')]").isVisible();
  await page.locator("//a[contains(@href, 'viewAdminModule')]").click();

  //Add new user
  //Click Add button
  await page.waitForLoadState('load');

  await page.locator("//button[normalize-space()='Add']").click();

  //--- User Role field ---
  //Verify label User Role
  await expect(page.locator("//label[text()='User Role']")).toBeVisible();
  await page.waitForLoadState('load');

  // Xác định phần tử listbox
  await page.locator("//label[text()='User Role']/../following-sibling::div//i").click(); 
  const listbox = page.locator("//div[@role='listbox']"); 

  // Kiểm tra xem phần tử có tồn tại và hiển thị hay không
  await expect(listbox).toBeVisible(); // Kiểm tra listbox hiển thị
  await expect(listbox).toHaveAttribute('role', 'listbox'); // Kiểm tra thuộc tính role nếu có
    
  // In ra tất cả các giá trị của tùy chọn trong listbox
  const optionTexts = await listbox.allTextContents();
  console.log('Các tùy chọn trong listbox:');
  for (const option of optionTexts) {
    console.log(option + "\n");
  }

  // Click chọn item "ESS"
  await page.waitForTimeout (1000);
  await page.locator("//span[text()='ESS']").click();
  

  //-- Employee Name field ---
  //Verify label Employee Name
  await expect(page.locator("//label[text()='Employee Name']")).toBeVisible();

  // Verify placeholder text
   const inputField = page.getByPlaceholder('Type for hints...');

   // Kiểm tra xem placeholder có đúng như mong đợi không
   await expect(inputField).toHaveAttribute('placeholder', 'Type for hints...');

  //Select data for Employee Name field
  await page.locator("//input[@placeholder='Type for hints...']").fill('b');
  //await page.locator("//div[@class='oxd-autocomplete-text-input oxd-autocomplete-text-input--focus']").fill('a');
  //await page.waitForLoadState('load');
  await page.locator("//div[@role='listbox']").isVisible();
  await page.locator("//div[@role='option'][1]").click();

  //Select data for Status field
  await page.locator("//label[text()='Status']/../following-sibling::div//i").click();
  // Click chọn item "Enabled"
  await page.locator("//span[text()='Enabled']").click();

  //Input data for Username field
 // await page.locator("//label[text()='Username']/../following-sibling::div//input[@class='oxd-input oxd-input--active oxd-input--error']").click();
  await page.locator("//label[text()='Username']/../following-sibling::div//input").fill('HaTest');

  //Input data for Password field
  //await page.locator("//label[text()='Password']/../following-sibling::div//input[@type='password']").click();
  await page.locator("//label[text()='Password']/../following-sibling::div//input[@type='password']").fill('HaTest@123');
  
  //Input data for Confirm Password field
  //await page.locator("//label[text()='Confirm Password']/../following-sibling::div//input[@type='password']").click();
  await page.locator("//label[text()='Confirm Password']/../following-sibling::div//input[@type='password']").fill('HaTest@123');

  //Click Save button
  await page.locator("//button[@type='submit']").click();
  await expect(page.getByText('Successfully Saved')).toBeVisible();

});

test('Delete User', async ({ page }) => {

    // Go to https://opensource-demo.orloginangehrmlive.com/web/index.php/auth/login
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  // Login
  //Input Username: Admin
  await page.locator ("//input[@name='username']").click();
  await page.locator ("//input[@name='username']").fill('Admin');
 
  //Input Password: admin123
  await page.locator ("//input[@name='password']").click();
  await page.locator ("//input[@name='password']").fill('admin123');

  //Click Login button
  await page.locator ("//button[@type='submit']").click();
 
   //Go to Admin function
  await page.locator("//a[contains(@href, 'viewAdminModule')]").click();

   //Search created user by username
   await page.locator("//label[text()='Username']/../following-sibling::div//input").fill('HaTest');
   await page.locator("//button[@type='submit']").click();


   //Delete created user
   await page.locator("//div[@class='oxd-table']//div[text()='HaTest']/../following-sibling::div//button[@class='oxd-icon-button oxd-table-cell-action-space']/i").isVisible();
  await page.locator("//div[@class='oxd-table']//div[text()='HaTest']/../following-sibling::div//button[@class='oxd-icon-button oxd-table-cell-action-space']/i").first().click();
  await page.locator("//button[normalize-space()='Yes, Delete']/..//button[normalize-space()='Yes, Delete']").click();


   //Logout
  await page.locator("i.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});