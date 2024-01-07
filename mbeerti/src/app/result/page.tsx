"use client";

import { useEffect, useState } from "react";
import { ContainerBackground, LayoutContainer } from "../shared/layout";
import { ResultSection } from "./ResultSection";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isImageReady, setIsImageReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const shouldShowLoading = isLoading && !isImageReady;

  const handleLoad = () => {
    setIsImageReady(true);
  };

  return (
    <ContainerBackground>
      <LayoutContainer>
        <ResultSection isLoading={shouldShowLoading} onImageLoad={handleLoad} />
      </LayoutContainer>
    </ContainerBackground>
  );
};

export default Page;
