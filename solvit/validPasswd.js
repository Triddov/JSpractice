class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isNotPalindrome(s) {

        let normalStr = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "")

        if (normalStr.length % 2 !== 0) {
            const indexToRemove = Math.floor(normalStr.length/2)
            normalStr = normalStr.slice(0, indexToRemove) + normalStr.slice(indexToRemove+1)
        }

        return !(normalStr.slice(0, normalStr.length / 2) === normalStr.slice(normalStr.length / 2).split('').reverse().join(''))
    }

    /**
     * @param {string} password
     * @return {boolean}
     */
    isValidPassword(password) {

        const isEnglish = /^[a-zA-Z0-9_#%]+$/.test(password)
        const minOneNum = /[0-9]/.test(password)
        const minOneSymb = /[_#%]/.test(password)
        const minOneBigLetter = /[A-Z]/.test(password)
        const minLength = password.length >= 8
        const isPal = this.isNotPalindrome(password)

        const mainCondition = [isEnglish, minOneNum, minOneSymb, minLength, minOneBigLetter, isPal]

        return mainCondition.every(Boolean)
    }
}