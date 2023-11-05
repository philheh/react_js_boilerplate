import React from "react";
import { Button } from "../../Shared/Button/Button";
export function BaseLayout({ children }) {
  return (
    <div>
      <header>header</header>
      <main>{children}</main>
      <footer>footer</footer>
      <Button></Button>
    </div>
  );
};
