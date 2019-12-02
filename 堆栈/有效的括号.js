```
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

```
// 求解1
// 思路：找到最内层的括号，消除，重复这个过程，如果存在不能消除的字符，说明字符串无效
// 缺点：效率慢，内存占用过高
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    while(s.length) {
        var temp = s;
        s = s.replace('[]', '');
        s = s.replace('()', '');
        s = s.replace('{}', '');
        if (s === temp) {
            return false;
        }
    }
    return true;
}


// 求解2
// 思路：遍历时将左括号放入数组，当遇到第一个右括号时，需要和数组的最后一个括号匹配成对。否则是无效的。匹配完成就在数组中删除此元素。
// 这里删除元素的意义和第一种成对的清楚元素是一个道理。最后判断字符串的长度，如果为0，表示全部匹配，此字符串有效，否则无效。
var isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }
    var map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    var leftArray = [];
    for(var ch of s) {
        if (ch in map) {
            // 如果是左括号，就放入左边的数组
            leftArray.push(ch);
        } else {
            // 如果是右括号，就要和左数组的最后一个元素比较，是否成对
            if(ch !== map[leftArray.pop()]) {
                return false;
            }
        }
    }
    return !leftArray.length;
}

// 备注字符串中还包含其他字符，那么需要在处理之前先将字符中的括号和字符进行剥离
