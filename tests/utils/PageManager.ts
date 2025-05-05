import { Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { AddUserPage } from '../pages/AddUserPage';
import { UserListPage } from '../pages/UserListPage';
import { MyInfoPage } from '../pages/MyInfoPage';


export class PageManager {
  public readonly loginPage: LoginPage;
  public readonly dashboardPage: DashboardPage;
  public readonly userAddPage: AddUserPage;
  public readonly userListPage: UserListPage;
  public readonly myInfoPage: MyInfoPage;

  constructor(private readonly page: Page) {
    this.loginPage = new LoginPage(page);
    this.dashboardPage = new DashboardPage(page);
    this.userAddPage = new AddUserPage(page);
    this.userListPage = new UserListPage(page);
    this.myInfoPage = new MyInfoPage(page);
  }

  public getPage(): Page {
    return this.page;
  }
  
}