import requests
import tracemalloc
import asyncio
import re
from pyppeteer import launch
from bs4 import BeautifulSoup
from .college import College

tracemalloc.start()
class UNL(College):
    def __init__(self):
        College.__init__(self, 'University of Nebraska Lincoln',
                         'https://covid19.unl.edu/unl-covid-19-dashboard',
                         'Lincoln, Nebraska')

    async def go(self):
        browser = await launch()
        page = await browser.newPage()
        await page.goto(self.site)
        self.page = page
        element = await page.querySelector('#total-daily-test-total')
        total_str = await page.evaluate('(e) => e.textContent', element)
        total_tests = int(total_str.replace(',',''))
        self.total_tests = total_tests

        element = await page.querySelector('#recent-week-positivity-rate')
        pos_rate = await page.evaluate('(e) => e.textContent', element)
        pos_rate = float(pos_rate)
        self.pos_rate = pos_rate

        element = await page.querySelector('#total-daily-positive-tests')
        pos_cases = await page.evaluate('(e) => e.textContent', element)
        pos_cases = int(pos_cases.replace(',',''))
        self.pos_cases = pos_cases
        await browser.close()

    def query_site(self):
        return {
            'pos_cases': self.pos_cases,
            'total_tests': self.total_tests,
            'pos_rate': self.pos_rate
        }

    def get_page(self, site: str):
        asyncio.get_event_loop().run_until_complete(self.go())

    def get_number_tests(self):
        pass

college = UNL()
print(college.query_site())
