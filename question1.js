//Soal 1

function question1(arr){
    for (let i = 0; i<arr.length; i+=1){
        for(let j=0; j<arr.length-1-i; j+=1){
            if(arr[j]<arr[j+1]){
                let temp=arr[j];
                arr[j] = arr[j+1];
                arr[j+1]=temp
            }
        }
    }
    return arr;
}

console.log('testing soal 1')

const arr1 = [1, 2, 4, 3, 5, 3, 2, 1]
const result = question1(arr1);
console.log(result);

//Soal 2

function question2(arr, num){
    if(arr.length<num) return null;
    let maxSum = 0;
    let tempSum = 0;

    for (let i=0; i<num; i+=1){
        maxSum += arr[i];
    }
    tempSum = maxSum;

    for (let i = num; i<arr.length; i++){
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

console.log('testing soal 2')

const result1 = question2([100, 200, 300, 400], 2);
console.log(result1);
const result2 = question2([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
console.log(result2);
const result3 = question2([-3, 4, 0, -2, 6, -1], 2);
console.log(result3);

//Soal 3

function question3(obj){
    let sum = 0;

    for(let key in obj){
        if(typeof obj[key] === 'object'){
            sum += question3(obj[key]);
        }else if(typeof obj[key] === 'number' && obj[key] % 2 === 0){
            sum += obj[key]
        }
    }

    return sum
}

const input1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
};

const input2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
  };

console.log('testing soal 3')

console.log(question3(input1))
console.log(question3(input2))
