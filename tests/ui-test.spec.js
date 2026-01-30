import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - real-time Sinhala output update while typing', async ({ page }) => {

  // 1. Open the application
  await page.goto('https://www.swifttranslator.com/');

  // 2. Locate the input textarea
  const inputBox = page.locator('textarea').first();

  // 3. Type text slowly to observe real-time behavior
  await inputBox.type('mama', { delay: 300 });

  // 4. Verify Sinhala output appears while typing (UI behavior)
  await expect(page.locator('body')).toContainText('ම');

  // 5. Continue typing to ensure output keeps updating
  await inputBox.type(' gedhara', { delay: 300 });

  // 6. Verify Sinhala output still updates
  await expect(page.locator('body')).toContainText('ග');
});
