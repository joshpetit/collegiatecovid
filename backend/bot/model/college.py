import requests
from bs4 import BeautifulSoup

class College:

    def __init__(self, name: str, site: str, location: str):
        self.name = name;
        self.site = site;
        self.location = location;

    def querySite(self):
        pass


class Duke(College):
    def __init__(self):
        College.__init__(self, 'Duke', 'https://coronavirus.duke.edu/covid-testing/', 'Durham, North Carolina')

    def querySite(self):
        getPage(self.site)

def getPage(site: str):
    request = requests.get(site)
    soup = BeautifulSoup(request.content, 'html.parser')



college = Duke()
college.querySite()
