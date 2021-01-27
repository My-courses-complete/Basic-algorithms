const datacollection = new Array(
    3, 94, 86, 82, 90,
    10, 87, 36, 61, 8,
    17, 15, 22, 10, 23,
    78, 25, 2 ,30 ,45,
    98, 43, 98, 59, 53,
    57, 2 ,64, 1, 41,
    32, 58, 19, 99, 60,
    74, 48, 80, 44, 25,
    68, 1 ,89 ,77 ,60,
    25, 99, 30, 76, 32,
    57, 82, 52, 44, 72,
    87, 34, 87, 65, 30,
    54, 6 ,31 ,33 ,44,
    44, 42, 82, 90, 17,
    9, 98 ,28, 86, 69,
    3, 17 ,8 ,45 ,98,
    12, 47, 95, 43, 72,
    39, 41, 82, 74, 56,
    65, 79, 50, 26, 67,
    100, 24, 67, 38, 57,
)

const swap = function (items, leftIndex, rightIndex){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
}
const partition = function (items, left, right) {
    var pivot   = items[Math.floor((right + left) / 2)],
        i       = left,
        j       = right;
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
        }
        while (items[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(items, i, j);
            i++;
            j--;
        }
    }
    return i;
}

const quickSort = function (items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}

var sortedArray = quickSort(datacollection, 0, datacollection.length - 1);
console.log(sortedArray);