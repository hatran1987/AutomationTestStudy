import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/LoginPage';
import { DashboardPage } from './pages/DashboardPage';
import { UserListPage } from './pages/UserListPage';
import { AddUserPage } from './pages/AddUserPage';

test.describe('Add New User Test Suite', () => {
  test.beforeEach(async ({ page}) => {
  })

  test('Verify User Role field', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.isLoaded();
    await dashboardPage.goToMenu('Admin');

    const userListPage = new UserListPage(page);
    await userListPage.isLoaded();
    await userListPage.addButton.click();

    const addNewUserPage = new AddUserPage(page);
    await addNewUserPage.isLoaded();

    //Verify User Role = Blank
    await addNewUserPage.getRequiredFieldErrorMessage('User Role').isVisible();

    //Verify User Role list item
    await addNewUserPage.verifyDropdown('User Role', ['Select', 'Admin', 'ESS']);
  })

  test('Verify Status field', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.isLoaded();
    await dashboardPage.goToMenu('Admin');

    const userListPage = new UserListPage(page);
    await userListPage.isLoaded();
    await userListPage.addButton.click();

    const addNewUserPage = new AddUserPage(page);
    await addNewUserPage.isLoaded();

    //Verify Status = Blank
    await addNewUserPage.getRequiredFieldErrorMessage('Status').isVisible();

    //Verify Status list item
    await addNewUserPage.verifyDropdown('Status', ['Select', 'Enabled', 'Disabled']);
})

  test('Verify Add New User successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.isLoaded();
    await dashboardPage.goToMenu('Admin');

    const userListPage = new UserListPage(page);
    await userListPage.isLoaded();
    await userListPage.addButton.click();

    const addNewUserPage = new AddUserPage(page);
    await addNewUserPage.isLoaded();
    await addNewUserPage.selectDropdown('User Role', 'ESS');
    await addNewUserPage.selectDropdown('Status', 'Enabled');
    await addNewUserPage.selectEmployeeName('Timo');
    await addNewUserPage.username.fill('HaTest');
    await addNewUserPage.password.fill('HaTest@123');
    await addNewUserPage.confirmPassword.fill('HaTest@123');
    await addNewUserPage.saveButton.click();
    await addNewUserPage.getRequiredFieldErrorMessage('User Role').isVisible();

    //Verify Successful message
    await expect(page.getByText('Successfully Saved')).toBeVisible();

    //Verify display added user at User List page
    await userListPage.isLoaded();
    await userListPage.username.fill('HaTest');
    await userListPage.searchButton.click();
    await userListPage.verifyUserInTable('HaTest','ESS','Timothy Amiano','Enabled');

  })

  test('Verify Delete New User successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('Admin', 'admin123');

    const dashboardPage = new DashboardPage(page);
    await dashboardPage.isLoaded();
    await dashboardPage.goToMenu('Admin');

    const userListPage = new UserListPage(page);
    await userListPage.isLoaded();
   
    await userListPage.username.fill('HaTest');
    await userListPage.searchButton.click();
  })

})  