import { test as baseTest } from '@playwright/test';
import { PageManager } from './utils/PageManager';
import {MultiUserManager} from './utils/MultiUserManager';
import {LoginPage} from './pages/LoginPage';
import {DashboardPage} from './pages/DashboardPage';
import { MyInfoPage } from './pages/MyInfoPage';
import { UserListPage } from './pages/UserListPage';
import { AddUserPage } from './pages/AddUserPage';


export type PageFixtures = {
  pages: PageManager;
  multiUser: MultiUserManager;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  myInfoPage: MyInfoPage;
  userListPage: UserListPage;
  userAddPage: AddUserPage;
};

export const test = baseTest.extend<PageFixtures>({
  pages: async ({ page }, use) => {
    const manager = new PageManager(page);
    await use(manager);
  },
  multiUser: async ({ context }, use) => {
    const multi = new MultiUserManager(context);
    await use(multi);
  },
  loginPage: async ({ pages }, use) => {
    await use(pages.loginPage);
  },
  dashboardPage: async ({ pages }, use) => {
    await use(pages.dashboardPage);
  },
  myInfoPage: async ({ pages }, use) => {
    await use(pages.myInfoPage);
  },
  userListPage: async ({ pages }, use) => {
    await use(pages.userListPage);
  },
  userAddPage: async ({ pages }, use) => {
    await use(pages.userAddPage);
  }
});

export { expect } from '@playwright/test';