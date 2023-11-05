import { Page } from '@playwright/test';
import { CommonPage } from './CommonPage';
import { PlaywrightDevPage } from './PlaywrightDevPage';

export class PageManager {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  CommonPage(): CommonPage {
    return new CommonPage(this.page);
  }

  PlaywrightDevPage(): PlaywrightDevPage {
    return new PlaywrightDevPage(this.page);
  }
}
