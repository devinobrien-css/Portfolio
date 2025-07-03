import { DetailedHTMLProps, ImgHTMLAttributes } from 'react';

interface SEOImageProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  caption?: string;
  priority?: boolean;
}

/**
 * SEO-optimized image component
 * Ensures images have proper alt text, loading attributes, and dimensions
 * for better Core Web Vitals and SEO performance
 */
export const SEOImage = ({
  src,
  alt = '',
  caption,
  priority = false,
  width,
  height,
  loading = priority ? 'eager' : 'lazy',
  ...rest
}: SEOImageProps) => {
  // We'll use a default alt text if none is provided
  const safeAlt = alt || "Image on Devin OBrien's portfolio site";

  return (
    <figure>
      <img
        src={src}
        alt={safeAlt}
        loading={loading}
        width={width}
        height={height}
        {...rest}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      {caption && (
        <figcaption className='mt-2 text-sm text-gray-600'>
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
