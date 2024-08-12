import { test as base } from '@playwright/test';
//replace with export of page with locators

import { SwagLabsPage } from '../pageFactory/SwagLabsPage';
import { GitHubMFAPage } from '../pageFactory/GitHubMFAPage';

//replase with POM classes
const test = base.extend<{
    swagLabsPage: SwagLabsPage;
    gitHubMFAPage: GitHubMFAPage;
      
}>({
    swagLabsPage: async ({ page, context }, use) => {
        await use(new SwagLabsPage(page, context));
    },
    gitHubMFAPage: async ({ page, context }, use) => {
            await use(new GitHubMFAPage(page, context));
    } 
})

export default test;
export const expect = test.expect;
