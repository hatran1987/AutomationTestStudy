import { test, expect } from '@playwright/test';
import { Console } from 'console';
test('Verify User Role field', async ({ page }) => {

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

  // Verify listbox
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

  //Verify default value của element <div> hoặc các element khác không hỗ trợ inputValue()
  const UserRole_Locator = page.locator("//label[text()='User Role']/../following-sibling::div");
  const UserRole_DefaultValue = await UserRole_Locator.textContent();
  console.log('Default value of User Role field:', UserRole_DefaultValue);
  expect(UserRole_DefaultValue).toBe('-- Select --');
});

test('Verify Employee Name field', async ({ page }) => {

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
  
  //-- Employee Name field ---
  //Verify label Employee Name
  await expect(page.locator("//label[text()='Employee Name']")).toBeVisible();

  // Verify placeholder text
   const inputField = page.getByPlaceholder('Type for hints...');

   // Kiểm tra xem placeholder có đúng như mong đợi không
   await expect(inputField).toHaveAttribute('placeholder', 'Type for hints...');
});

test('Verify Status Field', async ({ page }) => {

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

    //-- Status field---
  //Verify label Status
    await expect(page.locator("//label[text()='Status']")).toBeVisible();

  //Verify default value của element <div> hoặc các element khác không hỗ trợ inputValue()
  const Status_defaultValue = await page.locator("//label[text()='Status']/../following-sibling::div");
  const statusText = await Status_defaultValue.textContent();
  console.log('Default value of Status field:', statusText);
  expect(statusText).toBe('-- Select --');

});

test('Verify Username Field', async ({ page }) => {

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

    //-- Username field---
  //Verify label Username
    await expect(page.locator("//label[text()='Username']")).toBeVisible();

  //Verify default value của element có hỗ trợ inputValue()
  const Username_defaultValue = await page.locator("//label[text()='Username']/../following-sibling::div//input").inputValue();
  console.log('Default value of Username field:', Username_defaultValue);
  expect(Username_defaultValue).toBe('');

  //Verify hiển thị thông báo lỗi nếu để trống trường Username
  const Username_inputField = page.locator("//label[text()='Username']/../following-sibling::div//input");
  await Username_inputField.fill('');
  await page.locator("//button[@type='submit']").click();
  await page.locator("//label[text()='Username']/../following-sibling::span").waitFor();
  const Username_errorMessage1 = await page.locator("//label[text()='Username']/../following-sibling::span").textContent();
  console.log('Show error message if Username is blank: ', Username_errorMessage1);
  expect(Username_errorMessage1).toBe('Required');

  //Verify hiển thị thông báo lỗi nếu nhập < 5 ký tự
  await Username_inputField.fill('123');
  await page.locator("//button[@type='submit']").click();
  await page.locator("//label[text()='Username']/../following-sibling::span").waitFor();
  const Username_errorMessage2 = await page.locator("//label[text()='Username']/../following-sibling::span").textContent();
  console.log('Show error message if Username is less than 5 characters: ', Username_errorMessage2);
  expect(Username_errorMessage2).toBe('Should be at least 5 characters');

  //Verify hiển thị thông báo lỗi nếu nhập > 40 ký tự
  await Username_inputField.fill('1111111111111111111111111111111111111111111111111111111111111');
  await page.locator("//button[@type='submit']").click();
  await page.locator("//label[text()='Username']/../following-sibling::span").waitFor();
  const Username_errorMessage3 = await page.locator("//label[text()='Username']/../following-sibling::span").textContent();
  console.log('Show error message if Username is more then 40 characters: ', Username_errorMessage3);
  expect(Username_errorMessage3).toBe('Should not exceed 40 characters');

  //Verify hiển thị thông báo lỗi nếu Username đã tồn tại
  await Username_inputField.fill('Admin');
  await page.locator("//button[@type='submit']").click();
  await page.locator("//label[text()='Username']/../following-sibling::span").waitFor();
  const Username_errorMessage4 = await page.locator("//label[text()='Username']/../following-sibling::span").textContent();
  console.log('Show error message if Username is existed: ', Username_errorMessage4);
  expect(Username_errorMessage4).toBe('Already exists');

});

test('Verify Password Field', async ({ page }) => {

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

    //-- Username field---
  //Verify label Username
    await expect(page.locator("//label[text()='Username']")).toBeVisible();

  //Verify default value của element có hỗ trợ inputValue()
  const Password_defaultValue = await page.locator("//label[text()='Password']/../following-sibling::div//input").inputValue();
  console.log('Default value of Password field:', Password_defaultValue);
  expect(Password_defaultValue).toBe('');

  //Verify hiển thị thông báo lỗi nếu để trống trường Username
  const Password_inputField = page.locator("//label[text()='Password']/../following-sibling::div//input");
  await Password_inputField.fill('');
  await page.locator("//button[@type='submit']").click();
  const Password_errorMessage1 = await page.locator("//label[text()='Password']/../following-sibling::span").textContent();
  console.log('Show error message if Username is blank: ', Password_errorMessage1);
  expect(Password_errorMessage1).toBe('Required');

  //Verify hiển thị thông báo lỗi nếu nhập < 7 ký tự
  await Password_inputField.fill('123');
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(2000);
  //await page.waitForLoadState('load');
  //await page.locator("//label[text()='Password']/../following-sibling::span").waitFor();
  const Password_errorMessage2 = await page.locator("//label[text()='Password']/../following-sibling::span").textContent();
  console.log('Show error message if Password is less than 7 characters: ', Password_errorMessage2);
  expect(Password_errorMessage2).toBe('Should have at least 7 characters');

  //Verify hiển thị thông báo lỗi nếu nhập > 64 ký tự
  await Password_inputField.clear(); 
  await Password_inputField.fill('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
  await page.locator("//button[@type='submit']").click();
  const Password_errorMessage3 = await page.locator("//label[text()='Password']/../following-sibling::span").textContent();
  console.log('Show error message if Password is more then 64 characters: ', Password_errorMessage3);
  expect(Password_errorMessage3).toBe('Should not exceed 64 characters');

  //Verify hiển thị thông báo lỗi nếu Password không chứa lower-case
  await Password_inputField.clear(); 
  await Password_inputField.fill('1111111');
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(2000);
  const Password_errorMessage4 = await page.locator("//label[text()='Password']/../following-sibling::span").textContent();
  console.log('Show error message if Password not contain minumun 1 lower-case letter: ', Password_errorMessage4);
  expect(Password_errorMessage4).toBe('Your password must contain minimum 1 lower-case letter'); 
});


test('Add New User Successfully', async ({ page }) => {

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
  await page.locator("//input[@placeholder='Type for hints...']").fill('Timo');
  //await page.locator("//span[text()='Timothy Lewis Amiano']").click();
  await page.waitForTimeout(2000);
  await page.locator("//div[@role='listbox' and contains(@class, 'oxd-autocomplete-dropdown')]//div[contains(@class, 'oxd-autocomplete-option')][1]").click();

  //-- Status field---
  //Verify label Status
    await expect(page.locator("//label[text()='Status']")).toBeVisible();

  //Verify default value của element <div> hoặc các element khác không hỗ trợ inputValue()
  const Status_defaultValue = await page.locator("//label[text()='Status']/../following-sibling::div");
  const statusText = await Status_defaultValue.textContent();
  console.log('Default value of Status field:', statusText);
  expect(statusText).toBe('-- Select --');

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