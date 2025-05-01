class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    fib(n) {

        const fibArray = [0,1]

        for (let i = 2; i <= n; i++) {
            const nextFib = fibArray[i-2] + fibArray[i-1]
            fibArray.push(nextFib)
        }

        return fibArray[n]

    }
}