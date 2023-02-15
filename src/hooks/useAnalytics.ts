import { useEffect } from "react";
import ReactGA from "react-ga4";
const MEASUREMENT_ID = "G-NLCR4H9BYN";

const sendPageview = (path: string) =>
  ReactGA.send({
    hitType: "pageview",
    page: path,
  });

const useAnalytics = () => {
  useEffect(() => {
    ReactGA.initialize(MEASUREMENT_ID);
    sendPageview(window.location.pathname);
  }, []);
};

const useAnalyticsEventTracker = (category: string) => {
  const eventTracker = (action: string, label: string) =>
    ReactGA.event({ category, action, label });

  return eventTracker;
};

export { MEASUREMENT_ID, useAnalytics, useAnalyticsEventTracker };
