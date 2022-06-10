function removeObjectFromArrayById ( arr = [], objectToDelete ) {
    const arrCopy = arr.map(arrItem => arrItem)
    const arrIds = arr.map(arrItem => arrItem.id)
    
    let indexOfObjectToDelete = arrIds.indexOf(objectToDelete.id)
    
    if ( indexOfObjectToDelete !== -1 ) {
        arrCopy.splice( indexOfObjectToDelete, 1 );
    }
    
    return arrCopy
}

export default removeObjectFromArrayById