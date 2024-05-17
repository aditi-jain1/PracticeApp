import pymysql

class   DatabaseEditor:
    def __init__(self):
        self.connection = pymysql.connect(
            host='database-3.cv2w86es0oma.us-east-2.rds.amazonaws.com',
            user='admin',
            password='2wsxcft6',
            database='users'  # Specify the database here
        )
        self.cursor = self.connection.cursor()

    def addRequest(self, name, phoneNumber, departureTime, departureLocation):
        sql = '''insert into requests(name, phoneNumber, departureTime, departureLocation) values (%s, %s, %s, %s)'''
        values = (name, phoneNumber, departureTime, departureLocation)
        self.cursor.execute(sql, values)
        self.connection.commit()

    def getRequests(self):
        sql = '''select * from requests'''
        self.cursor.execute(sql)
        return self.cursor.fetchall()
    
    def clearRequests(self):
        sql = '''DELETE FROM requests'''
        self.cursor.execute(sql)
        self.connection.commit()