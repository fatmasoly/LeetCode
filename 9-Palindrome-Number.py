class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        s = str(x)
        s2 = ''
        s2 = s[::-1]
        if s2 == s:
            return True
        else:
            return False

