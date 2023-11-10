import { test as base } from '@playwright/test';
import { CommonPage } from '../Pages/CommonPage';
import { PlaywrightDevPage } from '../Pages/PlaywrightDevPage';

type Fixtures = {
  CommonPage: CommonPage;
  PlaywrightDevPage: PlaywrightDevPage;
};

export const test = base.extend<Fixtures>({
  CommonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
  PlaywrightDevPage: async ({ page }, use) => {
    await use(new PlaywrightDevPage(page));
  },
});
export { expect } from '@playwright/test';
