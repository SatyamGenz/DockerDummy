from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes in your app

@app.route("/", methods=["GET"])
def home():
    return "Hello, this is the backend server!"

@app.route("/favicon.ico", methods=["GET"])
def favicon():
    # You can return the favicon here, or just return an empty response
    return "", 200

@app.route("/api", methods=["GET"])
def index():
    return jsonify({
        "channel": "The Show",
        "tutorial": "React, Flask, and Docker"
    })

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0")
