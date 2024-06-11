'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';
import Image from 'next/image';
import Sweden from "../../../public/Images/languages/sweden.png"
import England from "../../../public/Images/languages/uk.png"


const defaultLanguage = 'sv'; 

const LangToogle = () => {
  const [isPending, startTransition] = useTransition();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedLocale, setSelectedLocale] = useState(defaultLanguage); 
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    
    const localeFromUrl = pathname.split('/')[1];
    if (localeFromUrl && ['sv', 'en'].includes(localeFromUrl)) {
      setSelectedLocale(localeFromUrl);
    } else {
      setSelectedLocale(defaultLanguage); 
    }
  }, [pathname]);

  const onSelectChange = (nextLocale: string) => {
    
    setSelectedLocale(nextLocale);

    // Construct the new URL with the next locale
    const newPathname = `/${nextLocale}${pathname.replace(/^\/[a-z]{2}/, '')}`;
    const newSearchParams = searchParams.toString();
    const newUrl = `${newPathname}${
      newSearchParams ? '?' + newSearchParams : ''
    }`;

    startTransition(() => {
      router.replace(newUrl);
    });

    // Close dropdown
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Get the flag image based on the selected locale
  const getFlagImage = (locale: string) => {
    if (locale === 'sv') {
      return England;
    } else if (locale === 'en') {
      return Sweden;
    } else {
      return England; // Default to Swedish if locale is not recognized
    }
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="rounded bg-transparent text-white px-4 py-1 flex items-center"
      >
        <Image
          src={getFlagImage(selectedLocale)}
          alt={selectedLocale}
          width={25}
          height={25}
        />
      </button>
      <AnimatePresence>
        {dropdownOpen && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.4 },
            }}
            viewport={{ once: true }}
            className="absolute rounded mt-3 ml-2 z-20 items-center text-white md:bg-pt-primary w-[73px]"
          >
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}
              onClick={() => onSelectChange('sv')}
              className="flex items-center p-2 cursor-pointer"
            >
              <Image
                src={Sweden}
                alt="Swedish"
                width={20}
                height={20}
                className="mr-2"
              />{' '}
              Sv
            </motion.li>
            
            <motion.li
              initial={{ opacity: 0, y: -10 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}
              onClick={() => onSelectChange('en')}
              className="flex items-center p-2 cursor-pointer"
            >
              <Image
                src={England}
                alt="English"
                width={20}
                height={20}
                className="mr-2"
              />{' '}
              En
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LangToogle;
