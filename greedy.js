const greedyChange = (coinSet, N) => {
    if (N == 0) {
        return 0
    }
    if (N<0) {
        return 'error'
    }

    let coins = []

    for (let i = 0; i < coinSet.length; i++) {
        if (coinSet[i] < N) {
            N = N-coinSet[i]
            coins.push(coinSet[i])
        }
    }
    return coins
}

console.log(greedyChange([20,10,5,1], 27))