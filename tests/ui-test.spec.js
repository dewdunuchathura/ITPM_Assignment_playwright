import { test, expect } from "@playwright/test";

test("Pos_UI_0001", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.type("mama campus ekee.", { delay: 300 });
  await expect(page.locator("body")).toContainText("ම");
});
