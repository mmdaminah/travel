'use client';
import { useState } from 'react';
import OfferSection from '@/components/pages/home/offerSection';
import BrowseByPropSection from '@/components/pages/home/browseByPropSection';
import { LanguageModal } from '@/components/languageModal';
import { useTranslations } from 'next-intl';
import HomePageHeader from '@/components/pages/home/homePageHeader';
import {
  Explorer,
  TripPlanner,
  TopProperties,
  Rental,
  Discounts,
  DesktopFlightsSearch,
  MobileFlightSearch,
  DesktopStaysSearch,
} from './components';
import Image from 'next/image';
import { GermanyFlagIcon } from '@/icons';
import { ServiceType } from '@/models/serviceType';

export default function Home() {
  const t = useTranslations('home_page');

  const [searchMode, setSearchMode] = useState(ServiceType.STAYS);

  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  return (
    <>
      {isLangModalOpen ? (
        <LanguageModal exitModal={() => setIsLangModalOpen(false)} />
      ) : null}
      <HomePageHeader
        t={t}
        setSearchMode={setSearchMode}
        searchMode={searchMode}
        setIsLangModalOpen={setIsLangModalOpen}
      />

      {searchMode === ServiceType.STAYS ? (
        <>
          <DesktopStaysSearch />
          <MobileFlightSearch />
        </>
      ) : null}
      {searchMode === ServiceType.FLIGHTS ? (
        <>
          <DesktopFlightsSearch />
          <MobileFlightSearch />
        </>
      ) : null}

      <main className="w-full bg-[#F5F5F5] pt-[100px]">
        <div className="mx-auto w-full max-w-[1110px]">
          <section className="px-[16px]">
            <h2 className="text-booking-black-700 text-[24px] font-[700]">
              {t('offers')}
            </h2>
            <p className="mt-[8px] text-[#474747]">{t('offerTag')}</p>

            <OfferSection offers={[1, 2, 3, 4, 5]} />
          </section>

          <section className="w-full px-4">
            <h2 className="text-booking-black-700 text-[24px] font-[700]">
              {t('trendingDestinations')}
            </h2>
            <p className="mt-[8px] text-[#474747]">
              {t('trendingDestinationsTag')}
            </p>

            <div className="mt-[16px] grid w-full grid-cols-6 gap-[16px] ">
              <div className="relative col-span-full h-[270px] rounded-md sm:col-span-3">
                <Image
                  width={574}
                  height={270}
                  className="h-full w-full rounded-md object-cover"
                  src="/berlin.jpg"
                  alt="berlin"
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-md filter" />
                <div className="absolute left-4 top-4  flex items-center">
                  <div className="mr-2 mt-2 text-2xl font-bold text-white">
                    Berlin
                  </div>
                  <GermanyFlagIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="relative col-span-full h-[270px] rounded-md sm:col-span-3">
                <Image
                  width={574}
                  height={270}
                  className="h-full w-full rounded-md object-cover"
                  src="/hamburg.jpg"
                  alt="hamburg"
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-md filter" />
                <div className="absolute left-4 top-4  flex items-center">
                  <div className="mr-2 mt-2 text-2xl font-bold text-white">
                    Hamburg
                  </div>
                  <GermanyFlagIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="relative col-span-full max-h-[265px]  rounded-[8px] sm:col-span-2 ">
                <Image
                  width={574}
                  height={270}
                  className="h-full w-full object-cover"
                  src="/munich.jpg"
                  alt="munich"
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-md filter" />
                <div className="absolute left-4 top-4  flex items-center">
                  <div className="mr-2 mt-2 text-2xl font-bold text-white">
                    Munich
                  </div>
                  <GermanyFlagIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="relative col-span-full max-h-[265px] rounded-[8px] bg-red-200 sm:col-span-2">
                <Image
                  width={574}
                  height={270}
                  className="h-full w-full object-cover"
                  src="/frankfurt.jpg"
                  alt="frankfurt"
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-md filter" />
                <div className="absolute left-4 top-4  flex items-center">
                  <div className="mr-2 mt-2 text-2xl font-bold text-white">
                    Frankfurt
                  </div>
                  <GermanyFlagIcon className="h-6 w-6" />
                </div>
              </div>
              <div className="relative col-span-full max-h-[265px] rounded-[8px] bg-red-200 sm:col-span-2">
                <Image
                  width={574}
                  height={270}
                  className="h-full w-full object-cover"
                  src="/cologne.jpg"
                  alt="cologne"
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-md filter" />
                <div className="absolute left-4 top-4  flex items-center">
                  <div className="mr-2 mt-2 text-2xl font-bold text-white">
                    Cologne
                  </div>
                  <GermanyFlagIcon className="h-6 w-6" />
                </div>
              </div>
            </div>
          </section>

          <section className="mt-[16px]">
            <h2 className="text-booking-black-700 text-[24px] font-[700]">
              {t('browseByPropertyType')}
            </h2>
            <BrowseByPropSection items={[1, 2, 3, 4, 5, 6, 7, 8]} />
          </section>
        </div>
      </main>

      <main className="mt-[48px] w-full bg-[#F5F5F5] lg:hidden">
        <Discounts />
        <Explorer />
        <TripPlanner />
        <TopProperties />
        <Rental />

        <div className="mt-[24px] w-full px-[4px]">
          <div className="bg-booking-blue-700 flex w-full items-center justify-between gap-[4px] rounded-[8px]">
            <div className="p-[8px]">
              <h3 className="font-[700] text-[#F5F5F5]">{t('siteMap')}</h3>

              <p className="mt-[12px] text-[12px] text-white">
                {t('youreAlreadyGeniusMember')}
              </p>

              <a
                href="/login"
                className="bg-booking-blue-300 mt-[12px] inline-block flex h-[32px] w-[68px] items-center justify-center rounded-[4px] text-white"
              >
                {t('signIn')}
              </a>
            </div>

            <div className="min-w-[80px]">
              <img
                className="w-full"
                src="https://cf.bstatic.com/psb/capla/static/media/baloons.79c0e51c.png"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
