// types/hubspot.d.ts
interface HubspotFormConfiguration {
  portalId: string;
  formId: string;
  target: string;
  region?: string;
  onFormReady?: () => void;
  onFormSubmit?: () => void;
  onFormSubmitted?: () => void;
}

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: HubspotFormConfiguration) => void;
      };
    };
  }
}

export {};
  