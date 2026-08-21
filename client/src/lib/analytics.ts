/** Provider-agnostic, non-identifying event facade for the ChipTech public site. */
export type AnalyticsEvent =
  | "landing_started"
  | "landing_scene_viewed"
  | "landing_skipped"
  | "landing_completed"
  | "homepage_transition_started"
  | "homepage_transition_completed"
  | "navigation_clicked"
  | "project_opened"
  | "event_registration_clicked"
  | "join_cta_clicked";

type EventProperties = Record<string, string | number | boolean>;

declare global {
  interface Window {
    umami?: { track?: (event: string, data?: EventProperties) => void };
  }
}

export function track(event: AnalyticsEvent, data?: EventProperties) {
  window.umami?.track?.(event, data);
}
