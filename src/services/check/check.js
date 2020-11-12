const checker = ({
    currentItems,
    storedItems,
    isEqual
}) => {
    const newItems = currentItems.filter(x => !storedItems.find(y => isEqual(x, y)));
    return { newItems } 
}

export default checker;