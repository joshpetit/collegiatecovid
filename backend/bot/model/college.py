import requests
import tracemalloc
import asyncio
import re
from pyppeteer import launch
from bs4 import BeautifulSoup
tracemalloc.start()
class College:

    def __init__(self, name: str, site: str):
        self.name = name;
        self.site = site;
        self.page = self.get_page(self.site)

    def query_site(self):
        pass

    def get_page(self, site: str):
        request = requests.get(site)
        soup = BeautifulSoup(request.content, 'html.parser')
        return soup;

    def get_number_tests(self):
        pass

    def get_pos_cases(self):
        pass

    def get_iso(self):
        pass

