class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let result = {};

        for (let num of nums) {
            result[num] = (result[num] || 0) + 1;
        }

        for (let num of nums) {
            if (result[num] > 1) {
                return true;
            }
        }

        return false
    }
}
