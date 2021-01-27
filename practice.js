const quickSort = (arr) => {
    if (arr.length < 1) {
        return []
    }
    let pivot = arr[0]
    let left = []
    let right = []
    for (let i = 1; i < arr.length; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i])
    }
    return [].concat(quickSort(left), pivot, quickSort(right))
}
