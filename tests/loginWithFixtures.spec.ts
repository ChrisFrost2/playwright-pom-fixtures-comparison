import { test } from './fixtures/allFixtures'
import { expect } from '@playwright/test';

test.describe('Login tests', () => {
    test.beforeEach(async ({ page, loginPage }) => {        
        await loginPage.open();
      });

    test('Successful login for standard_user', async ({ page, loginPage, inventoryPage }) => {
        await loginPage.login('standard_user', 'secret_sauce');
        await inventoryPage.isOpened();
    });

    test('Failed login for locked_out_user', async ({ page, loginPage }) => {
        await loginPage.login('locked_out_user', 'secret_sauce');
        await loginPage.errorMessagePresented('Sorry, this user has been locked out.');
    });
});
