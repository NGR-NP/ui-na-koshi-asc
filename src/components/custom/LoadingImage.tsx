"use client";

import { forwardRef, useState } from "react";

import type { ImageProps } from "next/image";
import Image from "next/image";

import { cn } from "@/lib/utils";

//#################################################

//  example usage:
//   <LoadingImg  className="className">
//     <NextImage src="/your_image.png" alt="Example Image" imageType="lazy" />
//   </LoadingImg>

// ##################################################

type LoadingImgProps = React.HTMLAttributes<HTMLDivElement>;

const LoadingImg = forwardRef<HTMLDivElement, LoadingImgProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative size-full", className)}
        {...props}
      />
    );
  }
);

LoadingImg.displayName = "LoadingImg";

interface NextImageProps extends ImageProps {
  imageType?: "lazy" | "eager";
  loadingWidth?: number;
  loadingHeight?: number;
  fallbackSrc?: string;
  loadingClassName?: string;
}

const NextImage = ({
  className,
  loadingClassName,
  imageType = "lazy",
  quality = 100,
  src,
  alt,
  sizes = "100vw",
  loadingWidth = 1,
  loadingHeight = 1,
  fallbackSrc = "/na_koshi_banner.png",
}: NextImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleMainImageLoad = () => setIsLoading(false);

  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    if (e.currentTarget.srcset !== fallbackSrc) {
      e.currentTarget.srcset = fallbackSrc;
    } else {
      e.currentTarget.onerror = null;
    }
  };

  return (
    <>
      <Image
        sizes={sizes}
        fill
        src={src}
        quality={quality}
        alt={alt}
        loading={imageType}
        className={cn(
          isLoading ? "dark:opacity-0" : "dark:opacity-100",
          "object-cover transition-opacity duration-500 ease-in-out",
          className
        )}
        onLoad={handleMainImageLoad}
        onError={handleImageError}
      />

      <Image
        sizes="1px"
        quality={10}
        width={loadingWidth}
        height={loadingHeight}
        src={src}
        alt={alt}
        className={cn(
          !isLoading && "hidden ease-out",
          "z-20 w-full object-cover",
          className,
          loadingClassName
        )}
        onError={handleImageError}
      />
    </>
  );
};
export { LoadingImg, NextImage };
