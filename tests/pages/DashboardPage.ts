import { BasePage } from './BasePage';

import { Page, expect, Locator } from '@playwright/test';

export class DashboardPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async isLoaded() {
        await this.headerbar.verifyModuleTitle('Dashboard');
        await this.container.waitFor({ state: 'visible' });
        await this.page.waitForLoadState('load');
        await this.page.waitForLoadState('networkidle');
        await (this.getWidgetByName('My Actions')).waitFor({ state: 'visible' });
    }

    async verifyLayoutForDashboard() {
        await this.verifyLayoutHasSubMenu(false);
        await this.container.waitFor({ state: 'visible' });
    }

    async verifyWidget() {
        const widgets = this.container.locator('.oxd-sheet.oxd-sheet--rounded oxd-sheet--white.orangehrm-dashboard-widget');
        const count = await widgets.count();

        for (let i = 0; i < count; i++) {
            const widget = widgets.nth(i);
            await expect(widget).toBeVisible();
        }
    }

    getWidgetByName(name: string): Locator {
        return this.container.locator('.orangehrm-dashboard-widget').filter({
            has: this.page.locator(`.orangehrm-dashboard-widget .orangehrm-dashboard-widget-header .orangehrm-dashboard-widget-name .oxd-text:has-text("${name}")`)
        });
    }

    async showWelcomeUser(user: string) {
        expect(await this.headerbar.getUsername()).toBe('tina Nguyen');
    }

    async dashboardScreenshot() {
        await expect(this.container).toHaveScreenshot('dashboard.png');
    }

    async verifyTimeAtWorkWidget() {
        const widget = this.container.locator('text=Time at Work');
        await expect(widget).toBeVisible();
    }

    async verifyBuzzLatestPostsWidget() {
        const widget = this.container.locator('text=Buzz Latest Posts');
        await expect(widget).toBeVisible();
    }

    async verifyEmployeeDistributionWidgets() {
        const subUnitWidget = this.container.locator('text=Employee Distribution by Sub Unit');
        const locationWidget = this.container.locator('text=Employee Distribution by Location');
        await expect(subUnitWidget).toBeVisible();
        await expect(locationWidget).toBeVisible();
    }

    async verifyFooter() {
        await this.verifyFooter();
    }

    async verifyWidgetContent(widgetName: string, expectedContent: string) {
        const widget = this.getWidgetByName(widgetName);
        await expect(widget).toBeVisible();
        await expect(widget).toContainText(expectedContent);
    }
}