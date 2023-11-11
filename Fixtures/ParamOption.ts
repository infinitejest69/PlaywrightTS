import { test as base } from '@playwright/test';
import { CommonPage } from '../Pages/CommonPage';

export type ParamOption = {
  CommonPage: CommonPage;
  TestCases: { term: string; expected: string };
};

export const test = base.extend<ParamOption>({
  TestCases: [{ term: 'retry', expected: 'retries' }, { option: true }],

  CommonPage: async ({ page }, use) => {
    await use(new CommonPage(page));
  },
});
export { expect } from '@playwright/test';
