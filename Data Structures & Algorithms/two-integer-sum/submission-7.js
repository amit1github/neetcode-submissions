class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let map = {};
        
        let neededElem;
        for (let i = 0; i < nums.length; i++) {
            neededElem = target - nums[i];
            if(map[neededElem] !== undefined){
                return [map[neededElem], i]
            }

            map[nums[i]] = i 
        }
    }
}
