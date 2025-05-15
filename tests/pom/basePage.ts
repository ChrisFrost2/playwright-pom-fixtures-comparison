import { type Page, expect } from '@playwright/test';

export class BasePage {
  url: string;
  page: Page;

  constructor(page: Page, url: string) {
    this.page = page;
    this.url = `https://www.saucedemo.com/${url ? url : ''}`;
  }

  async open() {
    await this.page.goto(this.url);
  }

  async isOpened() {
    expect(this.page).toHaveURL(this.url, { timeout: 15000 });
  }
}