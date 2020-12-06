import requests
from .college import College
from bs4 import BeautifulSoup

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
        pos_rate = self.get_pos_rate()
        iso = self.get_iso()
        res['total_tests'] = numTests
        res['pos_cases'] = posCases
        res['isolation'] = iso
        res['pos_rate'] = pos_rate
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

    def get_pos_rate(self):
        table = self.page.findAll("figure", {"class": "wp-block-table stats-breakdown"})[-1]
        data = table.tbody.tr.findAll("td")
        num_data = data[1].text
        num_tests = int(num_data.replace(',',''))
        num_pos_data = data[2].text
        num_pos = int(num_pos_data)
        rate = round((num_pos/num_tests) * 100, 2)
        return rate

#college = Duke()
#college.query_site()
#print(college.query_site())
