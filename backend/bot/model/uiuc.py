import requests
import tracemalloc
import asyncio
import re
from pyppeteer import launch
from bs4 import BeautifulSoup
from .college import College

tracemalloc.start()

class UIUC(College):
    def __init__(self):
        College.__init__(self, 'University of Illinois at Urbana Champaign',
                         'https://go.illinois.edu/COVIDTestingData',
                         'Urbana-Champaign, Illinois')

    async def go(self):
        browser = await launch()
        page = await browser.newPage()
        await page.goto(self.site, waitUntil='networkidle2')
        self.page = page
        # await page.screenshot({'path': 'example.png'})
        content = await page.evaluate('document.body.textContent', force_expr=True)
        testsData = re.findall("\\d*,\\d*", content)[1]
        testNum = int(testsData.replace(',',''))
        self.testNum = testNum
        await browser.close()

    def query_site(self):
        return {
            'total_tests': self.testNum
        }
        pass

    def get_page(self, site: str):
        asyncio.get_event_loop().run_until_complete(self.go())

    def get_number_tests(self):
        return self.testNum

    def get_number_tests(self):
        pass


# college = UIUC()
# print(college.query_site())

