//| Reducer that takes in JSON and returns an object with numbers for keys and values of objects
//|------------------------------------------------------------------------
export function addIndex(data) {
  const computedProperty = data.reduce((accumulator, item) => {
    const { type, title, position } = item;
    return {...accumulator, [position]: {...(accumulator[position] || {}), ...item}};
  }, {});

  return computedProperty;
}