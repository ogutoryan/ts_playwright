import { test, expect } from '@playwright/test';

const testData = {
  firstName: 'John',
  lastName: 'Snow',
  address: '355 Main St',
  number: '0838245',
};

test.describe('User registration tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file:///F:/Zay/playwright/tests/workshop_6/index.html');
  });

  test.only('Register with valid data', async ({ page }) => {
    await page.fill('#firstName', testData.firstName);
    await page.fill('#lastName', testData.lastName);
    await page.fill('#address', testData.address);
    await page.fill('#number', testData.number);
    await page.click('#register');

    const firstNameText = await page.locator('#displayFirstName').textContent();
    const lastNameText = await page.locator('#displayLastName').textContent();
    const addressText = await page.locator('#displayAddress').textContent();
    const numberText = await page.locator('#displayNumber').textContent();

    await expect(firstNameText).toEqual(testData.firstName);
    await expect(lastNameText).toEqual(testData.lastName);
    await expect(addressText).toEqual(testData.address);
    await expect(numberText).toEqual(testData.number);
  });

  test.only('Register with some empty fields', async ({ page }) => {
    await page.fill('#firstName', testData.firstName);
    await page.fill('#lastName', testData.lastName);
    await page.click('#register');
    const error = await page
      .getByText('Please fill in all fields.')
      .textContent();

    expect(error).toBe('Please fill in all fields.');
  });

  test.only('Register with all empty fields', async ({ page }) => {
    await page.click('#register');
    const error = await page
      .getByText('Please fill in all fields.')
      .textContent();
    expect(error).toBe('Please fill in all fields.');
  });
});
