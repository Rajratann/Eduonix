function searchNum(){
    const array = [10,12,14,23,25,33,35,46,47,56,66,69,78,79,89,90]
    
    let left = 0;
    let right = array.length - 1;
    
    const user = document.getElementById("inputNo").value;
    
    while (left <= right) {
    
        let mid = Math.floor((left + right) / 2);
        if (array[mid] == user) {
             document.getElementById("foundNum").innerHTML = `${user} Found at index ${mid}`
            break;
        }
        else if (array[mid] > user) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    
    }
    if (left > right) {
        document.getElementById("foundNum").innerHTML = "Element Not Found"
    }
    }