/*eslint-disable */
    Array.prototype.mapCustom = function (callback) {
        let arr = []

        for (let i = 0; i < this.length - 1; i++) {
            arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
        }
        
        return arr
    };
/*eslint-enable */