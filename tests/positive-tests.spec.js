import { test, expect } from "@playwright/test";

test("Pos_Fun_0001", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mama panthi yanavaa");
  await expect(page.getByText("මම පන්ති යනවා")).toBeVisible();
});

test("Pos_Fun_0002", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("oyaa hodhin dha?");
  await expect(page.getByText("ඔයා හොදින් ද?")).toBeVisible();
});

test("Pos_Fun_0003", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("dhakunata haerenna");
  await expect(page.getByText("දකුනට හැරෙන්න")).toBeVisible();
});

test("Pos_Fun_0004", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("oyaa gedhara innawadha?");
  await expect(page.getByText("ඔයා ගෙදර ඉන්නවද")).toBeVisible();
});

test("Pos_Fun_0005", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mama bath kanavaa saha tea bonawaa.");
  await expect(page.getByText("මම බත් කනවා සහ තේ බොනවා.")).toBeVisible();
});

test("Pos_Fun_0006", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("eya poddak balanna.");
  await expect(page.getByText("එය පොඩ්ඩක් බලන්න.")).toBeVisible();
});

test("Pos_Fun_0007", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("ohu enna kiyala mama gedhara inne.");
  await expect(page.getByText("ඔහු එන්න කියලා මම ගෙදර ඉන්නේ.")).toBeVisible();
});

test("Pos_Fun_0008", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("aeya dan lecture ahagena inne.");
  await expect(page.getByText("ඇය දැන් lecture අහගෙන ඉන්නේ.")).toBeVisible();
});

test("Pos_Fun_0009", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("ohu kalin call ekak gaththa.");
  await expect(page.getByText("ඔහු කලින් call එකක් ගත්ත.")).toBeVisible();
});

test("Pos_Fun_0010", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("api heta meeting ekata yamu.");
  await expect(page.getByText("අපි හෙට meeting එකට යමු.")).toBeVisible();
});

test("Pos_Fun_0011", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mata adha office yanna bae.");
  await expect(page.getByText("මට අද office යන්න බැහැ.")).toBeVisible();
});

test("Pos_Fun_0012", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("puluvannam mata file eka evanna.");
  await expect(page.getByText("පුළුවන්නම් මට file එක එවන්න.")).toBeVisible();
});

test("Pos_Fun_0013", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("hari lassanayi neh?");
  await expect(page.getByText("හරි ලස්සනයි නේ?")).toBeVisible();
});

test("Pos_Fun_0014", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("teacher class ekata enavaa.");
  await expect(page.getByText("teacher class එකට එනවා.")).toBeVisible();
});

test("Pos_Fun_0015", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("ohuta document tika upload karanna thiyenavaa.");
  await expect(page.getByText("ඔහුට document ටික upload කරන්න තියෙනවා.")).toBeVisible();
});

test("Pos_Fun_0016", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mama Colombo valata travel karanavaa.");
  await expect(page.getByText("මම Colombo වලට travel කරනවා.")).toBeVisible();
});

test("Pos_Fun_0017", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("movie eka 10.00 AM ta patan gannavaa.");
  await expect(page.getByText("movie එක 10.00 AMට පටන් ගන්නවා.")).toBeVisible();
});

test("Pos_Fun_0018", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("photo eka Rs. 1500 yi.");
  await expect(page.getByText("photo එක Rs. 1500යි.")).toBeVisible();
});

test("Pos_Fun_0019", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("ohu practice yanna hadhanavaa.");
  await expect(page.getByText("ඔහු practice යන්න හදනවා.")).toBeVisible();
});

test("Pos_Fun_0020", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("mama gedhara inne.oyaa enavadha?");
  await expect(page.getByText("මම ගෙදර ඉන්නේ.ඔයා එනවද?")).toBeVisible();
});

test("Pos_Fun_0021", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("api next month party ekak plan karanavaa.");
  await expect(page.getByText("අපි next mont party එකක් plan කරනවා.")).toBeVisible();
});

test("Pos_Fun_0022", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("eka hari hari lassanayi.");
  await expect(page.getByText("එක හරි හරි ලස්සනයි.")).toBeVisible();
});

test("Pos_Fun_0023", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("api adha university eke lecture ekak thibuna. eka godak vatina eka nisa api hamom ahagena inne. passe api gedhara yanavaa");
  await expect(page.getByText("අපි අද university එකේ lecture එකක් තිබුණා. එක ගොඩක් වටිනා එක නිසා අපි හැමෝම අහගෙන ඉන්නේ. පස්සේ අපි ගෙදර යනවා")).toBeVisible();
});

test("Pos_Fun_0024", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.getByRole("textbox", { name: "Input Your Singlish Text Here." });
  await inputBox.fill("supiri wadak machan!");
  await expect(page.getByText("සුපිරි වැඩක් මචන්!")).toBeVisible();
});
