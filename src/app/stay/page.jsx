'use client';
// import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import LanguageModal from '@/components/languageModal';
import { langList } from '@/static/data';
import { Button } from '@/components/Button/Button';
import { useEffect, useState } from 'react';
import RoomBox from '@/components/pages/stay/roomBox';
import {
  BookingIcon,
  MenuIcon,
  PlaneIcon,
  SortIcon,
  StayIcon,
  UserIcon,
} from '@/icons';

const Flight = () => {
  //   const router = useRouter();

  const t = useTranslations('flight_page');

  const [searchMode, setSearchMode] = useState('hotel');

  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  //   useEffect(() => {
  //     if (searchMode === 'flight') {
  //       router.push('/flight');
  //     }
  //   }, [searchMode]);

  return (
    <>
      {isLangModalOpen ? (
        <LanguageModal exitModal={() => setIsLangModalOpen(false)} />
      ) : null}
      <div className="w-full bg-[#F5F5F5]">
        <header className="w-full bg-booking-blue-700">
          <div className="mx-auto flex h-[64px] w-full max-w-[1110px] items-center justify-between px-[16px] py-[8px] lg:h-[68px] lg:px-[32px] lg:pt-[12px]">
            <div>
              <BookingIcon />
            </div>

            <div>
              <div className="flex items-center gap-x-[32px] md:hidden">
                <div className="h-[24px] w-[24px]">
                  <UserIcon className="h-6 w-6 fill-white" />
                </div>

                <MenuIcon />
              </div>

              <div className="hidden items-center gap-x-[32px] md:flex">
                {/* <div
                  className={
                    'hover:bg-booking-blue-300 h-[36px] w-[36px] cursor-pointer rounded-[6px] p-[6px]'
                  }
                  onClick={() => setIsLangModalOpen(true)}
                >
                  <img
                    className={'h-full w-full rounded-full'}
                    // src={
                    //   langList?.find((item) => router.locale === item.symbol)
                    //     ?.icon ?? ''
                    // }
                  />
                </div> */}
                <a
                  href={'/login'}
                  className="hidden items-center gap-x-[32px] md:flex"
                >
                  <Button className={'h-[36px]'} color={'secondary'}>
                    {t('register')}
                  </Button>
                  <Button className={'h-[36px]'} color={'secondary'}>
                    {t('signIn')}
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div
            className={
              'no-scrollbar mx-auto mt-[2px] hidden w-full max-w-[1110px] overflow-x-auto px-[16px] pb-[8px] lg:block'
            }
          >
            <button
              onClick={() => setSearchMode('hotel')}
              className={`inline-block cursor-pointer rounded-[24px] border-white bg-opacity-10 px-[16px] py-[12px] ${
                searchMode === 'hotel' ? 'border bg-white' : ''
              }`}
            >
              <div className={'flex  items-center justify-center gap-[6px]'}>
                <StayIcon className="h-[20px] w-[20px] fill-white" />
                <p className={'text-[14px] text-white'}>{t('stays')}</p>
              </div>
            </button>

            <button
              onClick={() => setSearchMode('flight')}
              className={`ml-[16px] inline-block cursor-pointer rounded-[24px] border-white bg-opacity-10 px-[16px] py-[12px] ${
                searchMode === 'flight' ? 'border bg-white' : ''
              }`}
            >
              <div className={'flex  items-center justify-center gap-[6px]'}>
                <PlaneIcon className="h-[20px] w-[20px] fill-white" />
                <p className={'text-[14px] text-white'}>{t('flights')}</p>
              </div>
            </button>
          </div>
        </header>
      </div>

      <div className={'mx-auto w-full max-w-[1110px] p-[16px]'}>
        <div className={'w-full lg:hidden '}>
          <div
            className={
              'no-scrollbar mt-[2px] w-full overflow-x-auto px-[1px] pb-[8px]'
            }
          >
            <div className={'flex w-full gap-[8px]'}>
              <div
                className={`inline-block cursor-pointer rounded-[24px] border border-booking-blue-300 bg-booking-blue-300 bg-opacity-10 bg-opacity-10 px-[16px] py-[12px] text-booking-blue-300`}
              >
                <div className={'flex  items-center justify-center gap-[6px]'}>
                  <p className={'whitespace-nowrap text-[14px]'}>{t('sort')}</p>
                  <SortIcon />
                </div>
              </div>

              <div
                className={`inline-block cursor-pointer rounded-[24px] border border-booking-black-700 bg-opacity-10 px-[16px] py-[12px] text-booking-black-700`}
              >
                <div className={'flex  items-center justify-center gap-[6px]'}>
                  <p className={'whitespace-nowrap text-[14px]'}>
                    {t('stops')}
                  </p>
                  <SortIcon />
                </div>
              </div>

              <div
                className={`inline-block cursor-pointer rounded-[24px] border border-booking-black-700 bg-opacity-10 px-[16px] py-[12px] text-booking-black-700`}
              >
                <div className={'flex  items-center justify-center gap-[6px]'}>
                  <p className={'whitespace-nowrap text-[14px]'}>
                    {t('airlines')}
                  </p>
                  <SortIcon />
                </div>
              </div>

              <div
                className={`inline-block cursor-pointer rounded-[24px] border border-booking-black-700 bg-opacity-10 px-[16px] py-[12px] text-booking-black-700`}
              >
                <div className={'flex  items-center justify-center gap-[6px]'}>
                  <p className={'whitespace-nowrap text-[14px]'}>
                    {t('flightTimes')}
                  </p>
                  <SortIcon />
                </div>
              </div>

              <div
                className={`inline-block cursor-pointer rounded-[24px] border border-booking-black-700 bg-opacity-10 px-[16px] py-[12px] text-booking-black-700`}
              >
                <div className={'flex  items-center justify-center gap-[6px]'}>
                  <p className={'whitespace-nowrap text-[14px]'}>
                    {t('duration')}
                  </p>
                  <SortIcon />
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              'mt-[10px] w-full rounded-[12px] border border-gray-300 p-[12px]'
            }
          >
            <p>
              Learn how to select and customize the parameters that affect how
              your search results are ordered.
            </p>

            <a className={'mt-[16px] block text-booking-blue-300'}>
              Learn more
            </a>
          </div>

          <div className={'mt-[16px] flex w-full flex-col gap-[16px]'}>
            <RoomBox
              title={'test'}
              description={'test'}
              image={
                'https://cdn.jabama.com/image/675x/jabama-images/2612552/1b572fab-b9ca-4d4b-a05f-ce183c316a61.jpg'
              }
              price={'65$'}
              address={'vanc, 34 ave street'}
              score={'5.6'}
              distanceDiscription={'1 km from center'}
              reviewCount={7}
              scoreTitle={'good'}
              longDescription={'test'}
              level={3}
              stars={3}
            />
          </div>
        </div>

        <div className={'hidden justify-between gap-[16px] lg:flex'}>
          <div className={'w-[30%] bg-black'}>s</div>
          <div className={'w-[70%]'}>
            <div
              className={
                'mt-[10px] w-full rounded-[12px] border border-gray-300 p-[12px]'
              }
            >
              <p>
                Learn how to select and customize the parameters that affect how
                your search results are ordered.
              </p>

              <a className={'mt-[16px] block text-booking-blue-300'}>
                Learn more
              </a>
            </div>

            <div className={'mt-[16px] flex w-full flex-col gap-[16px]'}>
              <RoomBox
                title={'test'}
                description={'test'}
                image={
                  'https://cdn.jabama.com/image/675x/jabama-images/2612552/1b572fab-b9ca-4d4b-a05f-ce183c316a61.jpg'
                }
                price={'65$'}
                address={'vanc, 34 ave street'}
                score={'5.6'}
                distanceDiscription={'1 km from center'}
                reviewCount={7}
                scoreTitle={'good'}
                longDescription={'test'}
                level={3}
                stars={3}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flight;
