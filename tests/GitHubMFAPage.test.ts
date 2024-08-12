import test from '../src/lib/BaseTest';
import ENV from "../src/lib/env";


test('Verify GITHUB Multi Factor Authentication(SMS OTP), @MFA', async ({ gitHubMFAPage }) => {
  await gitHubMFAPage.login(ENV.GITUSERNAME,ENV.GITPASSWORD);
  await gitHubMFAPage.handleMFA();
  await gitHubMFAPage.verifyLoginSuceessAfterHandlingMFA();
});