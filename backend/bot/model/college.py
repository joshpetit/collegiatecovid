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

    def get_iso(self):
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
        posCases = self.get_pos_cases()
        iso = self.get_iso()
        res['total_tests'] = numTests
        res['pos_cases'] = posCases
        res['isolation'] = iso
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

    def get_iso(self):
        table = self.page.findAll("figure",{"class": "wp-block-table stats-breakdown"})[-1]
        data = table.tbody.tr.findAll("td")
        num_data = data[3].text
        iso = int(num_data.replace(',',''))
        return iso


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

class CMU(College):
    def __init__(self):
        College.__init__(self, 'Carnegie Mellon University',
                         'https://www.cmu.edu/coronavirus/health-and-wellness/dashboard.html#cumulative-data'
                         , 'Pittsburgh, Pennsylvania')
    def query_site(self):
        return {
            'pos_cases': self.pos_cases
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

        await browser.close()


    def get_page(self, site: str):
        asyncio.get_event_loop().run_until_complete(self.go())

    def get_number_tests(self):
        pass

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

college = CMU()
res = college.query_site()
print(res)
