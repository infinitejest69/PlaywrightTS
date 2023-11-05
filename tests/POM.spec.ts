import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from './Pages/playwright-dev-page';

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`,
  ]);
});

test('should show Page Object Model article', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});

test('should show search', async ({ page }) => {
  const playwrightDev = new PlaywrightDevPage(page);
  await playwrightDev.goto();
  await playwrightDev.NavBar.search.click();
  await playwrightDev.DocSearchModal.searchDocs().fill('Test');
  await expect(playwrightDev.DocSearchModal.searchDocsModalLink('Writing Tests')).toBeVisible();
  await expect(playwrightDev.DocSearchModal.searchDocsModalLink('Writing Tests')).toBeInViewport();
});