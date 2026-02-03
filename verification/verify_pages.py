
from playwright.sync_api import sync_playwright

def verify_changes():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        # Verify index.html
        page.goto("http://localhost:8080/index.html")
        page.screenshot(path="/home/jules/verification/index.png", full_page=True)
        print("Captured index.png")

        # Verify about.html
        page.goto("http://localhost:8080/about.html")
        page.screenshot(path="/home/jules/verification/about.png", full_page=True)
        print("Captured about.png")

        # Verify programs.html
        page.goto("http://localhost:8080/programs.html")
        page.screenshot(path="/home/jules/verification/programs.png", full_page=True)
        print("Captured programs.png")

        # Verify projects.html
        page.goto("http://localhost:8080/projects.html")
        page.screenshot(path="/home/jules/verification/projects.png", full_page=True)
        print("Captured projects.png")

        # Verify healing-circles.html
        page.goto("http://localhost:8080/healing-circles.html")
        page.screenshot(path="/home/jules/verification/healing_circles.png", full_page=True)
        print("Captured healing_circles.png")

        # Verify media.html
        page.goto("http://localhost:8080/media.html")
        page.screenshot(path="/home/jules/verification/media.png", full_page=True)
        print("Captured media.png")

        browser.close()

if __name__ == "__main__":
    verify_changes()
