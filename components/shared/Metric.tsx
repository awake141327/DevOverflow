// Metrics Component

// Importing Next/React utils.
import Image from "next/image";
import Link from "next/link";
import React from "react";

// Defining Type for Props
interface Props {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
}: Props) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        alt={alt}
        width={16}
        height={16}
        className={`object-contain ${href ? "rounded-full" : ""}`}
      />
      <p className={`${textStyles} flex items-center gap-1`}>
        {value}
        <span
          className={`small-regular line-clamp-1 ${
            isAuthor ? "max-sm:hidden" : ""
          }`}
        >
          {title}
        </span>
      </p>
    </>
  );

  // If the Metric is Clickable.
  if (href) {
    return (
      <Link href="href" className="flex-center gap-1">
        {metricContent}
      </Link>
    );
  }

  // If the Metric is Not Clickable.
  return <div className="flex-center flex-wrap gap-1">{metricContent}</div>;
};

export default Metric;
