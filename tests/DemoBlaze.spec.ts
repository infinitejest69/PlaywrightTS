import { test, expect } from '@playwright/test';

test('DemoBlaze', async ({ page }) => {
  await page.goto('https://www.demoblaze.com');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').click();
  await page.locator('#loginusername').fill('admin');
  await page.locator('#loginusername').press('Tab');
  await page.locator('#loginpassword').fill('admin');
  await page.getByRole('button', { name: 'Log in' }).click();
  await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
});
