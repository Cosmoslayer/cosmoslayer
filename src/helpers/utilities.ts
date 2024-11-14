import { FeatureInterface } from "./interfaces";

export function getHours(minutes: number) {
  return minutes / 60;
};

export function pluralize(count: number, noun: string, suffix = 's') {
  if (count === 0 || count > 1) {    
    return noun.concat(suffix);    
  }

  return noun;
};

export function replaceHashtag(facets: Array<FeatureInterface>, text: string) {
  const tags = facets[0].features[0].tag;
  if (Array.isArray(tags)) {
    for (let index = 0; index < tags.length; index++) {
      text.replace(`#${tags[index]}`, `<Box component='span' sx={{ color: 'rgb(16, 131, 254)' }}>#${tags[index]}</Box>`);
    }
    return text;
  }

  return text.replace(`#${tags}`, `<Box component='span' sx={{ color: 'rgb(16, 131, 254)' }}>#${tags}</Box>`);
};
