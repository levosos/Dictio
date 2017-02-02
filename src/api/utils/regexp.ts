export function find(str: string, pattern: string): string[] {
    const regexp = new RegExp(pattern);
    const result = regexp.exec(str);

    if (result === null) {
        throw new Error();
    }

    return result;
}
export function match(str: string, pattern: string): string {
    return find(str, pattern)[0];
}

export function matchAll(str: string, pattern: string): string[] {
    const regexp = new RegExp(pattern, 'g');
    var result = new Array<string>();
    
    var m;
    while (m = regexp.exec(str)) {
        result.push(m[0]);
    }

    return result;
}