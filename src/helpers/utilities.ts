import { IndexInterface } from "./interfaces";

function replaceWord(word: string, text: string) {
  return text.replace(word, `<Box component='span' sx={{ color: 'rgb(16, 131, 254)' }}>${word}</Box>`)
};

export function getHours(minutes: number) {
  return minutes / 60;
};

export function pluralize(count: number, noun: string, suffix = 's') {
  if (count === 0 || count > 1) {    
    return noun.concat(suffix);    
  }

  return noun;
};

export function replaceFacets(facets: Array<IndexInterface>, text: string) {
  let newText = text;
  for (let index = 0; index < facets.length; index++) {
    const startIndex = facets[index].index.byteStart;
    const endIndex = facets[index].index.byteEnd;
    const word = text.substring(startIndex, endIndex);
    newText = replaceWord(word, newText);
  }

  return newText;
};
