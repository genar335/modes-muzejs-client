import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div>
      <Link href="http://localhost:3000/client/languages">
        Click here to go to languages
      </Link>
    </div>
  );
}

export default Navigation;
