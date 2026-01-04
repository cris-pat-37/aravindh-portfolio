import { FC, PropsWithChildren } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface SectionProps {
  className?: string;
  sectionId: string;
}

const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  className = '',
  sectionId,
}) => {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      ref={ref}
      id={sectionId}
      className={`${className} transition-all duration-700 ease-out ${
        visible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
