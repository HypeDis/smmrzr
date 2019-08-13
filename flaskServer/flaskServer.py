from flask import Flask, request, jsonify
app = Flask(__name__)


@app.route("/")
def index():
    return "Index!"


@app.route('/test', methods=['POST'])
def return_json():
    print('post data', request.data)
    return jsonify({'content': 'parsed'})


if __name__ == "__main__":
    app.run()
