import { test, expect } from '@playwright/test';

test.skip('Handling Alerts', async ({ page }) => {
  await page.goto('file:///F:/Zay/playwright/tests/workshop_4/index.html');
  let alertMessage = '';
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    alertMessage = await dialog.message();
    await page.waitForTimeout(3000);
    await dialog.accept();
  });

  await page.click('#show-alert');
  expect(alertMessage).toBe('This is a simple alert.');
});

test.skip('Confirm Alert', async ({ page }) => {
  await page.goto('file:///F:/Zay/playwright/tests/workshop_4/index.html');
  let alertMessage = '';
  page.on('dialog', async (dialog) => {
    alertMessage = dialog.message();
    await page.waitForTimeout(3000);
    await dialog.dismiss();
  });
  await page.click('#show-confirm');
  expect(alertMessage).toBe('You clicked Cancel.');
});

test.only('Handling Pop-ups', async ({ page }) => {
  await page.goto('file:///F:/Zay/playwright/tests/workshop_4/index.html');
  const [popup] = await Promise.all([
    page.waitForEvent('popup'),
    page.click('#open-popup'),
  ]);
  
  await popup.waitForLoadState();

  // if(popup.url() == 'example url') {

  // }

    await popup.close();

})
