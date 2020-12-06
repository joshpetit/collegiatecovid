import requests
import tracemalloc
import asyncio
import re
from pyppeteer import launch
from bs4 import BeautifulSoup
tracemalloc.start()
class College:

    def __init__(self, name: str, site: str, location: str):
        self.name = name;
        self.site = site;
        self.location = location;
        self.page = self.get_page(self.site)

    def query_site(self):
        pass

    def get_page(self, site: str):
        request = requests.get(site)
        soup = BeautifulSoup(request.content, 'html.parser')
        return soup;

    def get_number_tests(self):
        pass

    def get_pos_cases(self):
        pass

class Duke(College):
    def __init__(self):
        College.__init__(self, 'Duke', 'https://coronavirus.duke.edu/covid-testing/', 'Durham, North Carolina')
        self.totalTable = self.page.findAll("figure",
                                     {"class": "wp-block-table cumulative"})[2].tbody


    def query_site(self):
        res = {}
        self.page = self.get_page(self.site)
        numTests = self.get_number_tests()
        res['total_tests'] = numTests
        posCases = self.get_pos_cases()
        res['total_pos_cases'] = posCases
        return res

    def get_number_tests(self):
        data = self.totalTable.tr.td.nextSibling
        num = data.text
        total = int(num.replace(',',''))
        return total

    def get_pos_cases(self):
        data = self.totalTable.tr.td.nextSibling.nextSibling
        num = data.text
        total = int(num.replace(',',''))
        return total

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
        print(content)
        testsData = re.findall("\\d*,\\d*", content)[1]
        testNum = int(testsData.replace(',',''))
        self.testNum = testNum
        return testsNum
        await browser.close()

    def query_site(self):
        pass

    def get_page(self, site: str):
        asyncio.get_event_loop().run_until_complete(self.go())

    def get_number_tests(self):
        return self.testNum

    def get_number_tests(self):
        pass

class Harvard(College):
    def __init__(self):
        College.__init__(self, 'Harvard',
                         'https://www.harvard.edu/coronavirus/harvard-university-wide-covid-19-testing-dashboard' ,'Cambridge, Massachussetts')
        self.list = self.page.select('div.card__text h1')


    def query_site(self):
        res = {}
        tests = self.get_number_tests()
        posCases = self.get_pos_cases()
        posRate = self.getPosRate()
        iso = self.get_iso()
        res['total_tests'] = tests
        res['pos_cases'] = posCases
        res['pos_rate'] = posRate
        res['isolation'] = iso
        print(res)

    def get_pos_cases(self):
        num = self.list[9].text
        return int(num.replace(',',''))

    def get_number_tests(self):
        num = self.list[13].text
        total = int(num.replace(',',''))
        return total

    def getPosRate(self):
        num = self.list[2].text
        perc = float(num[0:-2])
        return perc

    def get_iso(self):
        num = self.list[3].text
        iso = int(num[0:-1])
        return iso

college = Duke()
res = college.query_site()
print(res)

college = Harvard()
res = college.query_site()
print(res)
