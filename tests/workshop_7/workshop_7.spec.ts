import { test, expect } from '@playwright/test';

const selectors = {
  firstName: '#firstName',
  age: '#age',
  isStudent: '#isStudent',
};

test.beforeEach(async ({ page }) => {
  await page.goto('file:///F:/Zay/playwright/tests/workshop_7/index.html');
});

test.describe('Variable Declarations and Types', () => {
  test.skip('Declarations and Types', async ({ page }) => {
    let firstName: string = 'John';
    let age: number = 30;
    let isStudent: boolean = true;

    await page.fill(selectors.firstName, firstName);
    await page.fill(selectors.age, age.toString());
    await page.check('#isStudent');

    await page.click('#applyData');

    expect(await page.textContent('#displayFirstName')).toBe(firstName);
    expect(await page.textContent('#displayAge')).toContain(age.toString());
    expect(await page.isChecked('#isStudent')).toBe(isStudent);
  });
});

test.describe('Type definition and interfaces', () => {
  type User = {
    firstName: string;
    age: number;
    isStudent: boolean;
  };

  let user: User = {
    firstName: 'Jane',
    age: 25,
    isStudent: true,
  };

  test.skip('Type def and Interfaces', async ({ page }) => {
    await page.fill(selectors.firstName, user.firstName);
    await page.fill(selectors.age, user.age.toString());
    await page.check('#isStudent');

    await page.click('#applyData');

    expect(await page.textContent('#displayFirstName')).toBe(user.firstName);
    expect(await page.textContent('#displayAge')).toContain(
      user.age.toString()
    );
    expect(await page.isChecked('#isStudent')).toBe(user.isStudent);
  });
});
