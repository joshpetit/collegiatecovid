import requests
from .college import College
from bs4 import BeautifulSoup

class WCU(College):
    def __init__(self):
        College.__init__(self, 'Western Carolina University',
                         'https://www.wcu.edu/coronavirus/reporting.aspx')
        self.list = self.page.findAll('h3', {'class': 'call-out'})
    def query_site(self):
        res = {}
        ##res['total_tests'] = self.get_number_tests()
        res['pos_cases'] = self.get_pos_cases()
        res['pos_rate'] = self.getPosRate()
        res['isolation'] = self.get_iso()
        return res

    def get_pos_cases(self):
        data = self.list
        student_cases = data[6].text
        faculty_cases = data[7].text
        student_cases = student_cases.replace(',', '')
        faculty_cases = student_cases.replace(',', '')
        return int(student_cases) + int(faculty_cases)

    def getPosRate(self):
        data = self.list
        return float(data[15].text[0:-1])

    def get_iso(self):
        data = self.list
        return int(data[18].text)





school = WCU()
print(school.query_site())


