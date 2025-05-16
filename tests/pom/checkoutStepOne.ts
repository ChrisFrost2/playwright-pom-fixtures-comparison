import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutStepOnePage extends BasePage {
  readonly checkoutStepOneHeader: Locator;

  constructor(page: Page) {
    super(page, 'checkout-step-one.html');  
    this.checkoutStepOneHeader = this.page.locator(`xpath=//span[text() = "Checkout: Your Information"]`);
  }
}