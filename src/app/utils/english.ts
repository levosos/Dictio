export function convertNounToPlural(noun: string) {
    const known = { 
      'man': 'men',
      'woman': 'women',
      'mouse': 'mice',
      'fish': 'fish',
      'advice': 'advice',
      'chef': 'chefs', 
      'safe': 'safes', 
      'chief': 'chiefs',
      'sheep': 'sheep',
      'deer': 'deer',
      'potato': 'potatoes',
      'hero': 'heroes',
    };
    
    for (var key in known) {
      if (key === noun) {
        return known[key];
      }
    }

    if (noun.endsWith('s') || 
        noun.endsWith('ch') || 
        noun.endsWith('sh') || 
        noun.endsWith('x') || 
        noun.endsWith('z')) {
      return noun + 'es';
    }

    if (noun.endsWith('f')) {
      return noun.slice(0, -1) + 'ves';
    }

    if (noun.endsWith('fe')) {
      return noun.slice(0, -2) + 'ves';
    }

    if (noun.endsWith('o')) {
      return noun + 's';
    }

    if (noun.endsWith('y')) {
      if (noun.endsWith('ay') ||
          noun.endsWith('ey') ||
          noun.endsWith('oy') ||
          noun.endsWith('uy') ||
          noun.endsWith('iy')) {
        return noun + 's';
      }

      return noun.slice(0, -1) + 'ies';
    }

    return noun + 's';
}