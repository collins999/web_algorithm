```
给定一个仅包含小写字母的字符串，去除字符串中重复的字母，使得每个字母只出现一次。需保证返回结果的字典序最小（要求不能打乱其他字符的相对位置）。

示例 1:

输入: "bcabc"
输出: "abc"
示例 2:

输入: "cbacdcbc"
输出: "acdb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/remove-duplicate-letters
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function(s) {
   var array = [];
   var arrayStr = [];
   array = [...new Set(array)];
   for(var i = 0; i < array.length; i++) {
       var str = array[i];
       if (arrayStr.length) {
           if (str[str.length-1] > str) {
               var temp = str;
               str = str[str.length-1];
               str[str.length-1] = temp;
           }
       } else {
           arrayStr.push(str);
       }
   }
};