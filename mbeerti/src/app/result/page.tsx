"use client";

import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const result = searchParams.get("mbti");
  return <div>result:{result}</div>;
};

export default Page;
