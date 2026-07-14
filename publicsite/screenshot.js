const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Desktop Screenshots
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1280, height: 800 });

  await desktopPage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: 'designrefs/home_desktop_view.png', fullPage: true });

  await desktopPage.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: 'designrefs/about_desktop_view.png', fullPage: true });

  // Mobile Screenshots (Full Page)
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 });

  await mobilePage.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: 'designrefs/home_mobile_view.png', fullPage: true });

  // Click the hamburger menu to show the dark espresso mobile sidebar
  await mobilePage.click('button:has(.w-6.h-6)'); // Click hamburger menu
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({ path: 'designrefs/home_mobile_sidebar_view.png' });

  // Close the sidebar to proceed
  await mobilePage.click('button:has(.w-5.h-5)'); // Click 'X' to close menu
  await mobilePage.waitForTimeout(500);

  await mobilePage.goto('http://localhost:3000/about', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: 'designrefs/about_mobile_view.png', fullPage: true });

  await browser.close();
  console.log("Screenshots captured successfully!");
})();

(async () => {
  const { chromium } = require('playwright');
  const browser = await chromium.launch();
  const context = await browser.newContext();

  // Desktop
  const desktopPage = await context.newPage();
  await desktopPage.setViewportSize({ width: 1280, height: 800 });
  await desktopPage.goto('http://localhost:3000/programs', { waitUntil: 'networkidle' });
  await desktopPage.screenshot({ path: 'designrefs/programs_desktop_view.png', fullPage: true });

  // Mobile
  const mobilePage = await context.newPage();
  await mobilePage.setViewportSize({ width: 375, height: 812 });
  await mobilePage.goto('http://localhost:3000/programs', { waitUntil: 'networkidle' });
  await mobilePage.screenshot({ path: 'designrefs/programs_mobile_view.png', fullPage: true });

  await browser.close();
})();
