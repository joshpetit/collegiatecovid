import requests
from .college import College
from bs4 import BeautifulSoup

class Harvard(College):
    def __init__(self):
        College.__init__(self, 'Harvard',
                         'https://www.harvard.edu/coronavirus/harvard-university-wide-covid-19-testing-dashboard')
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
        return res

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

# college = Harvard()
# print(college.query_site())

