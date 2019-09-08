from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
import json
import os
import clusters
import test
import badWordsFrequency
# //https://scotch.io/bar-talk/processing-incoming-request-data-in-flask
# https://stackoverflow.com/questions/52033852/python-flask-how-to-convert-a-dictionary-object-to-json

# init app
app = Flask(__name__)


# routes
@app.route('/keywords', methods=['POST', 'GET'])
def get():
    req = request.json
    print(req)
    print()

    return jsonify({"response": clusters.getWords(req)})


@app.route('/badWords', methods=['POST', 'GET'])
def getBadWords():
    req = request.json
    print(req)
    print()

    return jsonify({"response": badWordsFrequency.getBadWords(req)})


# run server
if __name__ == '__main__':
    app.run(debug=True)
