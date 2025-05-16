import { test, expect } from '@playwright/test';
import { LoginPage } from '../pom/loginPage';
import { InventoryPage } from '../pom/inventoryPage';

test.describe('Login tests', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    loginPage.open();
  });

  test.skip('Successful login - user is authorired and redirected to the products page when passing propper login and password', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.isOpened();
  });

  test.skip('Failed login - user not authorired because is locked out', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.errorMessagePresented('Sorry, this user has been locked out.');
    // test.info().annotations.push({ type: 'issue', description: 'Login failed as expected!' });    
  });

  test.skip('Failed login - user not authorired and still on login page when passing wrong login or password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('standard_user', 'wrong_password');
    await loginPage.errorMessagePresented('Username and password do not match any user in this service');
    // test.info().annotations.push({ type: 'issue', description: 'Login failed as expected!' });    
  });

  test.skip('Failed login - user not authorired and still on login page when did not pass password', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.login('standard_user', '');
    await loginPage.errorMessagePresented('Password is required');
  });

  test.skip('Failed login - user not authorired and still on login page when did not pass username', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.password_input.fill('wrong_password');
    await loginPage.login_button.click();
    await loginPage.errorMessagePresented('Username is required');
  });
});