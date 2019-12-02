```
给定两个数组，编写一个函数来计算它们的交集。

示例 1:

输入: nums1 = [1,2,2,1], nums2 = [2,2]
输出: [2]
示例 2:

输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
输出: [9,4]
说明:

输出结果中的每个元素一定是唯一的。
我们可以不考虑输出结果的顺序。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/intersection-of-two-arrays
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
```

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var array1 = [...new Set(nums1)],
        array2 = [...new Set(nums2)];
        array = [];
    for(var i = 0; i < array2.length; i++) {
        var value = array2[i];
        if (array1.includes(value)) {
            array.push(value);
        }
    }
    return array;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var array1 = new Set(nums1),
        array2 = new Set(nums2);
        array = [];
    array1.forEach((item, index) => {
        if (array2.has(item)) {
            array.push(item);
        }
    });
    return array;
};
// 效率低，内存占用大