import { Page } from '@playwright/test';
import { NavBar } from '../ComponentsObjects/NavBar';
import { DocSearchModal } from '../ComponentsObjects/DocSearchModal';

export class CommonPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  NavBar(): NavBar {
    return new NavBar(this.page);
  }

  DocSearchModal(): DocSearchModal {
    return new DocSearchModal(this.page);
  }
}
