import Link from "next/link";
import React from "react";

function Navigation() {
  return (
    <div>
      <Link href="/client/languages">
        Click here to go to languages
      </Link>
      <Link href="/client/test_selection">
        Click here to select test
      </Link>
    </div>
  );
}

export default Navigation;
