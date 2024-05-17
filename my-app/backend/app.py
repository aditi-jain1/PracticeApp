from flask import Flask, jsonify
import pymysql
from databaseEditor import DatabaseEditor

app = Flask(__name__)

@app.route('/requests', methods=['GET'])
def get_requests():
    # Establish connection to MySQL database
    
    
    editor = DatabaseEditor()


    editor.clearRequests()
    editor.addRequest('maya', 123456789, 11, 'OAK')
    rows = editor.getRequests()

    # Convert rows to a list of strings
    result = [str(row) for row in rows]

    #Return JSON response containing the list of strings
    return jsonify({"data": result})
    '''
    return jsonify({"requests": ["r1", "r2"]})
    '''
    

if __name__ == '__main__':
    app.run(host = '192.168.86.197', port = 5000, debug=True)
