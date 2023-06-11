// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import * as React from "react";

export const ExperimentContext = React.createContext(
  "PLEASE_RENDER_INSIDE_PROVIDER"
);

export function useExperiment() {
  return React.useContext(ExperimentContext);
}

export default ExperimentContext;
/* prettier-ignore-end */
