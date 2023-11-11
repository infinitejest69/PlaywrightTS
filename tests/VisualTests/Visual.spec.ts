import { test, expect } from '@playwright/test';

test('visual test', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('devPage.png');
});

test('visual test with options', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('With Options.png', { animations: 'disabled', maxDiffPixels: 100, fullPage: true, omitBackground: true });
});
