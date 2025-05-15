import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class InventoryPage extends BasePage {
  readonly shopping_cart_badge: Locator;
  readonly shopping_cart_icon: Locator;

  constructor(page: Page) {
    super(page, 'inventory.html');
    this.shopping_cart_badge = this.page.locator('[data-test="shopping-cart-badge"]');
    this.shopping_cart_icon = this.page.locator('[data-test="shopping-cart-link"]');    
  }

  async addProductToCart(productName: string) {    
    const productLocator = this.page.locator(`xpath=//div[text() = '${productName}']/../../..//button`);
    await productLocator.click();
  }

  async isAnyProductInCart() {
    return await this.shopping_cart_badge.isVisible();
  }

  async getNumberOfProductsInCart() {
    return await this.shopping_cart_badge.textContent()
  }
}