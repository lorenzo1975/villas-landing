import hero from "../../content/hero.json";
import howItWorks from "../../content/how-it-works.json";
import personas from "../../content/personas.json";
import trust from "../../content/trust.json";
import roadmap from "../../content/roadmap.json";
import join from "../../content/join.json";
import press from "../../content/press.json";
import footer from "../../content/footer.json";
import settings from "../../content/settings.json";

type ValueOf<T> = T[keyof T];

export type HeroContent = typeof hero;
export type HowItWorksContent = typeof howItWorks;
export type PersonasContent = typeof personas;
export type TrustContent = typeof trust;
export type RoadmapContent = typeof roadmap;
export type JoinContent = typeof join;
export type PressContent = typeof press;
export type FooterContent = typeof footer;
export type SettingsContent = typeof settings;
export type Persona = (typeof personas)["personas"][number];
export type Role = ValueOf<JoinContent["roles"]> extends never
  ? string
  : JoinContent["roles"][number];

export const content = {
  hero,
  howItWorks,
  personas,
  trust,
  roadmap,
  join,
  press,
  footer,
  settings
} satisfies Record<string, unknown>;

export function getHeroContent(): HeroContent {
  return hero;
}

export function getHowItWorksContent(): HowItWorksContent {
  return howItWorks;
}

export function getPersonasContent(): PersonasContent {
  return personas;
}

export function getTrustContent(): TrustContent {
  return trust;
}

export function getRoadmapContent(): RoadmapContent {
  return roadmap;
}

export function getJoinContent(): JoinContent {
  return join;
}

export function getPressContent(): PressContent {
  return press;
}

export function getFooterContent(): FooterContent {
  return footer;
}

export function getSettings(): SettingsContent {
  return settings;
}
