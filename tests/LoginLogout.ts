import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://backoffice-systemtest.andalusiagroup.net:8090/');
  test.setTimeout(1500000);
  page.getByText('Login');
  await page.getByPlaceholder('User Name').click();
  await page.getByPlaceholder('User Name').fill('phy');
  await page.getByPlaceholder('User Name').press('Tab');
  await page.getByPlaceholder('Password').fill('123456');
  await page.getByPlaceholder('Password').press('Tab');
  await page.getByRole('button', { name: 'Login' }).press('Enter');
  test.slow();
  test.slow();
  test.slow();
  await page.waitForURL('http://backoffice-systemtest.andalusiagroup.net:8090/dashboard');
  test.slow();
  test.slow();
  page.getByText(' Welcome To DotCare!');
  await page.getByRole('link').nth(1).click();
  await page.getByRole('link', { name: 'Finance' }).click();
  await page.getByRole('link', { name: 'OPD Invoices' }).click();
  await page.locator('#profile-dropdown-right__BV_toggle_').click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();

});