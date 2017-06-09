export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1).toLocaleLowerCase();
}

export function contains(obj: any, filter: string): boolean {
    filter = filter.toLocaleLowerCase().trim();

    for (let propertyName in obj) {
        if (!obj.hasOwnProperty(propertyName)) {
            continue;
        }

        let propertyValue = obj[propertyName];
        if (typeof propertyValue === 'string') {
            if (propertyValue.toLocaleLowerCase().indexOf(filter) !== -1) {
                return true;
            }
        } else if (typeof propertyValue === 'object') {
            if (contains(propertyValue, filter)) {
                return true;
            }
        }
    }

    return false;
}
    
export function shuffle(array: any[]): void {
    for (let i = array.length; i; i--) {
        let j = generateRandomNumber(i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    }
}
    
export function generateRandomNumber(max: number): number { // [0, max)
    return Math.floor(Math.random() * max);
}

export function generateRandomBoolean(): boolean {
    return generateRandomNumber(2) == 0;
}