/*eslint-disable */
    /* Maps an Array from last position to first position */
    Array.prototype.mapCustomReverse = function (callback) {
        let arr = []

        for (let i = (this.length - 1); i >= 0; i--) {
            arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
        }
        
        return arr
    };
/*eslint-enable */