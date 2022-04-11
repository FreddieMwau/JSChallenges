// Given an array of integers nums and an integer target, return indices of the two numbers that up to target

const sumIndices = (nums, target) => {
    const b4sort = [...nums];
    nums.sort((a, b) => a - b);

    const indices = [];
    let i1, i2;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] > target) return;
        for(let j = i + 1; j < nums.length; j++){
            
            if(nums[i] + nums[j] === target){
                i1 = b4sort.indexOf(nums[i]);
                i2 = b4sort.indexOf(nums[j]);
                
                indices.push([i, j]);
                break;
            }

            // if(nums[j] > target) return indices;
        }
    }

    return indices;
}

console.log(sumIndices([1,2,3,4,5,6,7], 4));
// [0, 1, 2, 3, 4, 5, 6, 7]