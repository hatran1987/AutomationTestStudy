import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class MyInfoPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Tabs
  get tabs() {
    return this.container.locator('div[role="tablist"]');
  }

  get personalDetailsTab() {
    return this.tabs.locator('a:has-text("Personal Details")');
  }

  get emergencyContactsTab() {
    return this.tabs.locator('a:has-text("Emergency Contacts")');
  }

  // Personal Details Section
  get personalDetailsSection() {
    return this.container.locator('h6:has-text("Personal Details")').locator('..');
  }

  get employeeFullName() {
    return {
      firstName: this.personalDetailsSection.locator('input[placeholder="First Name"]'),
      middleName: this.personalDetailsSection.locator('input[placeholder="Middle Name"]'),
      lastName: this.personalDetailsSection.locator('input[placeholder="Last Name"]'),
    };
  }

  get employeeId() {
    return this.personalDetailsSection.locator('input[placeholder="Employee Id"]');
  }

  get saveButton() {
    return this.personalDetailsSection.locator('button:has-text("Save")');
  }

  // Emergency Contacts Section
  get emergencyContactsSection() {
    return this.container.locator('h6:has-text("Emergency Contacts")').locator('..');
  }

  async navigateToTab(tab: Locator) {
    await tab.click();
    await this.page.waitForLoadState('networkidle');
  }

  async updatePersonalDetails(firstName: string, middleName: string, lastName: string, employeeId: string) {
    await this.navigateToTab(this.personalDetailsTab);
    await this.employeeFullName.firstName.fill(firstName);
    await this.employeeFullName.middleName.fill(middleName);
    await this.employeeFullName.lastName.fill(lastName);
    await this.employeeId.fill(employeeId);
    await this.saveButton.click();
  }

  async verifyPersonalDetails(firstName: string, middleName: string, lastName: string, employeeId: string) {
    await expect(this.employeeFullName.firstName).toHaveValue(firstName);
    await expect(this.employeeFullName.middleName).toHaveValue(middleName);
    await expect(this.employeeFullName.lastName).toHaveValue(lastName);
    await expect(this.employeeId).toHaveValue(employeeId);
  }

  async exploreAllTabs() {
    const tabs = await this.tabs.locator('a').all();
    for (const tab of tabs) {
      const tabName = await tab.textContent();
      console.log(`Exploring tab: ${tabName?.trim()}`);
      await this.navigateToTab(tab);
      // Log or verify the structure of the current tab
      const sectionHeaders = await this.container.locator('h6').allTextContents();
      console.log(`Sections in ${tabName?.trim()}:`, sectionHeaders);
    }
  }

  // Navigate to Personal Details Tab
  async navigateToPersonalDetailsTab() {
    await this.personalDetailsTab.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Navigate to Emergency Contacts Tab
  async navigateToEmergencyContactsTab() {
    await this.emergencyContactsTab.click();
    await this.page.waitForLoadState('networkidle');
  }

  // Verify Personal Details Tab
  async verifyPersonalDetailsTab(firstName: string, middleName: string, lastName: string, employeeId: string) {
    await this.navigateToPersonalDetailsTab();
    await expect(this.employeeFullName.firstName).toHaveValue(firstName);
    await expect(this.employeeFullName.middleName).toHaveValue(middleName);
    await expect(this.employeeFullName.lastName).toHaveValue(lastName);
    await expect(this.employeeId).toHaveValue(employeeId);
  }

  // Verify Emergency Contacts Tab
  async verifyEmergencyContactsTab(expectedContacts: string[]) {
    await this.navigateToEmergencyContactsTab();
    const contactNames = await this.emergencyContactsSection.locator('.contact-name').allTextContents();
    expect(contactNames).toEqual(expectedContacts);
  }

  // Screenshot Personal Details Tab
  async screenshotPersonalDetailsTab() {
    await this.navigateToPersonalDetailsTab();
    await expect(this.container).toHaveScreenshot('personal-details-tab.png');
  }

  // Screenshot Emergency Contacts Tab
  async screenshotEmergencyContactsTab() {
    await this.navigateToEmergencyContactsTab();
    await expect(this.container).toHaveScreenshot('emergency-contacts-tab.png');
  }

  async navigateAndCaptureTabs() {
    const tabs = await this.tabs.locator('a').all();
    for (const tab of tabs) {
      const tabName = await tab.textContent();
      console.log(`Navigating to tab: ${tabName?.trim()}`);
      await tab.click();
      await this.page.waitForLoadState('networkidle');

      // Capture elements in the current tab
      const elements = await this.container.locator('*').allTextContents();
      console.log(`Elements in ${tabName?.trim()}:`, elements);
    }
  }
}