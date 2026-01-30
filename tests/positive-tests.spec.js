import { test, expect } from '@playwright/test';

// Helper function: enter text and check Sinhala appears
async function checkSinhala(page, inputText) {
  await page.goto('https://www.swifttranslator.com/');
  await page.locator('textarea').first().fill(inputText);
  await page.waitForTimeout(1000);
  await expect(page.locator('body')).toContainText('ම');
}

/*POSITIVE FUNCTIONAL TESTS*/

test('Pos_Fun_0001 - simple daily usage sentence', async ({ page }) => {
  await checkSinhala(page, 'mama gedhara yanavaa.');
});

test('Pos_Fun_0002 - interrogative greeting sentence', async ({ page }) => {
  await checkSinhala(page, 'oyata kohomadha?');
});

test('Pos_Fun_0003 - simple daily usage sentence', async ({ page }) => {
  await checkSinhala(page, 'mama office yanavaa.');
});

test('Pos_Fun_0004 - interrogative sentence', async ({ page }) => {
  await checkSinhala(page, 'oyaa gedhara inne dha?');
});

test('Pos_Fun_0005 - imperative command sentence', async ({ page }) => {
  await checkSinhala(page, 'eka poddak balanna.');
});

test('Pos_Fun_0006 - compound sentence', async ({ page }) => {
  await checkSinhala(page, 'mama bath kanavaa saha tea bonavaa.');
});

test('Pos_Fun_0007 - complex sentence', async ({ page }) => {
  await checkSinhala(page, 'oya enna kiyala mama gedhara inne.');
});

test('Pos_Fun_0008 - present tense sentence', async ({ page }) => {
  await checkSinhala(page, 'api dan lecture ahagena inne.');
});

test('Pos_Fun_0009 - past tense sentence', async ({ page }) => {
  await checkSinhala(page, 'eya kalin call ekak gaththa.');
});

test('Pos_Fun_0010 - future tense sentence', async ({ page }) => {
  await checkSinhala(page, 'api heta meeting ekata yamu.');
});

test('Pos_Fun_0011 - negative sentence', async ({ page }) => {
  await checkSinhala(page, 'mata adha office yanna bae.');
});

test('Pos_Fun_0012 - polite request sentence', async ({ page }) => {
  await checkSinhala(page, 'puluvannam mata file eka evanna.');
});

test('Pos_Fun_0013 - informal conversational question', async ({ page }) => {
  await checkSinhala(page, 'hari lassanayi neh?');
});

test('Pos_Fun_0014 - plural pronoun sentence', async ({ page }) => {
  await checkSinhala(page, 'api okkoma class ekata enavaa.');
});

test('Pos_Fun_0015 - mixed Singlish and English sentence', async ({ page }) => {
  await checkSinhala(page, 'mata document tika upload karanna thiyenavaa.');
});

test('Pos_Fun_0016 - sentence containing place name', async ({ page }) => {
  await checkSinhala(page, 'api Colombo valata travel karanavaa.');
});

test('Pos_Fun_0017 - time format sentence', async ({ page }) => {
  await checkSinhala(page, 'class eka 9.00 AM ta patan gannavaa.');
});

test('Pos_Fun_0018 - currency value sentence', async ({ page }) => {
  await checkSinhala(page, 'ticket eka Rs. 1200 k vitarayi.');
});

test('Pos_Fun_0019 - sentence with extra spaces', async ({ page }) => {
  await checkSinhala(page, 'mama   class   yanna   hadhanavaa.');
});

test('Pos_Fun_0020 - multi-line input sentence', async ({ page }) => {
  await checkSinhala(page, 'mama gedhara inne.\noyaa enna hithan inne dha?');
});

test('Pos_Fun_0021 - future plan sentence', async ({ page }) => {
  await checkSinhala(page, 'api next week trip ekak plan karanavaa.');
});

test('Pos_Fun_0022 - sentence with repeated emphasis words', async ({ page }) => {
  await checkSinhala(page, 'eka hari hari lassanayi.');
});

test('Pos_Fun_0023 - long paragraph input', async ({ page }) => {
  await checkSinhala(
    page,
    'api adha university eke lecture ekak thibuna. eka godak watina eka nisa api hamoma hari lassanata ahagena inne. passe api friends ekka cafeteria ekata gihilla lunch kanavaa.'
  );
});

test('Pos_Fun_0024 - informal exclamation', async ({ page }) => {
  await checkSinhala(page, 'ela wadak machan!');
});

