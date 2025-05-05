import { expect, Page } from '@playwright/test';

export class LoginPage {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get usernameInput() {
    return this.page.getByRole('textbox', { name: 'Username' });
  }

  get passwordInput() {
    return this.page.getByRole('textbox', { name: 'Password' });
  }

  get loginButton() {
    return this.page.getByRole('button', { name: 'Login' });
  }

  get forgotPasswordLink() {
    return this.page.getByText('Forgot your password?');
  }

  get socialMediaLinks() {
    return {
      linkedin: this.page.locator('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]'),
      facebook: this.page.locator('a[href="https://www.facebook.com/OrangeHRM/"]'),
      twitter: this.page.locator('a[href="https://twitter.com/orangehrm?lang=en"]'),
      youtube: this.page.locator('a[href="https://www.youtube.com/c/OrangeHRMInc"]'),
    };
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  }

  async loginScreenshot() {
    await expect(this.page).toHaveScreenshot('login-page.png');
  }

  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}