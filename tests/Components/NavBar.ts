import { expect, type Locator, type Page } from '@playwright/test';

export class NavBar {
  readonly page: Page;
  search: Locator;
  playwrightLogo: Locator;
  docLink: Locator;
  tocList: Locator;
  APILink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.search = page.getByLabel('Search');
    this.playwrightLogo = page.getByRole('link', { name: 'Playwright logo Playwright' });
    this.docLink = page.getByRole('link', { name: 'Docs' });
    this.APILink = page.getByRole('link', { name: 'API', exact: true });
  }
}
