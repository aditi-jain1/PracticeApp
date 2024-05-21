import math

from time import Time

import pymysql

class MatchingAlgorithm():
    def __init__(self):
        self.connection = pymysql.connect(
            host='database-3.cv2w86es0oma.us-east-2.rds.amazonaws.com',
            user='admin',
            password='2wsxcft6',
            database='users'  # Specify the database here
        )
        self.cursor = self.connection.cursor()       


    def getDistance(self, lat1, long1, lat2, long2):
        if (lat1 == "None" or long1 == "None" or lat2 == "None" or long2 == "None"):
            return 10000

        lat1 = float(lat1)
        long1 = float(long1)
        lat2 = float(lat2)
        long2 = float(long2)
            # distance between latitudes
        # and longitudes
        dLat = (lat2 - lat1) * math.pi / 180.0
        dLon = (long2 - long1) * math.pi / 180.0
    
        # convert to radians
        lat1 = (lat1) * math.pi / 180.0
        lat2 = (lat2) * math.pi / 180.0
    
        # apply formulae
        a = (pow(math.sin(dLat / 2), 2) +
            pow(math.sin(dLon / 2), 2) *
                math.cos(lat1) * math.cos(lat2));
        rad = 6371
        c = 2 * math.asin(math.sqrt(a))

        return rad * c
    
    def distanceBetweenTwoStartingLocs(self, id1, id2):
        sql = f"SELECT startingLat FROM requests WHERE id = {id1}"
        self.cursor.execute(sql)
        lat1 = self.cursor.fetchone()[0]

        sql = f"SELECT startingLong FROM requests WHERE id = {id1}"
        self.cursor.execute(sql)
        long1 = self.cursor.fetchone()[0]

        sql = f"SELECT startingLat FROM requests WHERE id = {id2}"
        self.cursor.execute(sql)
        lat2 = self.cursor.fetchone()[0]

        sql = f"SELECT startingLong FROM requests WHERE id = {id2}"
        self.cursor.execute(sql)
        long2 = self.cursor.fetchone()[0]

        return self.getDistance(lat1, long1, lat2, long2)
    
    def distanceBetweenTwoDestinations(self, id1, id2):
        sql = f"SELECT destinationLat FROM requests WHERE id = {id1}"
        self.cursor.execute(sql)
        lat1 = self.cursor.fetchone()[0]

        sql = f"SELECT destinationLong FROM requests WHERE id = {id1}"
        self.cursor.execute(sql)
        long1 = self.cursor.fetchone()[0]

        sql = f"SELECT destinationLat FROM requests WHERE id = {id2}"
        self.cursor.execute(sql)
        lat2 = self.cursor.fetchone()[0]

        sql = f"SELECT destinationLong FROM requests WHERE id = {id2}"
        self.cursor.execute(sql)
        long2 = self.cursor.fetchone()[0]

        return self.getDistance(lat1, long1, lat2, long2)
    
    def getTimeDifference(self, id1, id2):
        sql = f"SELECT departureTime FROM requests WHERE id = {id1}"
        self.cursor.execute(sql)
        id1 = self.cursor.fetchone()[0]
        time1 = Time(id1)

        sql = f"SELECT departureTime FROM requests WHERE id = {id1}"
        self.cursor.execute(sql)
        id1 = self.cursor.fetchone()[0]
        time2 = Time(id1)
        monthDays = {1:, 2:, 3:, 4: 5: }

        yearDiff = abs(time1.getYear() - time2.getYear())
        monthDiff = abs(time1.getMonth() - time2.getMonth())
        dayDiff = abs(time1.get)



    

    










