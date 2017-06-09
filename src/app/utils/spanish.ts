export function convertNounToPlural(noun: string) {
    if (noun.endsWith('a') || 
        noun.endsWith('e') || 
        noun.endsWith('i') || 
        noun.endsWith('o') || 
        noun.endsWith('u') ||
        noun.endsWith('á') ||
        noun.endsWith('é') ||
        noun.endsWith('í') ||
        noun.endsWith('ó') ||
        noun.endsWith('ú')) {
        return noun + 's';
    }

    if (noun.endsWith('ión')) {
        return noun.slice(0, -2) + 'ones';
    }
        
    if (noun.endsWith('z')) {
        return noun.slice(0, -1) + 'ces';
    }
        
    if (noun.endsWith('c')) {
        return noun.slice(0, -1) + 'ques';
    }
        
    if (noun.endsWith('g')) {
        return noun + 'ues';
    }

    if (noun.endsWith('s') ||
        noun.endsWith('x')) {
        const lastSyllable = noun.slice(-2, -1);
        if (lastSyllable != 'á' && 
            lastSyllable != 'é' && 
            lastSyllable != 'í' && 
            lastSyllable != 'ó') {
            return noun;
        }
    }
    
    return noun + 'es';
  }