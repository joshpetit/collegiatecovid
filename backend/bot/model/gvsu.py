import requests
from .college import College
from bs4 import BeautifulSoup

class GVSU(College):
    def __init__(self):
        College.__init__(self, 'Grand Valley State University',
                         'https://www.gvsu.edu/lakerstogether/data-dashboard-37.htm')


    def query_site(self):
        res = {}

        res['total_tests'] = self.get_number_tests()
        res['pos_cases'] = self.get_pos_cases()
        res['pos_rate'] = self.getPosRate()
        res['isolation'] = self.get_iso()
        return res

    def get_pos_cases(self):
        tab = self.page.find('table', id='list_075C4C8D-A3EB-1735-D5AC3CC091608E84')
        data = tab.findAll('td')[8]
        return int(data.text.replace(',',''))

    def get_number_tests(self):
        tab = self.page.find('table', id='list_075C4C8D-A3EB-1735-D5AC3CC091608E84')
        data = tab.findAll('td')[7]
        return int(data.text.replace(',',''))

    def getPosRate(self):
        tab = self.page.find('table', id='list_075C4C8D-A3EB-1735-D5AC3CC091608E84')
        data = tab.findAll('td')[-1]
        return float(data.text)

    def get_iso(self):
        pass

#college = GVSU()
#print(college.query_site())

