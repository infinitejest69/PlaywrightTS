import { test, expect } from '../../Fixtures/Fixtures';

//https://playwright.dev/docs/test-parallel#parallelize-tests-in-a-single-file
//Parallelize tests in a single file
test.describe.configure({ mode: 'serial' });

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
