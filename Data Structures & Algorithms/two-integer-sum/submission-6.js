class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};

        for (let i = 0; i < nums.length; i++) {
            map[nums[i]] = i;
        }

        let neededElem;
        for (let i = 0; i <= nums.length; i++) {
            neededElem = target - nums[i];
            if (map[neededElem] !== undefined && map[neededElem] !== i) {
                return [map[neededElem], i];
            }
        }
    }
}
