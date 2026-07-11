const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Desktop Screenshot
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1280, height: 800 });
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: 'designrefs/desktop_view.png', fullPage: true });

  // Mobile Screenshot
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 });
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });

  // Click the hamburger menu to show the dark espresso mobile sidebar
  await mobilePage.click('button:has(.w-6.h-6)'); // Click hamburger menu

  // Wait for the menu animation to complete
  await mobilePage.waitForTimeout(500);

  await mobilePage.screenshot({ path: 'designrefs/mobile_sidebar_view.png' });

  await browser.close();
  console.log("Screenshots captured successfully!");
})();

(async () => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1280, height: 800 });
  await desktopPage.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: 'designrefs/about_desktop_view.png', fullPage: true });
  await browser.close();
})();
