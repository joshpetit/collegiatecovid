import requests
from bs4 import BeautifulSoup
from .college import College


class Yale(College):
    def __init__(self):
        College.__init__(self, 'Yale', 'https://covid19.yale.edu/yale-statistics/yale-covid-19-statistics-data-tables#yale-positive-cases-data')

    def query_site(self):
        res = {}
        res['pos_cases'] = self.get_pos_cases()
        res['pos_rate'] = self.get_pos_rate()
        return res

    def get_pos_cases(self):
        table = self.page.select('tbody tr td')
        pos_cases = table[0].text
        return int(pos_cases.replace(',',''))

    def get_pos_rate(self):
        table = self.page.select('td')
        pos_rate = table[19].text
        return float(pos_rate[0:-1])

college = Yale()
print(college.query_site())

