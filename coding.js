// const height = [4,2,0,3,2,5]

// -----------------------------------------------------------
// var trap = function(height) {
// let left = 0;
//   let right = height.length - 1;

//   let leftMax = height[left];
//   let rightMax = height[right];

//   let trapped = 0;

//   while (left < right) {
//     if (height[left] < height[right]) {
//       // increment left
//       if (leftMax > height[left]) {
//         trapped += leftMax - height[left];
//       }
//       leftMax = Math.max(leftMax, height[left])
//       left++;
//     } else {
//       // decrease right
//       if (rightMax > height[right]) {
//         trapped += rightMax - height[right];
//       }
//       rightMax = Math.max(rightMax, height[right])
//       right--;
//     }
//   }

//   return trapped;
// };





// ---------------------------------------------------------------------------
// O(n) time and O(n) space
//     let totalTrappedWater = 0
//     let leftMax = []
//     let rightMax = []
    
//     leftMax[0] = height[0]
    
//     for (let i = 1; i < height.length; i++) {
//         leftMax[i] = Math.max(height[i], leftMax[i - 1])
//     }
                              
//     rightMax[height.length - 1] = height[height.length - 1]
        
//     for (let i = height.length - 2; i >= 0; i--) {
//         rightMax[i] = Math.max(height[i], rightMax[i + 1])
//     }
        
//     for (let i = 1; i < height.length - 1; i++) {
//         totalTrappedWater += Math.min(leftMax[i], rightMax[i]) - height[i]
//     }
        
//     return totalTrappedWater
// };

//    let totalTrappedWater = 0
//     let leftWall = []
//     let rightWall = []
//     leftWall[0] = height[0]
//     rightWall[height.length - 1] = height[height.length - 1]
    
//     for (let i = 1; i < height.length; i++) {
//         leftWall[i] = Math.max(height[i], leftWall[i - 1])
//     }
    
//     for (let i = height.length - 2; i >= 0; i--) {
//         rightWall[i] = Math.max(height[i], rightWall[i + 1])
//     }
    
//     for (let i = 1; i < height.length - 1; i++){
//         totalTrappedWater += Math.min(leftWall[i], rightWall[i]) - height[i]
//     }
    
//     return totalTrappedWater

// };


// trap(height)
// /* Psuedo
//           -
//  variables - totalTrappedWater
//  leftWall = []
//  rightWall = []

//  iterate trough the array and have all the highest left wall for wach index and populate the leftwall array with those values

//  iterate throuhg the array again and get right right highest wall for each value in the array

//  get the smallest wall out of the left and right walls becauswe that will give me the highest amount of water level

//  with the highest amount of water level I can subtract the value of the index -- need to iterate over the array and do the math for each one. 

//  save those values in the totalTrappedWater

//  return total

//  iterate 3 times 
//  */

// O(n) time O(n) space
// let leftWall = []
// let rightWall = []
// let totalTrappedWater = 0

// leftWall[0] = height[0]
// rightWall[height.length - 1] = height[height.length - 1]


// for (let i = 1; i < height.length; i++) {
//   leftWall[i] = Math.max(height[i], leftWall[i - 1])
// }

// for (let i = height.length - 2; i >= 0; i--) {
//   rightWall[i] = Math.max(height[i], rightWall[i + 1])
// }

// for (let i = 1; i < height.length - 1; i++) {
//  totalTrappedWater += Math.min(leftWall[i], rightWall[i]) - height[i]
// }

// return totalTrappedWater

// /*
// left and right pointer I can check to see if the left or right side is smaller
// the side that is smaller we can keep increasing/decresing because the smaller side gives us the water level 
// - keep track of the wallheight for both left and right
// check to see if the wall height is bigger than the value that we are on 
// we cna do the same math we did above so we could subtract the height[i] add it to the total

// if its not then make the left/right wall height = height[i]
// ++ 

//  do the same for the right side and at the end return the total
// */

// let left = 0
// let right = height.length - 1
// let leftWall = height[left]
// let rightWall = height[right]
// let totalTrappedWater = 0

// while (left < right) {
//   if (height[left] < height[right]]) {
//     if (leftWall > height[left]) {
//       totalTrappedWater += leftWall - height[left]

//     }
//     leftWall = Math.max(leftWall, height[left])
//     left++
//   } else {
//     if(rightWall > height[right]) {
//       totalTrappedWater += rightWall - height[right]
//     }
//     rightWall = Math.max(rightWall, height[right])
//     right--
//   }
//   return totalTrappedWater
// }

/* Pseudo
1. set my vairiables

2. iterate over the array and get the highest left wall 

3. iterate over the array and get the highest right wall

4. iterate over the array and get the smallest of the highest walls
and subtract the height of the currect values and add that to the total

*/

// trapped = (height) => {

//   let totalTrappedWater = 0
//   let leftWall = []
//   let rightWall = []
  
//   leftWall[0] = height[0]
//   rightWall[height.length - 1] = height[height.length - 1]

//   for (let i = 1; i < height.length; i++) {
//     leftWall[i] = Math.max(height[i], leftWall[i - 1])
//   }

//   for (let i = height.length - 2; i >= 0; i--) {
//     rightWall[i] = Math.max(height[i], rightWall[i + 1])
//   }

//   for (let i = 1; i < height.length - 1; i++) {
//     totalTrappedWater += Math.min(leftWall[i], rightWall[i]) - height[i]
//   }

//   return totalTrappedWater
// }

trapped = () => {
  let totalTrappedWater = 0
  let left = 0
  let right = height.length - 1
  let leftWall = height[left]
  let rightWall = height[right]

  while (left < right) {
    if(height[left < height[right]]) {
       if(leftWall > height[left]) {
         totalTrappedWater += leftWall - height[left]
       }
       leftWall = Math.max(height[left], leftWall)
       left++
    } else {
      if(rightWall > height[right]) {
        totalTrappedWater += rightWall - height[right]
      }
      rightWall = Math.max(rightWall, height[right])
      right--
    }
  }
return totalTrappedWater

}




