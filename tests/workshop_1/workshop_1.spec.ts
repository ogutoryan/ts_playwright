import { test } from 'playwright/test';

test('Basic navigation', async ({ page }) => {
  await page.goto('https://github.com/');
  await page.waitForTimeout(300);
  await page.reload();
});

test('Interacting with GitLab web elements', async ({ page }) => {
  await page.goto('https://gitlab.com/');
  await page.click('#onetrust-accept-btn-handler');
  await page.click('text=Get free trial');
  await page.locator('[data-testid="new-user-first-name-field"]').fill('John');
  await page.getByTestId('new-user-last-name-field').fill('Snow');
});

test('Using various locator methods', async ({ page }) => {
  await page.goto('https://gitlab.com/');
  await page.getByText('Accept All Cookies').click();
  await page.getByRole('link', { name: 'Sign in' }).click();
});
