export function solution1(string: string) {
  const validIpAddreses: string[] = [];

  //[ 1, 9, 2, 1, 6, 7]
  for (
    let i = 0;
    i < Math.min(string.length, 4 /**can only place dot up to 3 digits */);
    i++
  ) {
    const currIpParts = ["", "", "", ""];

    currIpParts[0] = string.slice(0, i);
    if (!isValidPart(currIpParts[0])) continue;

    for (let j = i + 1; j < i + Math.min(string.length - i, 4); j++) {
      currIpParts[1] = string.slice(i, j);
      if (!isValidPart(currIpParts[1])) continue;

      for (let k = j + 1; k < j + Math.min(string.length - j, 4); k++) {
        currIpParts[2] = string.slice(j, k);
        currIpParts[3] = string.slice(k);

        if (isValidPart(currIpParts[2]) && isValidPart(currIpParts[3])) {
          validIpAddreses.push(currIpParts.join("."));
        }
      }
    }
  }

  return validIpAddreses;
}

function isValidPart(string: string) {
  const int = parseInt(string);
  if (int > 255) return false;

  //to discard leading zeros
  //"001" === "1" false
  return string.length === int.toString().length;
}
