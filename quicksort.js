//Old function.
function quicksortOne(list) {
    if (list.length == 0)
        return [];
    // Pick up the last number as the pivot.
    var pivot = list[list.length - 1];
    // The box for numbers smaller than the pivot.
    var left = new Array();
    // The box for numbers bigger than the pivot.
    var right = new Array();
    // Put the numbers smaller than pivot into left box.
    // Put the numbers bigger than the pivot into right box.
    for (var i = 0; i < list.length - 1; i++) {
        if (list[i] < pivot) {
            left.push(list[i]);
        }
        else {
            right.push(list[i]);
        }
    }
    // The sorted list should be left box appending pivot appending right box.
    return quicksortOne(left).concat(pivot, quicksortOne(right));
}
//New partition function, uses external comparision function f
function partitionTwo(list, left, right, f) {
    if (left >= right) {
        return 0;
    }
    ;
    /*left check point starts from the first number */
    var left_1 = left;
    /*right check point starts from the second last number */
    var right_1 = right - 1;
    /*select the last number as pivot*/
    var pivot = list[right];
    /*partition starts */
    while (left_1 < right_1) {
        /*left check point keep moving forward until it finds a number bigger than pivot */
        //while (list[left_1] < pivot && left_1 < right) {left_1 +=1;}
        while (!f(list[left_1], pivot) && left_1 < right) {
            left_1 += 1;
        }
        /*right check point keep moving to head until it finds a number less than pivot */
        while (f(list[right_1], pivot) && right_1 > left) {
            right_1 -= 1;
        }
        /*swap two numbers, move the number bigger than pivot to left and move the less one to right*/
        //if (left_1 < right_1) {[list[left_1], list[right_1]] = [list[right_1], list[left_1]];}
        if (left_1 < right_1) {
            swap(list, left_1, right_1);
        }
    }
    /*partition ends when two check points meet,then swap pivot and the left check point to make sure pivot is in the correct location*/
    swap(list, left_1, right);
    /*return location of the pivot*/
    return left_1;
}
//quicksort function two, uses external comparision function f
function quicksortTwo(list, left, right, comparision) {
    if (left < right) {
        var index = partitionTwo(list, left, right, comparision);
        quicksortTwo(list, left, index - 1, comparision);
        quicksortTwo(list, index + 1, right, comparision);
    }
}
//quicksort function three, uses external comparision and partition functions
function quicksortThree(list, left, right, comparision, partition) {
    if (left < right) {
        var index = partition(list, left, right, comparision);
        quicksortTwo(list, left, index - 1, comparision);
        quicksortTwo(list, index + 1, right, comparision);
    }
}
//ascending comparision
function comparisionIntAsc(v1, v2) {
    if (v1 >= v2)
        return true;
    else
        return false;
}
//descending comparision
function comparisionIntDesc(v1, v2) {
    if (v1 < v2)
        return true;
    else
        return false;
}
//length in descending order comparision for string
function comparisionStrLen(v1, v2) {
    if (v1.length < v2.length)
        return true;
    else
        return false;
}
//swap elements in list
function swap(list, index_1, index_2) {
    _a = [list[index_2], list[index_1]], list[index_1] = _a[0], list[index_2] = _a[1];
    var _a;
}
//test cases
var list1 = [5, 4, 3, 2, 2, 3, 6, 4, 2, -1];
var list2 = [5, 4, 3, 2, 2, 3, 6, 4, 2, -1];
console.log("\nList1 is");
console.log(list1);
console.log("\nSorted list1 in ascending order:");
console.log(quicksortOne(list1));
console.log("\nSorted list1 in descending order:");
quicksortThree(list2, 0, 9, comparisionIntDesc, partitionTwo);
console.log(list2);
var list3 = ["abc", "defg", "zfasfasd", "c", "bAAAA"];
console.log("\nList2 is");
console.log(list3);
console.log("\nSorted list2 in length order:");
quicksortTwo(list3, 0, 4, comparisionStrLen);
console.log(list3);
var list4 = ["abc", "defg", "zfasfasd", "c", "bAAAA"];
console.log("\nSorted list2 alphabetically:");
quicksortThree(list4, 0, 4, comparisionIntAsc, partitionTwo);
console.log(list4);
