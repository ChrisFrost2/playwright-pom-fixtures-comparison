import { test as base } from '@playwright/test';

type FixtureExample = {
    login: (username: string, password: string) => Promise<void>;
    addProductToCart: (productName: string) => Promise<void>;
    startCheckout: () => Promise<void>;
};

export const test = base.extend<FixtureExample>({
    login: async ({ page }, use) => {
        await use(async (username: string, password: string) => {
            await page.goto('https://www.saucedemo.com/');
            await page.fill('#user-name', username);
            await page.fill('#password', password);
            await page.click('#login-button');
        });
    },
    addProductToCart: async ({ page }, use) => {
        await use(async (productName: string) => {
            const productLocator = page.locator(`xpath=//div[text() = '${productName}']/../../..//button`);
            await productLocator.click();
        });
    },
    startCheckout: async ({ page }, use) => {
        await use(async () => {
            await page.click('[data-test="shopping-cart-link"]'); 
            await page.click('[data-test="checkout"]');
        });
    }
});