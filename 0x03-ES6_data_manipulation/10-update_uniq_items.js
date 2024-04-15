export default function updateUniqueItems(listMap) {
  if (listMap instanceof Map) {
    for (const [key, value] of listMap) {
      if (value === 1) {
        listMap.set(key, 100);
      }
    }
    return listMap;
  }
  return new Error('Cannot process');
}
