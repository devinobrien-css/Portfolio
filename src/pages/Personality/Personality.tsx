import { useEffect, useState } from 'react';
import { PageSection } from '../../components/text/PageSection';
import { PageTitle } from '../../components/text/PageTitle';

export const Personality = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className='relative mx-auto py-12 md:max-w-[65%]'>
      <PageSection>
        <div className="mt-4 w-full transition-all duration-300 md:my-auto">
          <PageTitle title="More than Code" />
          <br/> 
          {
            loading ? (
              <div className='flex w-[85vw] flex-col gap-4 md:w-[65vw]'>
                <div className='h-[40vh] gap-4 md:flex md:h-[60vh]'>
                  <div className='size-full animate-pulse bg-slate-700 object-cover p-2 md:w-2/5'/>
                  <div className='size-full animate-pulse bg-slate-700 object-cover p-2 md:w-3/5'/>
                </div>
                <div className='h-[60vh] gap-4 md:flex'>
                  <div className='size-full animate-pulse bg-slate-700 object-cover p-2 md:w-1/3'/>
                  <div className='size-full animate-pulse bg-slate-700 object-cover p-2 md:w-2/3'/>
                </div>
              </div>
            ) : (
              <div>
                <div className='md:flex'>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_5394.jpg' alt='personal' className='w-full object-cover p-2 md:w-2/5'/>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_6703.JPG' alt='personal' className='w-full object-cover p-2 md:w-3/5'/>
                </div>
                <div className='md:flex'>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_8498.jpg' alt='personal' className='w-full object-cover p-2 md:w-1/3'/>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_6702.JPG' alt='personal' className='w-full object-cover p-2 md:w-2/3'/>
                </div>
                <div className='md:flex'>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_2708.JPG' alt='personal' className='w-full object-cover p-2 md:w-2/3'/>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/3J4A5012_Original.jpg' alt='personal' className='w-full object-cover p-2 md:w-1/3'/>
                </div>
                <div className='md:flex'>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_1621.JPG' alt='personal' className='w-full object-cover p-2 md:w-1/3'/>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_1670.jpg' alt='personal' className='w-full object-cover p-2 md:w-1/3'/>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_2486.jpg' alt='personal' className='w-full object-cover p-2 md:w-1/3'/>
                </div>
                <div className='md:flex'>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_0667.JPG' alt='personal' className='w-full object-cover p-2 md:w-1/3'/>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_2452.PNG' alt='personal' className='w-full object-cover p-2 md:w-2/3'/>
                </div>
                <div className='md:flex'>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/screenshot.png' alt='personal' className='w-full object-cover p-2 md:w-1/3'/>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_0641.JPG' alt='personal' className='w-full object-cover p-2 md:w-1/3'/>
                  <img src='https://access-portfolio-images.s3.amazonaws.com/IMG_7335.jpg' alt='personal' className='w-full object-cover object-left p-2 md:w-1/3'/>
                </div>
              </div>
            )
          }
        </div>
      </PageSection>
    </div>
  );
};