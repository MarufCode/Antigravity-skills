import { Page, Locator } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateTo(path: string = '/') {
        await this.page.goto(path);
    }

    async clickElement(locator: Locator) {
        await locator.click();
    }

    async typeText(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async getTitle() {
        return await this.page.title();
    }

    async waitForElement(locator: Locator) {
        await locator.waitFor({ state: 'visible' });
    }
}
