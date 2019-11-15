/**
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。
 * 如果没有任何一种硬币组合能组成总金额，返回 -1
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/coin-change
 * @param {number[]*} coins 
 * @param {number*} amount 
 * @return {number}
 */
var coinChange = function (coins, amount) {
    var dp = [];
    dp.length = amount + 1;
    for (var i = 0; i <= amount; i++) {
        dp[i] = -1; //初始化都为-1
    }
    dp[0] = 0;
    for (var i = 1; i <= amount; i++) {
        for (var j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0 && dp[i - coins[j]] != -1) {
                if (dp[i] == -1 || dp[i] > dp[i - coins[j]] + 1) {
                    dp[i] = dp[i - coins[j]] + 1;
                }
            }
        }

    }
    return dp[amount];
}
console.log(coinChange([5, 2, 1], 11));