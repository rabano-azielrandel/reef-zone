import React from "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "spline-viewer": {
        url: string;
        style?: React.CSSProperties;
        className?: string;
      };
    }
  }
}