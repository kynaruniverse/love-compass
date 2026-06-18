import { LOVE_ARCHETYPES, LOVE_FLAVORS } from "./love";
import { LOVE_GIVING_ARCHETYPES, LOVE_GIVING_FLAVORS } from "./love-giving";
import { INTIMACY_ARCHETYPES, INTIMACY_FLAVORS } from "./intimacy";
import { INTIMACY_GIVING_ARCHETYPES, INTIMACY_GIVING_FLAVORS } from "./intimacy-giving";

export { LOVE_CATEGORIES, INTIMACY_CATEGORIES } from "@/data/categories/receiving";
export { LOVE_GIVING_CATEGORIES, INTIMACY_GIVING_CATEGORIES } from "@/data/categories/giving";

export const LOVE_ASSESSMENT = {
  receiving: { archetypes: LOVE_ARCHETYPES, flavors: LOVE_FLAVORS },
  giving: { archetypes: LOVE_GIVING_ARCHETYPES, flavors: LOVE_GIVING_FLAVORS },
};

export const INTIMACY_ASSESSMENT = {
  receiving: { archetypes: INTIMACY_ARCHETYPES, flavors: INTIMACY_FLAVORS },
  giving: { archetypes: INTIMACY_GIVING_ARCHETYPES, flavors: INTIMACY_GIVING_FLAVORS },
};