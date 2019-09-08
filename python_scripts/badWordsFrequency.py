import webbrowser
from urllib.request import urlopen as uReq
import requests
from collections import Counter
from bs4 import BeautifulSoup
from bad_words_list import bad_words
import csv
import json
from collections import OrderedDict
from operator import itemgetter
# as soup

full_word_list = []
d = {"results": []}


def getBadWords(urls):
    content_array = []

    for i in urls:
        post = i
        headers = {'User-Agent': 'Mozilla/5.0'}
        page = requests.get(post)
        content = BeautifulSoup(page.text, "html.parser")
        ingredients = [ingredient.get_text()
                       for ingredient in content.select('p')]
        for i in ingredients:
            words = i.split()

            content_array.extend(words)
    final_list = [x for x in content_array if x in bad_words]
    print("finalwords")
    full_word_list.extend(final_list)
    cnter = Counter(full_word_list)
    print(cnter)
    cnter = cnter.most_common()
    # print("BAD WORDS")
    # print(cnter)
    return cnter
