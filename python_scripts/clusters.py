import webbrowser
from urllib.request import urlopen as uReq
import requests
from collections import Counter
from bs4 import BeautifulSoup
from filler_words import filler_words
import csv
import json
from collections import OrderedDict
from operator import itemgetter
# as soup


# grabs each product
full_word_list = []
d = {"results": []}


def getWords(urls):
    content_array = []
    urls = urls

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
    final_list = [x for x in content_array if x not in filler_words]

    full_word_list.extend(final_list)

    cnter = Counter(full_word_list)
    cnter = cnter.most_common()
    # for k, v in cnter.items():
    #     d["results"].append({"word": k, "number": v})
    print(type(cnter))
    cnter = cnter[:15]
    print(cnter)
    return cnter
    # d = json.dumps(d)
    # print(d)
    # print("type")
    # print(type(d))
    # with open('content_data.csv', 'w', encoding="utf-8-sig") as csvfile:
    #     fieldnames = ['word', 'number']
    #     writer = csv.writer(csvfile)
    #     writer.writerow(fieldnames)
    #     for key, value in cnter.items():
    #         writer.writerow([key] + [value])
