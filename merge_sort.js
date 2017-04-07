// Takes in an array that has two sorted subarrays,
//  from [lowest..middle] and [middle+1..highest], and merges the array
var merge = function(array, lowest, middle, highest) {
    var lowHalf = [];
    var highHalf = [];
    var iLowest = lowest;
    var i;
    var j;

    for (i = 0; iLowest <= middle; i++, iLowest++) {
        lowHalf[i] = array[iLowest];
    }
    for (j = 0; iLowest <= highest; j++, iLowest++) {
        highHalf[j] = array[iLowest];
    }

    iLowest = lowest;
    i = 0;
    j = 0;

    while (i < lowHalf.length && j < highHalf.length) {
        if (lowHalf[i] < highHalf[j]) {
            array[iLowest] = lowHalf[i];
            i++;
            iLowest++;
        } else {
            array[iLowest] = highHalf[j];
            j++;
            iLowest++;
        }
    }

    while (i < lowHalf.length) {
        array[iLowest] = lowHalf[i];
        i++;
        iLowest++;
    }

    while (j < highHalf.length) {
        array[iLowest] = highHalf[j];
        j++;
        iLowest++;
    }

    // Repeatedly compare the lowest untaken element in
    //  lowHalf with the lowest untaken element in highHalf
    //  and copy the lower of the two back into array

    // Once one of lowHalf and highHalf has been fully copied
    //  back into array, copy the remaining elements from the
    //  other temporary array back into the array

};

// Takes in an array and recursively merge sorts it
var mergeSort = function(array, lowest, highest) {
    if(highest-lowest+1 > 1) {
        var middle = Math.floor((lowest+highest)/2);
        mergeSort(array, lowest, middle);
        mergeSort(array, middle+1, highest);
        merge(array, lowest, middle, highest);
    }
};

var array = [14, 7, 3, 12, 9, 11, 6, 2];
mergeSort(array, 0, array.length-1);
print("Array after sorting: " + array);
//Program.assertEqual(array, [2, 3, 6, 7, 9, 11, 12, 14]);

var a2 = [5, 4, 3];
mergeSort(a2, 0, a2.length-1);
print("Array after sorting: " + a2);
//Program.assertEqual(a2, [3, 4, 5]);
