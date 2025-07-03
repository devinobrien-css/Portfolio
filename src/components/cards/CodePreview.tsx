export const CodePreview = () => {
  return (
    <div className='rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-sm'>
      <div className='mb-4 flex items-center gap-2'>
        <div className='flex gap-1'>
          <div className='size-3 rounded-full bg-red-500'></div>
          <div className='size-3 rounded-full bg-yellow-500'></div>
          <div className='size-3 rounded-full bg-green-500'></div>
        </div>
        <span className='ml-2 text-sm text-slate-400'>portfolio.tsx</span>
      </div>

      <div className='font-mono text-sm'>
        <div className='text-slate-500'>
          // Building the future, one line at a time
        </div>
        <div className='mt-2'>
          <span className='text-purple-400'>const</span>{' '}
          <span className='text-blue-400'>developer</span>{' '}
          <span className='text-slate-300'>=</span>{' '}
          <span className='text-slate-300'>{'{'}</span>
        </div>
        <div className='ml-4'>
          <span className='text-green-400'>name</span>
          <span className='text-slate-300'>: </span>
          <span className='text-yellow-300'>'Devin O\'Brien'</span>
          <span className='text-slate-300'>,</span>
        </div>
        <div className='ml-4'>
          <span className='text-green-400'>role</span>
          <span className='text-slate-300'>: </span>
          <span className='text-yellow-300'>'Full Stack Engineer'</span>
          <span className='text-slate-300'>,</span>
        </div>
        <div className='ml-4'>
          <span className='text-green-400'>passion</span>
          <span className='text-slate-300'>: </span>
          <span className='text-yellow-300'>'Creating Impact'</span>
        </div>
        <div className='text-slate-300'>{'}'}</div>
      </div>
    </div>
  );
};
