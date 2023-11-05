import { expect, type Locator, type Page } from '@playwright/test';

export class DocSearchModal {
  readonly page: Page;


  constructor(page: Page) {
    this.page = page;    
  }

  searchDocsModalLink(input: string): Locator {
    return this.page.getByRole('link', { name: input });
  }

  searchDocs(): Locator {
    return this.page.getByPlaceholder('Search docs');
  }
}
