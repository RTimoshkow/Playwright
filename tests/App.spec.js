const { test, expect } = require("@playwright/test");

test("invalid value", async ({ page }) => {

  await page.goto('https://netology.ru/?modal=sign_in');

  await page.click("input[name='email']");
  await page.locator("input[name='email']").fill("userEmail");
  await page.click("input[name='password']");
  await page.locator("input[name='password']").fill("password");
  await page.click("[data-testid='login-submit-btn']");
  await page.isVisible("text=Неверный email");
});

test("authorization", async ({ page }) => {

  await page.goto('https://netology.ru/?modal=sign_in');

  await page.click("input[name='email']");
  await page.locator("input[name='email']").fill(userEmail);
  await page.click("input[name='password']");
  await page.locator("input[name='password']").fill(password);
  await page.click("[data-testid='login-submit-btn']");
  await page.isVisible("text=Неверный email");
  //не смог загрузить переменные
});