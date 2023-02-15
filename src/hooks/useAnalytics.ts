import { useEffect } from "react";
import { event, pageview } from "react-ga";
const TRACKING_ID = "G-NLCR4H9BYN";

const useAnalytics = () => {
  useEffect(() => {
    pageview(window.location.pathname);
  }, []);
};

const useAnalyticsEventTracker = (category: string) => {
  const eventTracker = (action: string, label: string) =>
    event({ category, action, label });

  return eventTracker;
};

export { TRACKING_ID, useAnalytics, useAnalyticsEventTracker };
