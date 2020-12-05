import requests
from bs4 import BeautifulSoup

class College:

    def __init__(self, name: str, site: str, location: str):
        self.name = name;
        self.site = site;
        self.location = location;

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
        self.page = self.getPage(self.site)
        self.totalTable = self.page .findAll("figure",
                                     {"class": "wp-block-table cumulative"})[2].tbody

    def querySite(self):
        res = {}
        self.page = self.getPage(self.site)
        numTests = self.getNumberTests()
        res['total_tests'] = numTests
        posCases = self.getPosCases()
        res['total_pos_cases'] = posCases
        print(res)

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


college = Duke()
college.querySite()
