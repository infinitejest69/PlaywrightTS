import { test, expect } from '../../Fixtures/Fixtures';

test('search for "test" shows "Writing Tests" in results 2', async ({ CommonPage, page }) => {
  await page.goto('/');
  await CommonPage.NavBar().search.click();
  await CommonPage.DocSearchModal().searchDocs().fill('Test');
  await expect(CommonPage.DocSearchModal().searchDocsModalLink('Writing Tests')).toBeVisible();
  await expect(CommonPage.DocSearchModal().searchDocsModalLink('Writing Tests')).toBeInViewport();
});

test('should show Page Object Model article 2', async ({ PlaywrightDevPage, page }) => {
  await page.goto('/');
  await PlaywrightDevPage.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});
