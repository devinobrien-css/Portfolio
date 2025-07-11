/**
 * Background SVG component
 * @returns {JSX.Element} The Background SVG component
 */
export const Background = (): JSX.Element => {
  return (
    <>
      <svg
        viewBox='0 0 602 792'
        className='fixed right-0 top-0 z-0 h-screen w-screen scale-150 animate-jello'
      >
        <defs>
          <linearGradient id='gradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#33485E' />
            <stop offset='100%' stopColor='#101935' />
          </linearGradient>

          <filter id='blur'>
            <feGaussianBlur in='SourceGraphic' stdDeviation='5' />
          </filter>
        </defs>
        <path
          className='translate-y-[-24em] scale-[1.7] fill-slate-100/90 dark:fill-charcoal/20'
          d='M576.8,498.9c-0.6,0-1.3,0-1.9,0c-5.7,0.1-11.7-0.6-17.9-2c-39.2-8.8-37.4-47.9-24.7-78.3c20.4-49,71.3-124.8,31.9-175.3  c-0.4-0.5-0.7-1-1.2-1.5c-2.9-3.5-6.2-6.8-9.9-10c-42.8-36.3-97.2-17.6-141.6,10.5c-0.7,0.5-1.5,0.9-2.2,1.4  c-15.7,10.1-30,21.4-42.2,31.7c-11.2,9.5-22.1,19.4-33.8,28.2c-22.5,17-50.8,31.6-79.8,25.7c-64.2-13-66-86.8-49.9-137.6H612v296.2  C601.6,494.6,589.9,498.5,576.8,498.9z'
        />

        <path
          className='fill-blue-50/60 dark:fill-charcoal/30'
          transform='translate(-410, -510) scale(2.4)'
          d='  M148.7,192c-1,5.1-2.1,10.2-3,15.3c-6.6,36.5-10.7,81.9-2.4,122.5c0.2,0.8,0.3,1.6,0.5,2.5c5.6,25.6,16.3,49.2,34.5,67.2  c0.5,0.5,1,0.9,1.5,1.4c3.6,3.4,7.4,6.6,11.6,9.6c0.3,0.2,0.5,0.3,0.7,0.5c0.4,0.3,0.8,0.6,1.2,0.8c0.3,0.2,1.2,0.8,1.2,0.8  c0.2,0.1,0.4,0.2,0.5,0.3c0.4,0.3,0.9,0.6,1.3,0.9c0.3,0.2,1.5,0.9,1.8,1.1c0.3,0.2,1.5,0.9,1.5,0.9c0.4,0.3,1.6,0.9,1.6,0.9  c75.4,42.4,129-51.3,183.1-87.9c22.4-15.2,54.3-30.4,81.4-18.1c31.6,14.3,37.9,54.2,21.1,82.1c-20.7,34.1-108.1,67.7-80.7,118.3  c28.1,51.9,92.5,18.2,134.2,10.4c28.6-5.3,52.8,3.2,71.6,19.7v59H307c-45.2-57.7-91.7-113.2-168.5-138  C96.3,448.4,45.6,441.4,0,450.6V192H148.7z'
        />
      </svg>
      <svg
        viewBox='0 0 602 792'
        className='fixed right-0 top-0 z-0 h-screen w-screen scale-50'
      ></svg>
    </>
  );
};
