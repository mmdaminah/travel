'use client';
import { Button } from '@/components/Button/Button';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  const t = useTranslations('home_page');

  return (
    <footer className="bg-booking-blue-700 mt-[24px] w-full md:hidden">
      <div className="border-booking-blue-300 flex w-full justify-center border-b-[2px] py-[8px]">
        <Button color="secondary">{t('listYourProperty')}</Button>
      </div>

      <div className="mt-[12px] flex w-full flex-wrap items-center justify-center gap-x-[8px] gap-y-[12px] px-[70px]">
        <a href="#" className="text-[14px] font-[700] text-white underline">
          {t('desktopVersion')}
        </a>
        <a href="#" className="text-[14px] font-[700] text-white underline">
          {t('desktopVersion')}
        </a>
        <a href="#" className="text-[14px] font-[700] text-white underline">
          {t('desktopVersion')}
        </a>
        <a href="#" className="text-[14px] font-[700] text-white underline">
          {t('desktopVersion')}
        </a>
        <a href="#" className="text-[14px] font-[700] text-white underline">
          {t('desktopVersion')}
        </a>
      </div>

      <p className="mt-[16px] w-full px-[40px] text-center text-[12px] text-white">
        {t('copyRight')}
      </p>

      <p className="mt-[16px] w-full px-[40px] text-center text-[14px] text-white">
        {t('yourReferenceIDIs')}: <span className="font-[700]">958DB1B</span>
      </p>

      <a
        href="#"
        className="block py-[8px] text-center text-[14px] text-white underline"
      >
        {t('siteMap')}
      </a>
    </footer>
  );
};
