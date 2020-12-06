import requests
import tracemalloc
import asyncio
import re
import xldr
from pyppeteer import launch
from bs4 import BeautifulSoup
from .college import College

tracemalloc.start()

class OSU(College):
    def __init__(self):
        College.__init__(self, 'University of Florida',
                         'https://osu.app.box.com/v/covid-19publicdata',
                         'Gainesville, Florida')


    async def go(self):
        browser = await launch()
        page = await browser.newPage()
        await page.goto(self.site, waitUntil='networkidle2')
        self.page = page
        # await page.screenshot({'path': 'example.png'})
        element = await page.querySelectorAll('button')[1]
        content = await page.evaluate("(e) => e", element)
        print(content)
        await browser.close()

    def query_site(self):
        return {
        }
        pass

    def get_page(self, site: str):
        asyncio.get_event_loop().run_until_complete(self.go())

    def get_number_tests(self):
        return self.testNum

    def get_number_tests(self):
        pass

college = OSU()
res = college.query_site()
print(res)
