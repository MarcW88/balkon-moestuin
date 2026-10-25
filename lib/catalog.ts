import groups from '@/data/catalog.json';
export const catalog = groups;
export type Group = (typeof catalog)[number];
export function getGroup(slug:string) { return catalog.find(g=>g.slug===slug); }
export function getArticle(section:string,slug:string) {return getGroup(section)?.articles.find(a=>a.slug===slug);}
