import pytest
import selenium import webdriver
from selenium.webdriver.chrome.options import Options as chrome options



@putest.fixture
def get_webdriver():
    options = chrome_options