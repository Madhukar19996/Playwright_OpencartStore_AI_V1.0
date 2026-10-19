# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: web/end-to-end-shopping-flow.spec.ts >> End-to-end shopping flow test @master @regression @end-to-end @web
- Location: tests/web/end-to-end-shopping-flow.spec.ts:25:5

# Error details

```
Error: browserType.launch: Executable doesn't exist at /ms-playwright/chromium_headless_shell-1248/chrome-headless-shell-linux64/chrome-headless-shell
╔════════════════════════════════════════════════════════╗
║ Looks like Playwright was just updated to 1.64.1.      ║
║ Please update docker image as well.                    ║
║ -  current: mcr.microsoft.com/playwright:v1.62.0-noble ║
║ - required: mcr.microsoft.com/playwright:v1.64.1-noble ║
║                                                        ║
║ <3 Playwright Team                                     ║
╚════════════════════════════════════════════════════════╝
```