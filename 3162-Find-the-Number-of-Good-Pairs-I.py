class Solution(object):
    def numberOfPairs(self, nums1, nums2, k):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :type k: int
        :rtype: int
        """
        count = 0
        for num1 in nums1:
            for num2 in nums2:
                if num2 * k != 0 and num1 % (num2 * k) == 0:
                    count += 1
        return count