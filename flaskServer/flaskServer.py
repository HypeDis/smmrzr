from parseAndSummarizeUrl import summaryFromUrl
from flask import Flask, request, jsonify
import json
import asyncio
app = Flask(__name__)


@app.route("/")
def index():
    return "Index!"


@app.route('/createsummary', methods=['POST'])
def return_json():
    try:
        postDict = json.loads(request.data)
        url = postDict['url']

        percentage = postDict['percentage']
        if not percentage:
            percentage = 50
        try:
            percentage = int(percentage)
        except:
            percentage = 50

        summaryArr = summaryFromUrl(url, percentage)
        return {'content': summaryArr}
    except:
        return {'error': 'could not create summary'}


if __name__ == "__main__":
    app.run(debug=True, port=33507)
