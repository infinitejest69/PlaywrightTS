import { test, expect, request } from '@playwright/test';

test('should return cat fact', async ({ request }) => {
  const catfact = await request.get(`https://catfact.ninja/fact`);
  expect(catfact.ok()).toBeTruthy();
  expect(await catfact.json()).toContain('fact');
});
