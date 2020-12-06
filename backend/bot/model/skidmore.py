import requests
from .college import College
from bs4 import BeautifulSoup

class Skidmore(College):
    def __init__(self):
        College.__init__(self, 'Skidmore College',
                         'https://www.skidmore.edu/campus-planning/dashboard.php')


    def query_site(self):
        res = {}

        res['total_tests'] = self.get_number_tests()
        res['pos_cases'] = self.get_pos_cases()
        res['pos_rate'] = self.getPosRate()
        res['isolation'] = self.get_iso()
        return res

    def get_pos_cases(self):
        data = self.page.findAll('div', {'class': 'facts-number'})
        num_tests = data[5].text
        return int(num_tests.replace(',',''))

    def get_number_tests(self):
        data = self.page.findAll('div', {'class': 'facts-number'})
        num_tests = data[-1].text
        return int(num_tests.replace(',',''))

    def getPosRate(self):
        data = self.page.findAll('div', {'class': 'facts-number'})
        rate = data[4].text
        return float(rate[0:-1])

    def get_iso(self):
        data = self.page.findAll('div', {'class': 'facts-number'})
        num_tests = data[6].text
        return int(num_tests.replace(',',''))

#college = Skidmore()
#print(college.query_site())

