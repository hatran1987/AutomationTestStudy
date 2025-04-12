import { Locator, Page } from '@playwright/test';

export class HeaderBar {
    readonly container: Locator;
    constructor(private readonly page: Page) {
        //this.container = page.locator('header.oxd-topbar');
        this.container = page.locator("//header[@class='oxd-topbar']");
    }

    private get userDropdown(): Locator {
        //return this.container.locator('.oxd-userdropdown-name');
        return this.container.locator("//p[@class='oxd-userdropdown-name']");
    }

    // User menu --> About option
    private get AboutOption(): Locator {
        //return this.container.locator('.oxd-userdropdown-link', { hasText: 'Logout' });
        return this.container.locator("//a[text()='About']");
    }

    // User menu --> Support option
    private get SupportOption(): Locator {
        //return this.container.locator('.oxd-userdropdown-link', { hasText: 'Logout' });
        return this.container.locator("//a[text()='Support']");
    }

    // User menu --> Change Password option
    private get ChangePasswordOption(): Locator {
        //return this.container.locator('.oxd-userdropdown-link', { hasText: 'Logout' });
        return this.container.locator("//a[text()='Change Password']");
    }

    // User menu --> Logout option
    private get logoutOption(): Locator {
        //return this.container.locator('.oxd-userdropdown-link', { hasText: 'Logout' });
        return this.container.locator("//a[text()='Logout']");
    }

    async openUserDropdown() {
        await this.userDropdown.click();
    }

    async logout() {
        await this.openUserDropdown();
        await this.logoutOption.click();
    }

  async getUsername(): Promise<string> {
    const name = await this.userDropdown.textContent();
    return name?.trim() ?? '';
  }

  async verifyModuleTitle(title: string) {
    await this.container.getByRole('heading', { name: title }).isVisible();
  }

  async verifyPageTitle(title: string) {
    await this.container.getByRole('heading', { name: title }).isVisible();
  }
}