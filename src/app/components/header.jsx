import React from "react";
import Link from "next/link";

function header() {
  return (
    <nav className="bg-black text-white">
      <ul className="flex gap-2">
        <li>
          <Link href="./" prefetch={false}>
            Home
          </Link>
        </li>
        <li>
          <Link href="./henry" prefetch={false}>
            Henry
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default header;
