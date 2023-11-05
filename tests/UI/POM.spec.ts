import { test, expect } from '@playwright/test';
import { PageManager } from '../../Pages/pagemanager';

test('getting started should contain table of contents', async ({ page }) => {
  const manager = new PageManager(page);
  await page.goto('/');
  await manager.PlaywrightDevPage().getStarted();
  await expect(manager.PlaywrightDevPage().tocList).toHaveText([
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
  const manager = new PageManager(page);
  await page.goto('/');
  await manager.PlaywrightDevPage().pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});

test('search for "test" shows "Writing Tests" in results', async ({ page }) => {
  const manager = new PageManager(page);
  await page.goto('/');
  await manager.CommonPage().NavBar().search.click();
  await manager.CommonPage().DocSearchModal().searchDocs().fill('Test');
  await expect(manager.CommonPage().DocSearchModal().searchDocsModalLink('Writing Tests')).toBeVisible();
  await expect(manager.CommonPage().DocSearchModal().searchDocsModalLink('Writing Tests')).toBeInViewport();
});

test('Xfail with a failing result', async ({ page }) => {
  //interesting Xfail
  test.fail(true, 'Failing due to bug #1234');
  const manager = new PageManager(page);
  await page.goto('/');
  await manager.CommonPage().NavBar().search.click();
  await manager.CommonPage().DocSearchModal().searchDocs().fill('fail');
  await expect(manager.CommonPage().DocSearchModal().searchDocsModalLink('Pass')).toBeVisible();
  await expect(manager.CommonPage().DocSearchModal().searchDocsModalLink('Pass')).toBeInViewport();
});

test('Xfail with a passing result', async ({ page }) => {
  //interesting Xfail
  test.fail(true, 'Failing due to bug #1234');
  const manager = new PageManager(page);
  await page.goto('/');
  await manager.CommonPage().NavBar().search.click();
  await manager.CommonPage().DocSearchModal().searchDocs().fill('page object');
  await expect(manager.CommonPage().DocSearchModal().searchDocsModalLink('page object models').first()).toBeVisible();
  await expect(manager.CommonPage().DocSearchModal().searchDocsModalLink('page object models').first()).toBeInViewport();
});
