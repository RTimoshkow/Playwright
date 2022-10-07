const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.click("input[name='email']");
  await page.locator("input[name='email']").fill("userEmail");
  await page.click("input[name='password']");
  await page.locator("input[name='password']").fill("password");
  await page.click("[data-testid='login-submit-btn']");
  await page.isVisible("text=Неверный email");
  //await expect(page.locator("input[name='email']+span")).toHaveText(/Неверный email/);
  //await page.pause();

  //assertion
  await browser.close();
})();
