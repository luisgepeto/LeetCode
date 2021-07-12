function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const sArray = s.split('');
  const tArray = t.split('');
  const mapDictionary = {};
  const resultDictionary = {};
  let result = true;
  sArray.map((cs, i) => {
    const ts = tArray[i];
    if (mapDictionary.hasOwnProperty(cs)) {
      if (mapDictionary[cs] !== ts) {
        result = false;
        return true;
      }
    } else {
      if (resultDictionary.hasOwnProperty(ts)) {
        result = false;
        return true;
      }
      mapDictionary[cs] = ts;
      resultDictionary[ts] = true;
    }
    return false;
  });
  return result;
}
