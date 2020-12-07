import requests
import re
from .college import College
from bs4 import BeautifulSoup

class Amherst(College):
    def __init__(self):
        College.__init__(self, 'Amherst College',
                         'https://www.amherst.edu/news/covid-19/dashboard/accessible')


    def query_site(self):
        res = {}

        res['total_tests'] = self.get_number_tests()
        res['pos_cases'] = self.get_pos_cases()
        res['pos_rate'] = self.getPosRate()
        res['isolation'] = self.get_iso()
        return res

    def get_pos_cases(self):
        lists = self.page.select('div.field-item ul li')
        tests = lists[8].text
        tot = re.search('\\d+,?\d*',tests)[0]
        return int(tot.replace(',',''))

    def get_number_tests(self):
        lists = self.page.select('div.field-item ul li')
        c = 0
        tests = lists[12].text
        tot = re.search('\\d*,\\d*',tests)[0]
        total = int(tot.replace(',',''))
        return total

    def getPosRate(self):
        lists = self.page.select('div.field-item ul li')
        c = 0
        tests = lists[13].text
        perc = re.search('\\d*\.\\d*%',tests)[0]
        perc = float(perc[0:-1])
        return perc

    def get_iso(self):
        lists = self.page.select('div.field-item ul li')
        c = 0
        tests = lists[20].text
        tot = re.search('\\d+,?\\d*',tests)[0]
        iso = int(tot.replace(',',''))
        return iso

#college = Amherst()
#print(college.query_site())

