// This function partitions given array and returns
//  the index of the pivotValue.
// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, left, right) {

    var pivotNewIndex = left;
    var pivotValue = array[right];
    for (var nextToCompare = left; nextToCompare < right; nextToCompare++) {
        if (array[nextToCompare] <= pivotValue) {
            swap(array, pivotNewIndex, nextToCompare);
            pivotNewIndex++;
        }
    }
    swap(array, pivotNewIndex, nextToCompare);
    return pivotNewIndex;
    // Compare array[nextToCompare] with array[right], for nextToCompare = left, left+1,...right-1
    // maintaining that:
    //  array[left..pivotNewIndex-1] are values known to be <= to array[right]
    //  array[pivotNewIndex..nextToCompare-1] are values known to be > array[right]
    //  array[nextToCompare..right-1] haven't been compared with array[right]
    // If array[nextToCompare] > array[right], just increment nextToCompare.
    // If array[nextToCompare] <= array[right], swap array[nextToCompare] with array[pivotNewIndex],
    //   increment pivotNewIndex, and increment nextToCompare.
    // Once all elements in array[left..right-1]
    //  have been compared with array[right],
    //  swap array[right] with array[pivotNewIndex], and return pivotNewIndex.
};

var quickSort = function(array, left, right) {
    if (left < right) {
        var pivotNewIndex = partition(array, left, right);
        quickSort(array, left, pivotNewIndex-1);
        quickSort(array, pivotNewIndex+1, right);
    }
};

var array = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(array, 0, array.length-1);
print("Array after sorting: " + array);
//Program.assertEqual(array, [2,3,5,6,7,9,10,11,12,14]);

var a2 = [65, 0, -24];
quickSort(a2, 0, a2.length-1);
print("a2 after sorting: " + a2);
//Program.assertEqual(a2, [-24, 0, 65]);
