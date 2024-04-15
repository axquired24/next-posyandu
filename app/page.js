"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/p')
  }, []);

  return (
    <div className="p-5 text-center">
      Loading...
    </div>
  );
}

export default Page;
