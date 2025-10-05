import { getSettings } from "./content";

type FeatureKey = keyof ReturnType<typeof getSettings>["features"];

type FeatureMap = Record<FeatureKey, boolean>;

const features = getSettings().features satisfies FeatureMap;

export function isFeatureEnabled<T extends FeatureKey>(feature: T): boolean {
  return Boolean(features?.[feature]);
}
