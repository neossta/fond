export {};

declare global {
  interface Window {
    popupForSubscriptionsForm: (url: string) => void;
  }
}