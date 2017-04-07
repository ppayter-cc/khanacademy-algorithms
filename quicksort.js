// This function partitions given array and returns
//  the index of the pivot.
// Swaps two items in an array, changing the original array
var swap = function(array, firstIndex, secondIndex) {
    var temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

var partition = function(array, p, r) {

    var q = p;
    var pivot = array[r];
    for (var i = p; i < r; i++) {
        if (array[i] <= pivot) {
            swap(array, q, i);
            q++;
        }
    }
    swap(array, q, i);
    return q;
    // Compare array[j] with array[r], for j = p, p+1,...r-1
    // maintaining that:
    //  array[p..q-1] are values known to be <= to array[r]
    //  array[q..j-1] are values known to be > array[r]
    //  array[j..r-1] haven't been compared with array[r]
    // If array[j] > array[r], just increment j.
    // If array[j] <= array[r], swap array[j] with array[q],
    //   increment q, and increment j.
    // Once all elements in array[p..r-1]
    //  have been compared with array[r],
    //  swap array[r] with array[q], and return q.
};

var quickSort = function(array, p, r) {
    if (p < r) {
        var pivot = partition(array, p, r);
        quickSort(array, p, pivot-1);
        quickSort(array, pivot+1, r);
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
