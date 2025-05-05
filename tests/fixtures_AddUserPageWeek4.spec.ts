import { expect, test } from './fixtures';
import { AddUserPage } from './pages/AddUserPage';

test.describe('Add New User Test Suite', () => {
  test.beforeEach(async ({ pages}) => {
  })

  test('Verify User Role field', async ({ pages }) => {
    await pages.loginPage.goto();
    await pages.loginPage.login('Admin', 'admin123');

    await pages.dashboardPage.isLoaded();
   // await expect(pages.dashboardPage.getWidgetByName('My Actions')).toHaveScreenshot('myActions.png');
   // await expect(pages.dashboardPage.getWidgetByName('Quick Launch')).toHaveScreenshot('quickLaunch.png');
    await pages.dashboardPage.goToMenu('Admin');

    await pages.userListPage.isLoaded();
    await pages.userListPage.addButton.click();

    await pages.userAddPage.isLoaded();

    //Verify User Role = Blank
    await pages.userAddPage.getRequiredFieldErrorMessage('User Role').isVisible();

    //Verify User Role list item
    await pages.userAddPage.verifyDropdown('User Role', ['Select', 'Admin', 'ESS']);
  });

  test('Verify Employee Name field', async ({ pages }) => {
    await pages.loginPage.goto();
    await pages.loginPage.login('Admin', 'admin123');

    await pages.dashboardPage.isLoaded();
    //await expect(pages.dashboardPage.getWidgetByName('My Actions')).toHaveScreenshot('myActions.png');
    //await expect(pages.dashboardPage.getWidgetByName('Quick Launch')).toHaveScreenshot('quickLaunch.png');
    await pages.dashboardPage.goToMenu('Admin');

    await pages.userListPage.isLoaded();
    await pages.userListPage.addButton.click();

    await pages.userAddPage.isLoaded();

    //Verify Status = Blank
    await pages.userAddPage.getRequiredFieldErrorMessage('Employee Name').isVisible();

    // Verify placeholder text
    await pages.userAddPage.getByPlaceholder('Employee Name').isVisible();   

  });

  test('Verify Status field', async ({ pages }) => {
    await pages.loginPage.goto();
    await pages.loginPage.login('Admin', 'admin123');

    await pages.dashboardPage.isLoaded();
    //await expect(pages.dashboardPage.getWidgetByName('My Actions')).toHaveScreenshot('myActions.png');
    //await expect(pages.dashboardPage.getWidgetByName('Quick Launch')).toHaveScreenshot('quickLaunch.png');
    await pages.dashboardPage.goToMenu('Admin');

    await pages.userListPage.isLoaded();
    await pages.userListPage.addButton.click();

    await pages.userAddPage.isLoaded();

     //Verify Status = Blank
     await pages.userAddPage.getRequiredFieldErrorMessage('Status').isVisible();

    // Verify Status list item 
    await pages.userAddPage.verifyDropdown('Status', ['Select', 'Enabled', 'Disabled']);

  });

  test('Verify Username field', async ({ pages }) => {
    await pages.loginPage.goto();
    await pages.loginPage.login('Admin', 'admin123');

    await pages.dashboardPage.isLoaded();
    //await expect(pages.dashboardPage.getWidgetByName('My Actions')).toHaveScreenshot('myActions.png');
    //await expect(pages.dashboardPage.getWidgetByName('Quick Launch')).toHaveScreenshot('quickLaunch.png');
    await pages.dashboardPage.goToMenu('Admin');

    await pages.userListPage.isLoaded();
    await pages.userListPage.addButton.click();

    await pages.userAddPage.isLoaded();
  
    //Verify Username = Blank
    await pages.userAddPage.username.fill('');
    await pages.userAddPage.saveButton.click();
    await pages.userAddPage.getRequiredFieldErrorMessage('Username').isVisible();
  
    //Verify hiển thị thông báo lỗi nếu nhập < 5 ký tự
    await pages.userAddPage.username.fill('111');
    await pages.userAddPage.getErrorMessage('Username').getByText('Should be at least 5 characters').isVisible();
  
    //Verify hiển thị thông báo lỗi nếu nhập > 40 ký tự
    await pages.userAddPage.username.fill('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
    await pages.userAddPage.getErrorMessage('Username').getByText('Should not exceed 40 characters').isVisible();
  
    //Verify hiển thị thông báo lỗi nếu Username đã tồn tại
    await pages.userAddPage.username.fill('Admin');
    await pages.userAddPage.getErrorMessage('Already exists').isVisible();
  });

  test('Verify Password field', async ({ pages }) => {
    await pages.loginPage.goto();
    await pages.loginPage.login('Admin', 'admin123');

    await pages.dashboardPage.isLoaded();
    //await expect(pages.dashboardPage.getWidgetByName('My Actions')).toHaveScreenshot('myActions.png');
    //await expect(pages.dashboardPage.getWidgetByName('Quick Launch')).toHaveScreenshot('quickLaunch.png');
    await pages.dashboardPage.goToMenu('Admin');

    await pages.userListPage.isLoaded();
    await pages.userListPage.addButton.click();

    await pages.userAddPage.isLoaded();
  
    //Verify Password = Blank
    await pages.userAddPage.password.fill('');
    await pages.userAddPage.saveButton.click();
    await pages.userAddPage.getRequiredFieldErrorMessage('Password').isVisible();
  
    //Verify hiển thị thông báo lỗi nếu nhập < 7 ký tự
    await pages.userAddPage.password.fill('1');
    await pages.userAddPage.getErrorMessage('Password').getByText('Should have at least 7 characters').isVisible();
    
    //Verify hiển thị thông báo lỗi nếu nhập > 64 ký tự
    await pages.userAddPage.password.fill('11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111');
    await pages.userAddPage.getErrorMessage('Password').getByText('Should not exceed 64 characters').isVisible();
  
    //Verify hiển thị thông báo lỗi nếu Password không chứa lower-case
    await pages.userAddPage.password.fill('11111111');
    await pages.userAddPage.getErrorMessage('Password').getByText('Your password must contain minimum 1 lower-case letter').isVisible();
  });
  
  test('Verify Confirm Password field', async ({ pages }) => {
    await pages.loginPage.goto();
    await pages.loginPage.login('Admin', 'admin123');

    await pages.dashboardPage.isLoaded();
    //await expect(pages.dashboardPage.getWidgetByName('My Actions')).toHaveScreenshot('myActions.png');
    //await expect(pages.dashboardPage.getWidgetByName('Quick Launch')).toHaveScreenshot('quickLaunch.png');
    await pages.dashboardPage.goToMenu('Admin');

    await pages.userListPage.isLoaded();
    await pages.userListPage.addButton.click();

    await pages.userAddPage.isLoaded();
  
    //Verify Confirm Password NOT match with Password
    await pages.userAddPage.password.fill('');
    await pages.userAddPage.confirmPassword.fill('');
    await pages.userAddPage.saveButton.click();
    await pages.userAddPage.getErrorMessage('Confirm Password').isVisible();
    await pages.userAddPage.getErrorMessage('Confirm Password').getByText('Passwords do not match').isVisible();
  });

  test('Verify Add New User successfully', async ({ pages }) => {
    await pages.loginPage.goto();
    await pages.loginPage.login('Admin', 'admin123');

    await pages.dashboardPage.isLoaded();
    //await expect(pages.dashboardPage.getWidgetByName('My Actions')).toHaveScreenshot('myActions.png');
    //await expect(pages.dashboardPage.getWidgetByName('Quick Launch')).toHaveScreenshot('quickLaunch.png');
    await pages.dashboardPage.goToMenu('Admin');

    await pages.userListPage.isLoaded();

    await pages.userListPage.addButton.click();
    await pages.userAddPage.isLoaded();

    await pages.userAddPage.selectDropdown('User Role', 'ESS');
    await pages.userAddPage.selectDropdown('Status', 'Enabled');
    await pages.userAddPage.selectEmployeeName('Timo');
    await pages.userAddPage.username.fill('HaTest');
    await pages.userAddPage.password.fill('HaTest@123');
    await pages.userAddPage.confirmPassword.fill('HaTest@123');
    await pages.userAddPage.saveButton.click();
  
      //Verify Successful message
    pages.userAddPage.getSuccessMessage().isVisible();
  
      //Verify display added user at User List page
      await pages.userListPage.isLoaded();
      await pages.userListPage.username.fill('HaTest');
      await pages.userListPage.searchButton.click();
      await pages.userListPage.verifyUserInTable('HaTest','ESS','Timothy Amiano','Enabled');
  
    });
  
    test('Verify Edit User successfully', async ({ pages }) => {
      await pages.loginPage.goto();
      await pages.loginPage.login('Admin', 'admin123');
  
      await pages.dashboardPage.isLoaded();
      //await expect(pages.dashboardPage.getWidgetByName('My Actions')).toHaveScreenshot('myActions.png');
      //await expect(pages.dashboardPage.getWidgetByName('Quick Launch')).toHaveScreenshot('quickLaunch.png');
      await pages.dashboardPage.goToMenu('Admin');
  
      await pages.userListPage.isLoaded();
     
      await pages.userListPage.username.fill('HaTest');
      await pages.userListPage.searchButton.click();
  
      await pages.userListPage.verifyUserInTable('HaTest','ESS','Timothy Amiano','Enabled');
  
      await pages.userListPage.clickEditButtonFor('HaTest');

      //await pages.userAddPage.selectDropdown('User Role', 'ESS');
      await pages.userAddPage.selectDropdown('Status', 'Disabled');
      //await pages.userAddPage.selectEmployeeName('Timo');
      //await pages.userAddPage.username.fill('HaTest');
      //await pages.userAddPage.password.fill('HaTest@123');
     // await pages.userAddPage.confirmPassword.fill('HaTest@123');
      await pages.userAddPage.saveButton.click();
     
      //Verify Successful message
      pages.userAddPage.getSuccessMessage().isVisible();
  
      //Verify display added user at User List page
      await pages.userListPage.isLoaded();
      await pages.userListPage.username.fill('HaTest');
      await pages.userListPage.searchButton.click();
      await pages.userListPage.verifyUserInTable('HaTest','ESS','Timothy Amiano','Disabled');
  
    });
  
    test('Verify Delete New User successfully', async ({ pages }) => {
      await pages.loginPage.goto();
      await pages.loginPage.login('Admin', 'admin123');
  
      await pages.dashboardPage.isLoaded();
      //await expect(pages.dashboardPage.getWidgetByName('My Actions')).toHaveScreenshot('myActions.png');
      //await expect(pages.dashboardPage.getWidgetByName('Quick Launch')).toHaveScreenshot('quickLaunch.png');
      await pages.dashboardPage.goToMenu('Admin');
  
      await pages.userListPage.isLoaded();
     
      await pages.userListPage.username.fill('HaTest');
      await pages.userListPage.searchButton.click();

      await pages.userListPage.clickDeleteButtonFor('HaTest');
    });
  })