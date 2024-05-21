
class Time():
    def __init__(self, isoString):
        self.isoString = isoString
        self.year = int(isoString[0:4])
        self.month = int(isoString[5:7])
        self.day = int(isoString[8:10])
        
        self.hour = int(isoString[11:13])
        self.minute = int(isoString[14:16])

    def getYear(self):
        return self.year
    
    def getMonth(self):
        return self.month
    
    def getDay(self):
        return self.day
    
    def getHour(self):
        return self.hour
    
    def getMinutre(self):
        return self.minute


