
/*1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 
Example 1:
 
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:
 
Input: nums = [0]
Output: [0]
*/

let nums = [0, 1, 0, 3, 12];
size = nums.length;

//let a = 0;
let b = 0;
let c = 0;
moveZeros(nums);
console.log(nums);
function moveZeros(nums) {
    if (b == 0 || b == 1) {
        console.log(nums)
    }

    for (let i = 0; i < size; i++) {
        //while (b<size) {
        if (nums[b] != 0) {
            let temp = nums[b]
            nums[b] = nums[c]
            nums[c] = temp;
            b++;
            c++;
            //return nums[c];
            //console.log (nums)
        } else {
            b++;
        }
        //console.log(nums[c])
    }
    //console.log (nums)
    return nums;
}