declare module "*.svg?react" {
  import * as React from "react";
  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { width?: string | number; height?: string | number }
  >;
  export default ReactComponent;
}