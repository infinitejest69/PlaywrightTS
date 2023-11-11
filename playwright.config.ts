import { defineConfig, devices } from '@playwright/test';
import type { ParamOption } from './Fixtures/ParamOption';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

export default defineConfig<ParamOption>({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  expect: {
    // Maximum time expect() should wait for the condition to be met.
    timeout: 5000,
    toHaveScreenshot: {
      // An acceptable amount of pixels that could be different, unset by default.
      maxDiffPixels: 10,
    },
    toMatchSnapshot: {
      // An acceptable ratio of pixels that are different to the
      // total amount of pixels, between 0 and 1.
      maxDiffPixelRatio: 0.1,
    },
  },
  //timeout:30000,
  // path to the global setup files.
  //globalSetup: require.resolve('./global-setup'),
  // path to the global teardown files.
  //globalTeardown: require.resolve('./global-teardown'),
  //shard: { total: 10, current: 3 },
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI
    ? [['list'], ['json', { outputFile: 'test-results\\test-results.json' }], ['blob'], ['junit', { outputFile: 'test-results\\test-results.xml' }]]
    : [['list'], ['html', { open: 'never' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    launchOptions: {
      slowMo: 50,
      devtools: false,
    },
    headless: true,
    viewport: { width: 1600, height: 1080 },
    ignoreHTTPSErrors: true,
    //Edinburgh
    geolocation: { longitude: 55.9533, latitude: 3.1883 },
    //NewYork
    //geolocation: { longitude: 40.7128, latitude: 74.006 },
    locale: 'en-GB',
    timezoneId: 'Europe/London',
    //navigationTimeout: 3000,
    offline: false,
    hasTouch: false,
    isMobile: false,
    javaScriptEnabled: true,
    video: 'on-first-retry',
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://playwright.dev/',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    //trace: 'retain-on-failure',
    trace: { mode: 'retain-on-failure', attachments: true, screenshots: true, snapshots: true, sources: true },
    screenshot: { fullPage: true, mode: 'only-on-failure', omitBackground: true },
    //serviceWorkers: 'allow',
    //storageState:'state.json'
    //userAgent: 'some custom ua',
  },
  

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'Microsoft Edge',
      use: {
        ...devices['Desktop Edge'],
        channel: 'msedge',
      },
    },

    {
      name: 'Search',
      use: { TestCases: { term: 'retry', expected: 'retries' } },
    },

    {
      name: 'Search2',
      use: { TestCases: { term: 'Something', expected: 'Do something with each element in the list​' } },
    },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
