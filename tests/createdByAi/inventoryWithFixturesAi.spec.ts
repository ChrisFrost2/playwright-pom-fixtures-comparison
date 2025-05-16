import { test } from '../fixtures/fixtureByAi'
import { expect } from '@playwright/test';

test.describe('Inventory Tests', () => {
  test.skip('Add product to cart and start checkout', async ({ page, login, addProductToCart, startCheckout }) => {
    await login('standard_user', 'secret_sauce');
    expect(page.url()).toContain('inventory.html');
    await addProductToCart('Sauce Labs Backpack');
    await startCheckout();
    expect(page.url()).toContain('checkout-step-one.html');
    expect(await page.locator(`xpath=//span[text() = "Checkout: Your Information"]`).isVisible()).toBeTruthy();
  });
});
