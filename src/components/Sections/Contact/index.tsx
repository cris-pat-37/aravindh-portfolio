import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';

import FacebookIcon from '../../Icon/FacebookIcon';
import GithubIcon from '../../Icon/GithubIcon';
import InstagramIcon from '../../Icon/InstagramIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import TwitterIcon from '../../Icon/TwitterIcon';

import Section from '../../Layout/Section';
import ContactForm from './ContactForm';

/* --------------------------------------------
   Contact type → icon mapping
--------------------------------------------- */
const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: DevicePhoneMobileIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'Github'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Facebook]: {Icon: FacebookIcon, srLabel: 'Facebook'},
  [ContactType.Twitter]: {Icon: TwitterIcon, srLabel: 'Twitter'},
  [ContactType.Instagram]: {Icon: InstagramIcon, srLabel: 'Instagram'},
};

const Contact: FC = memo(() => {
  const {headerText, description, items} = contact;

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Contact}>
      <div className="flex flex-col gap-y-8">

        {/* Header */}
        <div className="flex items-center gap-6">
          <EnvelopeIcon className="hidden h-14 w-14 text-white md:block" />
          <h2 className="text-2xl font-bold text-white">{headerText}</h2>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

          {/* Contact Form */}
          <div className="order-2 md:order-1">
            <ContactForm />
          </div>

          {/* Contact Info */}
          <div className="order-1 flex flex-col gap-y-5 md:order-2">
            <p className="prose max-w-none text-neutral-300">
              {description}
            </p>

            <dl className="flex flex-col gap-3">
              {items.map(({type, text, href}) => {
                const {Icon, srLabel} = ContactValueMap[type];

                return (
                  <div key={srLabel}>
                    <dt className="sr-only">{srLabel}</dt>
                    <dd>
                      <a
                        href={href}
                        target={href?.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className={classNames(
                          'group flex items-center gap-3 rounded-lg p-2 transition-all',
                          'text-neutral-300 hover:text-orange-500',
                          'hover:bg-neutral-700/60 focus:outline-none focus:ring-2 focus:ring-orange-500'
                        )}
                      >
                        <Icon className="h-5 w-5 shrink-0 text-neutral-100 group-hover:scale-110 transition-transform" />
                        <span className="text-sm sm:text-base">{text}</span>
                      </a>
                    </dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
