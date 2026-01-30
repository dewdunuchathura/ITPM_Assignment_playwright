
   import { test, expect } from '@playwright/test';
   
   // Helper function: enter text and check Sinhala appears
   async function checkSinhala(page, inputText) {
     await page.goto('https://www.swifttranslator.com/');
     await page.locator('textarea').first().fill(inputText);
     await page.waitForTimeout(1000);
     await expect(page.locator('body')).toContainText('ම');
   }

test('Neg_Fun_0001 - input with no spaces between words', async ({ page }) => {
  await checkSinhala(page, 'mamaofficeyanavaa');
});

test('Neg_Fun_0002 - heavy spelling mistakes', async ({ page }) => {
  await checkSinhala(page, 'mam offce ynav');
});

test('Neg_Fun_0003 - mixed slang and spelling errors', async ({ page }) => {
  await checkSinhala(page, 'adoo mam offce ynne na bn');
});

test('Neg_Fun_0004 - incorrect word order sentence', async ({ page }) => {
  await checkSinhala(page, 'mama yanava office');
});

test('Neg_Fun_0005 - incorrect tense construction', async ({ page }) => {
  await checkSinhala(page, 'mama iiyee yanna');
});

test('Neg_Fun_0006 - repeated unnecessary characters', async ({ page }) => {
  await checkSinhala(page, 'mamaaaa officeeee yanavaaa');
});

test('Neg_Fun_0007 - mixed English dominant sentence', async ({ page }) => {
  await checkSinhala(page, 'mam office yanna late because traffic heavy');
});

test('Neg_Fun_0008 - broken multi-line input', async ({ page }) => {
  await checkSinhala(page, 'mama gedhara\n\nyanavaa\n\nadha');
});

test('Neg_Fun_0009 - numeric noise in sentence', async ({ page }) => {
  await checkSinhala(page, 'mama 123 office yanavaa');
});

test('Neg_Fun_0010 - unsupported chat shorthand', async ({ page }) => {
  await checkSinhala(page, 'u r ok?');
});
