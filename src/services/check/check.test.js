import check from './check';

const items = new Array(7).fill(null).map((_, i) => ({ id: i }))

describe('check', () => {
    test('should return all items as new if no stored items', () => {
        const data = {
            currentItems: items,
            storedItems: [],
            isEqual: (a, b) => a.id === b.id
        }
        const actual = check(data); 
        const { newItems } = actual;
        expect(newItems).toEqual(items);
    });

    test('should return only new items', () => {
        const data = {
            currentItems: items.slice(2),
            storedItems: items.slice(0, -2),
            isEqual: (a, b) => a.id === b.id
        }
        const actual = check(data); 
        const { newItems } = actual;
        expect(newItems).toEqual(items.slice(5));
    });

    test('should return an empty array if current items equal stored ones', () => {
        const data = {
            currentItems: items,
            storedItems: items,
            isEqual: (a, b) => a.id === b.id
        }
        const actual = check(data); 
        const { newItems } = actual;
        expect(newItems).toEqual([]);
    });
})