import { test, expect } from '../../Fixtures/Fixtures';

test('visual test Fixture of Locator', async ({ CommonPage, page }) => {
  await page.goto('/');

  await expect(CommonPage.NavBar().search).toHaveScreenshot('Locator.png');
});
