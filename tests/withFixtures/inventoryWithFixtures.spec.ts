import { test } from '../fixtures/allFixtures'
import { expect } from '@playwright/test';

test.describe('Inventory Tests', () => {
  test('Add product to cart and start checkout', async ({ page, loginPage, inventoryPage, cartPage, checkoutStepOnePage }) => {
    await loginPage.open();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.isOpened();
    await inventoryPage.addProductToCart('Sauce Labs Backpack');
    expect(await inventoryPage.isAnyProductInCart()).toBeTruthy();
    expect(await inventoryPage.getNumberOfProductsInCart()).toEqual('1');
    await inventoryPage.shopping_cart_icon.click();
    await cartPage.checkout_button.click();
    await checkoutStepOnePage.isOpened();
    expect(checkoutStepOnePage.checkoutStepOneHeader.isVisible()).toBeTruthy();
  });
});
