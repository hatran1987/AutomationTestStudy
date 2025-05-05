import { Locator, Page, expect } from '@playwright/test';

export class FooterBar {
  readonly container: Locator;

  constructor(private readonly page: Page) {
    this.container = page.locator('footer');
  }

  async verifyFooter() {
    await this.container.waitFor({ state: 'visible' });
    await expect(this.container).toBeVisible();
  }
} 