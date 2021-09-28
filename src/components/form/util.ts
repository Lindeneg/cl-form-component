export function onArrayChange(arr: string[], target: string): string[] {
  const newArr = [...arr];
  const idx = newArr.findIndex((e) => e === target);
  if (idx > -1) {
    newArr.splice(idx, 1);
  } else {
    newArr.push(target);
  }
  return newArr;
}
