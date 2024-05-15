from flask import Flask, jsonify
import pymysql

app = Flask(__name__)

@app.route('/', methods=['GET'])
def get_articles():
    # Establish connection to MySQL database
    connection = pymysql.connect(
        host='database-3.cv2w86es0oma.us-east-2.rds.amazonaws.com',
        user='admin',
        password='2wsxcft6',
        database = 'users'
    )
    print("Connected to MySQL database")

    # Create a cursor object
    cursor = connection.cursor()

    # Execute SQL query to select data from the 'person' table
    

    cursor.execute("SELECT * FROM person")

    # Fetch all rows from the result set
    rows = cursor.fetchall()

    # Convert rows to a list of strings
    result = [str(row) for row in rows]

    # Return JSON response containing the list of strings
    return jsonify({"data": result})

if __name__ == '__main__':
    app.run(debug=True)
