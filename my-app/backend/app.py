from flask import Flask, jsonify
import pymysql
from databaseEditor import DatabaseEditor
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
cors = CORS(app, resource={
    r"/*":{
        "origins":"*"
    }
})

@app.route('/requests', methods=['GET'])
def get_requests():
    # Establish connection to MySQL database
    editor = DatabaseEditor()
    rows = editor.getRequests()

    # Convert rows to a list of strings
    result = [str(row) for row in rows]

    # Return JSON response containing the list of strings
    response = jsonify({"data": result})

    # Handle CORS errors
    response.headers.add("Access-Control-Allow-Origin", "*")
    return response
   
    

if __name__ == '__main__':
    app.run(host = '192.168.86.197', port = 5000, debug=True)
