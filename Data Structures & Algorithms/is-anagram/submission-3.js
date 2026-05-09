class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const reverseS = t.split('').sort().join('')
        const reverseT = s.split('').sort().join('');
        if (reverseS === reverseT) {
            return true
        } else {
            return false
        }
    }
}
