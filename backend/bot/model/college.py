import requests
from bs4 import BeautifulSoup

class College:

    def __init__(self, name: str, site: str, location: str) :
        self.name = name;
        self.site = site;
        self.location = location;
