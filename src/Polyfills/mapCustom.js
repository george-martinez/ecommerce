/*eslint-disable */
    /* Maps an Array excluding last position */
    Array.prototype.mapCustom = function (callback) {
        let arr = []

        for (let i = 0; i < this.length - 1; i++) {
            arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
        }
        
        return arr
    };
/*eslint-enable */