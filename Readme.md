# TODO list of things to play with

| TODO                                                                                        | DONE               |
| :------------------------------------------------------------------------------------------ | :----------------- |
| Page Object Model                                                                           | :heavy_check_mark: |
| Page Manager                                                                                | :heavy_check_mark: |
| Component for pages                                                                         | :heavy_check_mark: |
| Explore Test Configuration                                                                  | :heavy_check_mark: |
| API Testing and client generation                                                           | :question:         |
| Storage State Before all                                                                    | :x:                |
| Reporters                                                                                   | :heavy_check_mark: |
| Test Fixtures                                                                               | :heavy_check_mark: |
| Project Dependencies                                                                        | :x:                |
| Parallelism                                                                                 | :heavy_check_mark: |
| Parameterize tests                                                                          | :heavy_check_mark: |
| Projects                                                                                    | :heavy_check_mark: |
| Retries                                                                                     | :x:                |
| Sharding                                                                                    | :x:                |
| Web server                                                                                  | :x:                |
| CI pipeline                                                                                 | :x:                |
| [Annotations and Tags](https://playwright.dev/docs/api/class-testproject#test-project-grep) | :x:                |
| Visual Testing                                                                              | :heavy_check_mark: |
| [AllureReport](https://www.npmjs.com/package/allure-playwright)                             | :x:                |
| [monocart-reporter](https://github.com/cenfun/monocart-reporter#preview)                    | :x:                |
| [Trx reporter](https://www.npmjs.com/package/playwright-trx-reporter?activeTab=readme)      | :x:                |
| [Check playwright BDD](https://vitalets.github.io/playwright-bdd/#/installation)            | :x:                |

## Useful Links

[Test Options](https://playwright.dev/docs/api/class-testoptions) :
Playwright Test provides many options to configure test environment, Browser, BrowserContext and more.
These options are usually provided in the configuration file through testConfig.use and testProject.use.

[Custom Reports](https://playwright.dev/docs/test-reporters#custom-reporters) :
You can create a custom reporter by implementing a class with some of the reporter methods. Learn more about the Reporter API.

[Fixtures](https://playwright.dev/docs/test-fixtures) :
Playwright Test is based on the concept of test fixtures. Test fixtures are used to establish environment for each test, giving the test everything it needs and nothing else. Test fixtures are isolated between tests. With fixtures, you can group tests based on their meaning, instead of their common setup.
