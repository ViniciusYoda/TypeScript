function checkSpam(str: string): boolean {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));      // true
console.log(checkSpam('free xxxxx'));          // true
console.log(checkSpam('innocent rabbit'));     // false
