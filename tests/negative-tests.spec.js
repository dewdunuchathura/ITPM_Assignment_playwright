import { test, expect } from "@playwright/test";

test("Neg_Fun_0001", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mamaofficeyanavaa");
  await expect(page.getByText("Incorrect or unreadable Sinhala output")).toBeVisible();
});

test("Neg_Fun_0002", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mam offce ynav");
  await expect(page.getByText("Incorrect or partially incorrect output")).toBeVisible();
});

test("Neg_Fun_0003", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("adoo mam offce ynne na bn");
  await expect(page.getByText("Meaning is distorted or unclear in Sinhala")).toBeVisible();
});

test("Neg_Fun_0004", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mama yanava office");
  await expect(page.getByText("Incorrect sentence structure in Sinhala")).toBeVisible();
});

test("Neg_Fun_0005", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mama iiyee yanna");
  await expect(page.getByText("Incorrect tense conversion")).toBeVisible();
});

test("Neg_Fun_0006", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mamaaaa officeeee yanavaaa");
  await expect(page.getByText("Distorted Sinhala output")).toBeVisible();
});

test("Neg_Fun_0007", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mam office yanna late because traffic very heavy");
  await expect(page.getByText("Partial or incorrect Sinhala conversion")).toBeVisible();
});

test("Neg_Fun_0008", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mama gedhara\n\nyanavaa\n\nadha");
  await expect(page.getByText("Output formatting and meaning incorrect")).toBeVisible();
});

test("Neg_Fun_0009", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mama 123 office yanavaa");
  await expect(page.getByText("Numbers disrupt sentence meaning")).toBeVisible();
});

test("Neg_Fun_0010", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("u r ok?");
  await expect(page.getByText("Not converted or incorrectly converted")).toBeVisible();
});
