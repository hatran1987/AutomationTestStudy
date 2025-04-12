import { Page, Locator, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class AddUserPage extends BasePage {
    constructor(page: Page) {
    super(page);
  }

  get headingAddUser() {
    return this.container.getByRole('heading', { name: 'Add User' })
  }

  getEmployeeName(nameText: string): Locator {
    return this.container.getByText('Employee Name')
      .locator('..').locator('..').locator('..')
      .getByRole('textbox')
      .first();
  }

  getEmployeeNameOption(nameText: string): Locator {
    return this.container.getByText('Employee Name')
      .locator('..').locator('..').locator('..')
      .getByRole('option', { name: nameText })
      .first();
  }

  get username(){
    return this.container.getByText('Username')
      .locator('..').locator('..').locator('..')
      .getByRole('textbox').first();
  }

  get password(){
    return this.container.getByText('Password')
      .locator('..').locator('..').locator('..')
      .getByRole('textbox').first();
  }

  get confirmPassword(){
    return this.container.getByText('Confirm Password')
      .locator('..').locator('..').locator('..')
      .getByRole('textbox').first();
  }

  get saveButton() {
    return this.container.getByRole('button', { name: 'Save' })
  }

  get cancelButton() {
    return this.container.getByRole('button', { name: 'Cancel' }) 
  }

  async selectEmployeeName(nameText: string) {
    await this.getEmployeeName(nameText).fill(nameText);
    await this.getEmployeeNameOption(nameText).click();
  }
  
  getDropdown(labelText: string): Locator {
      return this.container.getByText(labelText)
        .locator('..').locator('..').locator('..')
        .locator('.oxd-select-text')
        .first();
  }

  getUsernameLessThanMinimumCharactersErrorMessage(labelText: string): Locator {
    return this.container.getByText(labelText)
      .locator('..').locator('..').locator('..')
      .getByText('Should be at least 5 characters')
      .first();
  }

  getUsernameOverMaximumCharactersErrorMessage(labelText: string): Locator {
    return this.container.getByText(labelText)
      .locator('..').locator('..').locator('..')
      .getByText('Should not exceed 40 characters')
      .first();
  }

  getUserNameExistedErrorMessage(labelText: string): Locator {
    return this.container.getByText(labelText)
      .locator('..').locator('..').locator('..')
      .getByText('Already exists')
      .first();
  }

  getRequiredFieldErrorMessage(labelText: string): Locator {
    return this.container.getByText(labelText)
      .locator('..').locator('..').locator('..')
      .getByText('Required')
      .first();
  }

  get5RequiredCharactersErrorMessage(labelText: string): Locator {
    return this.container.getByText(labelText)
      .locator('..').locator('..').locator('..')
      .getByText('Should be at least 5 characters')
      .first();
  }

  get7RequiredCharactersErrorMessage(labelText: string): Locator {
    return this.container.getByText(labelText)
      .locator('..').locator('..').locator('..')
      .getByText('Should have at least 7 characters')
      .first();
  }

  get64MaximumCharactersErrorMessage(labelText: string): Locator {
    return this.container.getByText(labelText)
      .locator('..').locator('..').locator('..')
      .getByText('Should not exceed 64 characters')
      .first();
  }

 

  getLackLowerCharactersErrorMessage(labelText: string): Locator {
    return this.container.getByText(labelText)
      .locator('..').locator('..').locator('..')
      .getByText('Your password must contain minimum 1 lower-case letter')
      .first();
  }

  getSuccessMessage(labelText: string): Locator {
    return this.container.getByText('Successfully Saved').first();
  }

  async selectDropdown(labelText: string, option:string) {
    await this.getDropdown(labelText).click();

    const optionMap: Record<string, string> = {
      'Select': '-- Select --',
      'Admin': 'Admin',
      'ESS': 'ESS',
      'Enabled': 'Enabled',
      'Disabled': 'Disabled',
    };

    const visibleOption = optionMap[option] ?? option;

    await this.container.getByText(labelText)
        .locator('..').locator('..').locator('..')
        .getByRole('option', { name: visibleOption }).click();
  }

  async verifyDropdown(labelText: string, expectedOptions: string[]): Promise<void> {
    const dropdown = this.getDropdown(labelText);
    await dropdown.click();
  
    // Mapping for visible values if needed
    const optionMap: Record<string, string> = {
      'Select': '-- Select --',
      'Enabled': 'Enabled',
      'Disabled': 'Disabled',
      'Admin': 'Admin',
      'ESS': 'ESS',
    };
  
    const visibleOptions = expectedOptions.map(opt => optionMap[opt] ?? opt);
  
    for (const option of visibleOptions) {
      const optionLocator = this.container.getByRole('option', { name: option });
      await expect(optionLocator).toBeVisible(); // Requires `@playwright/test`
    }
  
    // Optional: close the dropdown if needed
    await dropdown.press('Escape');
  }

  async isLoaded() {
    await this.page.waitForLoadState('load');
    await this.container.waitFor({ state: 'visible' });
    await this.verifyModuleTitle('Admin');
    await this.headingAddUser.waitFor({ state: 'visible' });
  }
}