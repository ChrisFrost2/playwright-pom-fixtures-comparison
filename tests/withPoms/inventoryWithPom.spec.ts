import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/loginPage';
import { InventoryPage } from '../pom/inventoryPage';
import { CartPage } from '../pom/cartPage';
import { CheckoutStepOnePage } from '../pom/checkoutStepOne';

test.describe('Inventory Tests', () => {
  test('Add product to cart and start checkout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkoutStepOnePage = new CheckoutStepOnePage(page);

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