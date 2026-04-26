import { test, expect } from '@playwright/test';

test.describe('experience', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('#experience', { state: 'visible' });
  });

  test('lists current role', async ({ page }) => {
    const section = page.locator('#experience');
    await expect(section).toContainText('Speedy Freight');
    await expect(section).toContainText('Senior QA');
  });

  test('current badge is visible on Speedy Freight', async ({ page }) => {
    const currentBadge = page.locator('#experience .current-badge').first();
    await expect(currentBadge).toBeVisible();
    await expect(currentBadge).toContainText('Current');
  });

  test('shows all companies in career history', async ({ page }) => {
    const section = page.locator('#experience');
    await expect(section).toContainText('Speedy Freight');
    await expect(section).toContainText('Trinny London');
    await expect(section).toContainText('DROPS');
    await expect(section).toContainText('FUTRLI');
  });

  test('shows correct role progression at Trinny London', async ({ page }) => {
    const section = page.locator('#experience');
    await expect(section).toContainText('Lead QA Engineer');
    await expect(section).toContainText('QA Engineer');
    await expect(section).toContainText('April 2023');
    await expect(section).toContainText('June 2022');
  });

  test('shows key achievement bullet points', async ({ page }) => {
    const section = page.locator('#experience');
    await expect(section).toContainText('order processing time');
    await expect(section).toContainText('warehouse migration');
  });

  test('section heading is visible and correct', async ({ page }) => {
    const heading = page.locator('#experience h2');
    await expect(heading).toBeVisible();
    await expect(heading).toContainText('10 Years of QA');
  });
});

test.describe('navigation', () => {
  test('nav links are present', async ({ page }) => {
    await page.goto('/');
    const nav = page.getByRole('navigation').filter({ hasText: 'AH.' });
    await expect(nav).toContainText('Experience');
    await expect(nav).toContainText('Skills');
    await expect(nav).toContainText('Achievements');
    await expect(nav).toContainText('Live Status');
  });

  test('experience nav link scrolls to section', async ({ page }) => {
    await page.goto('/');
    await page.click('nav a[href="#experience"]');
    const section = page.locator('#experience');
    await expect(section).toBeInViewport({ ratio: 0.1 });
  });
});

test.describe('skills', () => {
  test('renders key automation tools', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#skills');
    await expect(section).toContainText('Playwright');
    await expect(section).toContainText('Cypress');
    await expect(section).toContainText('Selenium');
    await expect(section).toContainText('TypeScript');
  });
});

test.describe('achievements', () => {
  test('impact stats are visible', async ({ page }) => {
    await page.goto('/');
    const section = page.locator('#achievements');
    await expect(section).toContainText('8h → 2h');
    await expect(section).toContainText('Order Processing Time');
    await expect(section).toContainText('4');
    await expect(section).toContainText('QA Engineers Mentored');
  });
});
