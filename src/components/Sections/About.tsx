
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.About}>
      <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 items-start animate-fadeIn">

        {/* Profile Image */}
        {profileImageSrc && (
          <div className="flex justify-center md:justify-start">
            <img
  src="https://res.cloudinary.com/dudr6v8mi/image/upload/v1767520880/linkedin_hpms2x.jpg"
  alt="Vishwapathi Aravindh"
  className="
    h-[28rem]
    w-auto
    rounded-2xl
    object-cover
    bg-white
    shadow-2xl
    transition-all
    duration-300
    hover:scale-[1.02]
    hover:shadow-orange-900/30
  "
/>


          </div>
        )}

        {/* About Content */}
        <div className="flex flex-col gap-y-6">
          <div className="flex flex-col gap-y-2">
           <h2 className="relative inline-block text-5xl font- text-white">
  About me
  <span className="absolute left-0 -bottom-1 h-[2px] w-1/2 bg-orange-500"></span>
</h2>

            <p className="prose prose-sm text-gray-300 sm:prose-base">
              {description}
            </p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li
  key={idx}
  className="
    flex items-start gap-x-2
    rounded-lg
    p-2

    transition-all
    duration-300
    ease-out

    hover:bg-neutral-700/60
    hover:-translate-y-[2px]
  "
>
  {Icon && (
    <Icon className="h-5 w-5 text-white shrink-0 transition-colors duration-300 group-hover:text-indigo-400" />
  )}

  <span className="text-sm font-bold text-white">{label}:</span>
  <span className="text-sm text-gray-300">{text}</span>
</li>

            ))}
          </ul>
        </div>

      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
