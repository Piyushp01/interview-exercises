const get = (givenObject, propPath = '', defaultValue = '') => {
  const path = propPath.split('.');
  let getValue = givenObject;

  // Return the default value, when path is undefined or splited array as zero.
  if (!path || path.length === 0) {
    return defaultValue;
  }

  // Iterate if path Array has atleast one item.
  for (var i = 0; i < path.length; i++) {
    const propName = path[i];
    // If the item isn't found, return the default (or null).
    if (!getValue[propName]) {
      return defaultValue;
    }

    if (!!getValue[propName]) {
      getValue = getValue[propName];
    }
  }

  return getValue;
}
