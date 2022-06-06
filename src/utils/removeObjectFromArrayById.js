function removeObjectFromArrayById ( arr = [], objectToDelete ) {
/*     const uniqueIdArr = new Set()
    const uniqueArr = []

    for(let i = 0; i < arr.length; i++) {
        if(!uniqueIdArr.has(arr[i].id)){
            uniqueIdArr.add(arr[i].id)
            uniqueArr.push(arr[i])
        }
    } */

    const arrCopy = arr.map(arrItem => arrItem)
    const arrIds = arr.map(arrItem => arrItem.id)
    
    let indexOfObjectToDelete = arrIds.indexOf(objectToDelete.id)
    
    if ( indexOfObjectToDelete !== -1 ) {
        arrCopy.splice( indexOfObjectToDelete, 1 );
    }

    console.log(arrCopy)
    
    return arrCopy
}

export default removeObjectFromArrayById