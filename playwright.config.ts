import { defineConfig, devices } from "@playwright/test";
import reportingLabs from './reporting-labs.config';

const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36";

export default defineConfig({
  timeout: 30 * 1000,
  testDir: "./tests",
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["list"],
    ['reporting-labs', reportingLabs],
    ["html", { open: "never", outputFolder: "reports" }],
    ["junit", { outputFile: "reports/results.xml" }],
    ["./utils/CustomReporter.ts"],
    ["allure-playwright", { outputFolder: "allure-results" }],
  ],
  use: {
    trace: "on-first-retry",
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    headless: !!process.env.CI,          // headless on CI, headed locally
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    permissions: ["geolocation"],
    userAgent: BROWSER_UA,               // applies to the `request` fixture too
    extraHTTPHeaders: {                  // <- new
      "User-Agent": BROWSER_UA,
      "Accept": "application/json, text/plain, */*",
    },
  },
  grep: /@master/,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});