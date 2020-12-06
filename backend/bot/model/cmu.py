import requests
import tracemalloc
import asyncio
import re
from pyppeteer import launch
from bs4 import BeautifulSoup
from .college import College

tracemalloc.start()
class CMU(College):
    def __init__(self):
        College.__init__(self, 'Carnegie Mellon University',
                         'https://www.cmu.edu/coronavirus/health-and-wellness/dashboard.html#cumulative-data'
                         , 'Pittsburgh, Pennsylvania')
    def query_site(self):
        return {
            'pos_cases': self.pos_cases,
            'pos_rate': self.pos_rate
        }

    async def go(self):
        browser = await launch()
        page = await browser.newPage()
        await page.goto(self.site)
        self.page = page
        element = await page.querySelector('.total-on-campus')
        toc = await page.evaluate('(e) => e.textContent', element)
        cases_campus = int(toc)

        element = await page.querySelector('.total-off-campus')
        noc = await page.evaluate('(e) => e.textContent', element)
        off_campus = int(noc)
        total = cases_campus + off_campus
        self.pos_cases = total

        element = await page.querySelector('#testing')
        noc = await page.evaluate(
            '(e) => e.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.textContent',
            element)
        pos_rate = float(noc[0:-1])
        self.pos_rate = pos_rate
        await browser.close()


    def get_page(self, site: str):
        asyncio.get_event_loop().run_until_complete(self.go())

    def get_number_tests(self):
        pass

# college = CMU()
# res = college.query_site()
# print(res)

