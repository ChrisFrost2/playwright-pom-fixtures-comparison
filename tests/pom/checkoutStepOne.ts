import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './basePage';

export class CheckoutStepOnePage extends BasePage {

  constructor(page: Page) {
    super(page, 'checkout-step-one.html');  
  }
}