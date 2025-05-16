import { test } from '../fixtures/fixtureByAi'
import { expect } from '@playwright/test';

test.describe('Login tests', () => {
    test.skip('Successful login for standard_user', async ({ page, login }) => {
        await login('standard_user', 'secret_sauce');
        expect(page.url()).toContain('inventory.html');
    });

    test.skip('Failed login for locked_out_user', async ({ page, login }) => {       
        await login('locked_out_user', 'secret_sauce');
        const errorMessage = await page.locator('[data-test="error"]').innerText();
        expect(errorMessage).toContain('Sorry, this user has been locked out.');
    });
});
