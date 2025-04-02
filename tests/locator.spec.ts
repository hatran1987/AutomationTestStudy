import { test, expect, Browser, Page, Locator } from '@playwright/test'
import {webkit, chromium, firefox} from 'playwright'

test('Locator Test', async () => {
    const browser:Browser = await chromium.launch({headless: false, channel: 'chrome'});
    const page:Page = await browser.newPage();
    await page.goto ("https://naveenautomationlabs.com/opencart/index.php?route=account/register");

    // Create a web element (locator) + perform action on it (click, fill data)
    // 1. Id: unique
    page.locator('id=input-firstname').fill("Test Automation");
});