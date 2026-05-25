import { useEffect, useState } from "react";

type LectureImageProps = {
  src: string;
  title: string;
  className?: string;
};

export function LectureImage({ src, title, className = "" }: LectureImageProps) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);

  if (failed || !src) {
    return (
      <div className={`lectureImageFallback ${className}`} role="img" aria-label={title}>
        <span>IT / ESPORTS</span>
        <strong>{title}</strong>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={title}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
}
