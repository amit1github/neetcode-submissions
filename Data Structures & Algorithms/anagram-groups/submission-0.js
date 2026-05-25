class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if(strs.length < 2) return [strs];
        
        let map = {};
        for(let i=0; i<strs.length;i++) {
            let sortedElem = strs[i].split("").sort().join("");

            map[sortedElem] = (map[sortedElem] || [])
            map[sortedElem].push(strs[i])
        }

        return Object.values(map).sort((a,b) => a.length - b.length)
    }
}
