class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) return false;

        let map = {};

        for (let s_char of s) {
            map[s_char] = (map[s_char] || 0) + 1;
        }

        for (let t_char of t) {
            if (!map[t_char]) {
                return false;
            }

            map[t_char]--;
        }
        return true;
    }
}
