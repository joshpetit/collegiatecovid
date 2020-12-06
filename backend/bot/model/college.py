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
        self.page = self.getPage(self.site)

    def querySite(self):
        pass

    def getPage(self, site: str):
        request = requests.get(site)
        soup = BeautifulSoup(request.content, 'html.parser')
        return soup;

    def getNumberTests(self):
        pass

    def getPosCases(self):
        pass

class Duke(College):
    def __init__(self):
        College.__init__(self, 'Duke', 'https://coronavirus.duke.edu/covid-testing/', 'Durham, North Carolina')
        self.totalTable = self.page.findAll("figure",
                                     {"class": "wp-block-table cumulative"})[2].tbody


    def querySite(self):
        res = {}
        self.page = self.getPage(self.site)
        numTests = self.getNumberTests()
        res['total_tests'] = numTests
        posCases = self.getPosCases()
        res['total_pos_cases'] = posCases
        return res

    def getNumberTests(self):
        data = self.totalTable.tr.td.nextSibling
        num = data.text
        total = int(num.replace(',',''))
        return total

    def getPosCases(self):
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

    def querySite(self):
        pass

    def getPage(self, site: str):
        asyncio.get_event_loop().run_until_complete(self.go())

    def getNumberTests(self):
        return self.testNum

    def getNumberTests(self):
        pass

college = UIUC()
college.querySite()
