import { expect, test } from "@playwright/test";

test("Automation Form Submission", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
  const newToDo = await page.getByPlaceholder("What needs to be done?");
  await newToDo.fill("John Do");
  await newToDo.press("Enter");
  await newToDo.fill("JJ ee");
  await newToDo.press("Enter");
  await page.waitForTimeout(3000);

  const firstToDo = page.getByTestId("todo-item").nth(0);
  await firstToDo.getByRole("checkbox").check();
  await page.waitForTimeout(3000);

  const secondToDo = page.getByTestId("todo-item").nth(1);
  await expect(secondToDo).not.toHaveClass("completed");
  await expect(firstToDo).toHaveClass("completed");
});

test.only("Handling form", async ({ page }) => {
  await page.goto("https://demo.playwright.dev/todomvc");
  const placeholder = '[placeholder="What needs to be done?"]';
  await page.fill(placeholder, 'John Doe');
  await page.locator(placeholder).press('Enter');

  const checkbox = page.locator('.toggle');
  await checkbox.check();
  await page.waitForTimeout(3000);

});
