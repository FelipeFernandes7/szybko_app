export function removeArrayElementDuplicates(array: any[], prop: string) {
  const uniqueIds = new Set();
  const unique = array.filter(element => {
    const isDuplicate = uniqueIds.has(element[prop]);
    uniqueIds.add(element[prop]);
    return !isDuplicate;
  });
  return unique;
}
