function sumWithClosure(firstNum) {
    return function (secNum) {
        return firstNum + secNum
    }
}

sumWithClosure(2)(3);

