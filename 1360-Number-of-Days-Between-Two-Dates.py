class Solution(object):
    def daysBetweenDates(self, date1, date2):
        """
        :type date1: str
        :type date2: str
        :rtype: int
        """
        def is_leap_year(year):
            return year % 4 == 0 and (year % 100 != 0 or year % 400 == 0)
        
        def days_in_month(year, month):
            days_in_each_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
            if month == 2 and is_leap_year(year):
                return 29
            return days_in_each_month[month - 1]
        
        def days_from_1900(date):
            year, month, day = map(int, date.split('-'))
            days = 0
            
            for y in range(1900, year):
                days += 366 if is_leap_year(y) else 365
            
            for m in range(1, month):
                days += days_in_month(year, m)
            
            days += day
            
            return days
        
        return abs(days_from_1900(date1) - days_from_1900(date2))
