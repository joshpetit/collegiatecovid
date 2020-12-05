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
    def __init__(self, name, site, location):
        Person.__init__(self, name, site, location)

    def querySite(self):
        pass

