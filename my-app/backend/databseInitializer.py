import pymysql

connection = pymysql.connect(
    host='database-3.cv2w86es0oma.us-east-2.rds.amazonaws.com',
    user='admin',
    password='2wsxcft6',
    port=3306  # Make sure to include the port
)

print("Connected to MySQL database")

# Create a cursor object
cursor = connection.cursor()

print(cursor.execute("select version()"))

data = cursor.fetchall()
print(data)

# Drop the database if it exists
sql = '''DROP DATABASE IF EXISTS users'''
cursor.execute(sql)

# Create the database
sql = '''CREATE DATABASE users'''
cursor.execute(sql)

# Use the database
sql = '''USE users'''
cursor.execute(sql)

# Create the table
sql = '''CREATE TABLE requests (
id INT NOT NULL AUTO_INCREMENT,
name TEXT,
phoneNumber TEXT,
affiliation TEXT,
departureTime TEXT,
startingLocationDescription TEXT,
startingLat TEXT,
startingLong TEXT,
destinationDescription TEXT,
destinationLat TEXT,
destinationLong TEXT,
groupNumber TEXT,
resolved TEXT,
PRIMARY KEY (id)
)'''
print(cursor.execute(sql))

# Show tables
sql = '''SHOW TABLES'''
cursor.execute(sql)
print(cursor.fetchall())

# Insert data
sql = '''INSERT INTO requests (name, phoneNumber, affiliation, departureTime, startingLocationDescription, startingLat, startingLong, destinationDescription, destinationLat, destinationLong, groupNumber, resolved) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)'''
values = ("Maya", "3787823371", "Berkeley", "July 4, 1:15", "HOME", "1.0", "2.0", "AIRPORT", "3.0", "4.0", "-1", "F")
cursor.execute(sql, values)
connection.commit()

# Select data
sql = '''SELECT * FROM requests'''
cursor.execute(sql)
print(cursor.fetchall())

# Close the connection
cursor.close()
connection.close()
