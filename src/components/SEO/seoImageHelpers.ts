/**
 * Helper for creating SEO-friendly image attributes
 * Use this when you need to pass image attributes to other components
 */
export const createSEOImageAttributes = (
  src: string,
  alt: string,
  options: {
    width?: number | string;
    height?: number | string;
    priority?: boolean;
  } = {}
) => {
  return {
    src,
    alt: alt || 'Image on Devin O\'Brien\'s portfolio site',
    width: options.width,
    height: options.height,
    loading: options.priority ? 'eager' : 'lazy',
    decoding: options.priority ? 'sync' : 'async',
    fetchPriority: options.priority ? 'high' : 'auto',
  };
};
