from playwright.sync_api import sync_playwright
import os

def diagnose():
    cwd = os.getcwd()
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(viewport={'width': 1280, 'height': 800})

        for page_name in ["index.html", "about.html"]:
            page = context.new_page()
            url = f"file://{cwd}/{page_name}"
            print(f"--- Diagnosing {page_name} ---")

            page.on("console", lambda msg: print(f"[{page_name}] Console {msg.type}: {msg.text}"))
            page.on("pageerror", lambda exc: print(f"[{page_name}] JS Error: {exc}"))

            try:
                page.goto(url)
                page.wait_for_load_state("networkidle")
                page.screenshot(path=f"debug_{page_name.replace('.html', '')}.png", full_page=True)
                print(f"Screenshot saved to debug_{page_name.replace('.html', '')}.png")
            except Exception as e:
                print(f"Error loading {page_name}: {e}")

            page.close()
        browser.close()

if __name__ == "__main__":
    diagnose()
