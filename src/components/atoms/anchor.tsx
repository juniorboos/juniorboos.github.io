import { AnchorHTMLAttributes } from "react";

const Anchor = (props: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return <a target="_blank" rel="noopener noreferrer" {...props}></a>;
};

export default Anchor;
