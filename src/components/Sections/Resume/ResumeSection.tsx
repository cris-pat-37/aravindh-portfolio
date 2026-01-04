import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="relative inline-block text-2xl font-bold text-black      ">
  {title }
  <span className="absolute left-0 -bottom-1 h-[2px] w-1/2 bg-orange-500"></span>
</h2>

          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-orange-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
