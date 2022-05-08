import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <div>
      <div>
        <Link
          style={{color: match ? "brown" : "black" }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    </div>
  );
};

export default CustomLink;
