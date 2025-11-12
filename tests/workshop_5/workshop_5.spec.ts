import { test, expect } from '@playwright/test';
import { isContext } from 'vm';

test.skip('Open new window and navigate back', async ({ context, page }) => {
  await page.goto('file:///F:/Zay/playwright/tests/workshop_5/index.html');
  const pagePromise = context.waitForEvent('page');
  await page.click('#openNewWindow');
  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  console.log(await newPage.title());
  await expect(
    newPage.getByRole('heading', { name: 'Welcome to the New Page' })
  ).toBeVisible();
});

test.skip('Add cookie', async ({ page }) => {
    await page.goto('file:///F:/Zay/playwright/tests/workshop_5/index.html');
    await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///F:/Zay/playwright/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie', sessionCookie);
    await expect(sessionCookie).toBeDefined();
});


test.only('Delete cookie', async({page}) => {
  await page.goto('file:///F:/Zay/playwright/tests/workshop_5/index.html');
  await page.click('#setCookie');
    const cookies = await page.context().cookies('file:///F:/Zay/playwright/tests/workshop_5/index.html');
    const sessionCookie = cookies.find(cookies => cookies.name === 'session');
    console.log('Session cookie', sessionCookie);
  
    await page.click('#deleteCookie');
    const deletedCookies = await page.context().cookies('file:///F:/Zay/playwright/tests/workshop_5/index.html');
    const deletedSessionCookies = deletedCookies.find(cookies => cookies.name === 'session');
    await expect(deletedSessionCookies).not.toBeDefined();

})