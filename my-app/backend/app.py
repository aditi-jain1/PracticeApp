from flask import Flask, request, jsonify
import pymysql
from databaseEditor import DatabaseEditor
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "*"}})

@app.route('/requests', methods=['GET'])
def get_requests():
    editor = DatabaseEditor()
    rows = editor.getRequests()
    result = [str(row) for row in rows]
    response = jsonify({"data": result})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

@app.route('/addRequest', methods=['POST'])
def add_request():
    data = request.get_json()
    name = data.get('name')
    phoneNumber = data.get('phoneNumber')
    departureTime = data.get('departureTime')
    affiliation = "Berkeley"
    startingLocationDescription = data.get('startingLocationDescription')
    startingLat = data.get('startingLat')
    startingLong = data.get('startingLong')
    destinationDescription = data.get('destinationDescription')
    destinationLat = data.get('destinationLat')
    destinationLong = data.get('destinationLong')
    groupNumber = '-1'
    resolved = 'F'


    editor = DatabaseEditor()
    result = editor.addRequest(name, phoneNumber, affiliation, departureTime, startingLocationDescription, startingLat, startingLong, destinationDescription, destinationLat, destinationLong, groupNumber, resolved)

    response = jsonify({"result": result})
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response

if __name__ == '__main__':
    app.run(host='192.168.86.197', port=5000, debug=True)
