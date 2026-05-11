from playwright.sync_api import sync_playwright

def capture(url, output_path, viewport_width=1920, viewport_height=1080):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': viewport_width, 'height': viewport_height})
        page.goto(url, wait_until='networkidle')
        page.screenshot(path=output_path, full_page=False)
        browser.close()

url = "https://www.iptvupg.com/"

# Desktop 1920x1080
capture(url, "/Users/mac/iptvpro/screenshots/desktop_1920.png", 1920, 1080)
print("Desktop 1920x1080 done")

# Laptop 1366x768
capture(url, "/Users/mac/iptvpro/screenshots/laptop_1366.png", 1366, 768)
print("Laptop 1366x768 done")

# Tablet 768x1024
capture(url, "/Users/mac/iptvpro/screenshots/tablet_768.png", 768, 1024)
print("Tablet 768x1024 done")

# Mobile 375x812
capture(url, "/Users/mac/iptvpro/screenshots/mobile_375.png", 375, 812)
print("Mobile 375x812 done")
