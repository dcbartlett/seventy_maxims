import MAXIMS from './maxims';

interface Maxim {
  id: number,
  content: string
}

function getMaxim(id?: string | number, fullMaxim?: boolean): string | Maxim {
  let parsedID = id;
  if (typeof parsedID === "boolean") {
    fullMaxim = parsedID;
    parsedID = undefined;
  }
  if (typeof parsedID === "string") {
    parsedID = parseInt(parsedID);
  }
  const random = getRandomIntInclusive(0, 69);
  const maximID = (parsedID - 1) >= 0 ? (parsedID - 1) : random;
  if (fullMaxim) {
    return MAXIMS[maximID];
  }
  return MAXIMS[maximID].content;
}

function getRandomIntInclusive(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

module.exports = {
  MAXIMS,
  getMaxim
}