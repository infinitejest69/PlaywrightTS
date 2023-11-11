import { test, expect } from '../../Fixtures/ParamOption';

let TestCases: { term: string; expected: string }[] = [
  { term: 'Test', expected: 'Writing Tests' },
  { term: 'page', expected: 'Pages' },
  { term: 'shard', expected: 'Sharding' },
];

//Test wide param
for (const testCase of TestCases) {
  test(`search for ${testCase.term} shows ${testCase.expected} in results Param`, async ({ CommonPage, page }) => {
    await page.goto('/');
    await CommonPage.NavBar().search.click();
    await CommonPage.DocSearchModal().searchDocs().fill(testCase.term);
    await expect(CommonPage.DocSearchModal().searchDocsModalLink(testCase.expected).first()).toBeVisible();
    await expect(CommonPage.DocSearchModal().searchDocsModalLink(testCase.expected).first()).toBeInViewport();
  });
}

//project Wide Param
//Cant use in Title?
test(`search for something shows something in results Param`, async ({CommonPage, page, TestCases }) => {
  await page.goto('/');
  await CommonPage.NavBar().search.click();
  await CommonPage.DocSearchModal().searchDocs().fill(TestCases.term);
  await expect(CommonPage.DocSearchModal().searchDocsModalLink(TestCases.expected).first()).toBeVisible();
  await expect(CommonPage.DocSearchModal().searchDocsModalLink(TestCases.expected).first()).toBeInViewport();
});
