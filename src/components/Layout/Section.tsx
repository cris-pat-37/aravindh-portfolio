import {memo, PropsWithChildren} from 'react';

import {useScrollReveal} from '../../hooks/useScrollReveal';

interface SectionProps {
  className?: string;
  sectionId: string;
  noPadding?: boolean;
}

const Section = ({
  children,
  className = '',
  sectionId,
  noPadding = false,
}: PropsWithChildren<SectionProps>) => {
  const {ref, visible} = useScrollReveal();

  return (
    <section
      ref={ref}
      id={sectionId}
      className={`${noPadding ? '' : 'py-16'} ${className} transition-all duration-700 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
      {children}
    </section>
  );
};

export default memo(Section);
