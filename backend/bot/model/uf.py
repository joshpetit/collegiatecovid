import requests
from .college import College
from bs4 import BeautifulSoup

class UF(College):
    def __init__(self):
        College.__init__(self, 'University of Florida',
                         'https://coronavirus.ufhealth.org/screen-test-protect-2/about-initiative/testing-dashboard/' ,'Gainesville, Florida')


    def query_site(self):
        res = {}
        res['pos_cases'] = self.get_pos_cases()
        res['total_tests'] = self.get_number_tests()
        res['isolation'] = self.get_iso()
        return res

    def get_pos_cases(self):
        table = self.page.find('table', id='Table--779')
        table = table.findAll('strong')
        pos_cases = table[1].text
        pos_cases = int(pos_cases.replace(',',''))
        return pos_cases

    def get_number_tests(self):
        pass

    def getPosRate(self):
        pass

    def get_iso(self):
        table = self.page.find('table', id='Table--345')
        table = table.findAll('strong')
        iso = table[1].text
        iso = int(iso.replace(',',''))
        return iso

college = UF()
res = college.query_site()
print(res)
