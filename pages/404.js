import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const Error = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Page not Found</h1>
      <Link href="/">
        <a>GO home</a>
      </Link>
    </div>
  );
};

export default Error;
