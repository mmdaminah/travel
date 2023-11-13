'use client';
// import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import LanguageModal from '@/components/languageModal';
import { langList } from '@/static/data';
import { Button } from '@/components/Button/Button';
import { useState, useEffect } from 'react';
import TicketBox from '@/components/pages/flight/ticketBox';
import { Select } from '@/components/Select/Select';
import {
  BookingIcon,
  UserIcon,
  MenuIcon,
  StayIcon,
  PlaneIcon,
  ExchangeIcon,
  SortIcon,
} from '@/icons';

const Flight = () => {
  //   const router = useRouter();

  const t = useTranslations('flight_page');

  const [searchMode, setSearchMode] = useState('flight');

  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const [flightsFilter, setFlightsFilter] = useState([
    { id: 0, from: '', to: '', date: '' },
    { id: 1, from: '', to: '', date: '' },
  ]);

  const [airports, setAirports] = useState(['nyw', 'fwd']);

  //   useEffect(() => {
  //     if (searchMode === 'hotel') {
  //       router.push('/stay');
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
                <div
                  className={
                    'h-[36px] w-[36px] cursor-pointer rounded-[6px] p-[6px] hover:bg-booking-blue-300'
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
                </div>
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

      <div className="mx-auto mt-[20px] hidden w-full max-w-[1100px] flex-col gap-[8px] rounded-[8px] bg-booking-yellow-300 p-[4px] lg:flex ">
        {flightsFilter.map((item) => (
          <div
            key={item.id}
            className={'flex w-full flex-col items-center lg:flex-row'}
          >
            <div className="w-1/3 border-r border-booking-yellow-300">
              <Select
                placeholder="where from?"
                options={airports.map((item) => ({ label: item, value: item }))}
                value={item.from}
                onChange={(e) => {
                  let temp = flightsFilter;
                  temp.find((flight) => flight.id === item.id).from = e;
                  setFlightsFilter([...temp]);
                }}
              />
            </div>

            <div className="border-r border-booking-yellow-300">
              <button
                className="flex items-center justify-center rounded-[4px] bg-white p-[10px]"
                onClick={() => {
                  let temp = flightsFilter;
                  temp.find((flight) => flight.id === item.id).from = item.to;
                  temp.find((flight) => flight.id === item.id).to = item.from;
                  setFlightsFilter([...temp]);
                }}
              >
                <ExchangeIcon />
              </button>
            </div>

            <div className="w-1/3 border-r border-booking-yellow-300">
              <Select
                placeholder="where to?"
                options={airports.map((item) => ({ label: item, value: item }))}
                value={item.to}
                onChange={(e) => {
                  let temp = flightsFilter;
                  temp.find((flight) => flight.id === item.id).to = e;
                  setFlightsFilter([...temp]);
                }}
              />
            </div>

            <div className="flex w-1/3 items-center gap-[4px]">
              <div className="w-3/4 border-r border-booking-yellow-300">
                <input
                  type="date"
                  className="h-[36px] w-full rounded-[4px]"
                  value={item.date}
                  onChange={(e) => {
                    let temp = flightsFilter;
                    temp.find((flight) => flight.id === item.id).date =
                      e.target.value;
                    setFlightsFilter([...temp]);
                  }}
                />
              </div>

              <Button className="max-h-[36px]">Search</Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-[20px] hidden w-full max-w-[1100px] lg:block">
        <button
          className="font-[600] text-booking-blue-700"
          onClick={() =>
            setFlightsFilter([
              ...flightsFilter,
              {
                id: Date.now(),
                from: '',
                to: '',
                date: '',
              },
            ])
          }
        >
          {' '}
          Add a flight
        </button>
      </div>

      <div className={'mx-auto w-full max-w-[1110px] p-[16px]'}>
        <div className={'w-full lg:hidden '}>
          <div
            className={
              'flex w-full flex-col items-center rounded-[8px] bg-booking-yellow-300 p-[4px] lg:flex-row'
            }
          >
            <div className="flex w-full flex-col gap-[16px]">
              {flightsFilter.map((item) => (
                <div key={item.id}>
                  <div className="flex w-full items-center">
                    <div className="w-full ">
                      <div className="w-full border-r border-booking-yellow-300">
                        <Select
                          placeholder="where from?"
                          options={airports.map((item) => ({
                            label: item,
                            value: item,
                          }))}
                          value={item.from}
                          onChange={(e) => {
                            let temp = flightsFilter;
                            temp.find((flight) => flight.id === item.id).from =
                              e;
                            setFlightsFilter([...temp]);
                          }}
                        />
                      </div>

                      <div className="w-full border-r border-booking-yellow-300">
                        <Select
                          placeholder="where to?"
                          options={airports.map((item) => ({
                            label: item,
                            value: item,
                          }))}
                          valie={item.to}
                          onChange={(e) => {
                            let temp = flightsFilter;
                            temp.find((flight) => flight.id === item.id).to = e;
                            setFlightsFilter([...temp]);
                          }}
                        />
                      </div>
                    </div>

                    <div className="border-r border-booking-yellow-300">
                      <button className="flex h-[72px] items-center justify-center rounded-[4px] bg-white p-[10px]">
                        <SortIcon />
                      </button>
                    </div>
                  </div>

                  <div className="mt-[4px] w-full border-r border-booking-yellow-300">
                    <input
                      type="date"
                      className="h-[36px] w-full rounded-[4px]"
                      value={item.date}
                      onChange={(e) => {
                        let temp = flightsFilter;
                        temp.find((flight) => flight.id === item.id).date =
                          e.target.value;
                        setFlightsFilter([...temp]);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button className="mt-[4px] max-h-[36px] w-full">Search</Button>
          </div>

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
            <TicketBox
              price="67 $"
              flights={[
                {
                  start: {
                    time: '9:56 AM',
                    city: 'TEH',
                    date: '9 Oct',
                  },
                  end: {
                    time: '10:20 AM',
                    city: 'SHZ',
                    date: '9 Oct',
                  },
                  duration: '3h 25m',
                  airline: 'Iran air',
                  airlineImage:
                    'https://r-xx.bstatic.com/data/airlines_logo/NK.png',
                },
              ]}
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
              <TicketBox
                price="67 $"
                flights={[
                  {
                    start: {
                      time: '9:56 AM',
                      city: 'TEH',
                      date: '9 Oct',
                    },
                    end: {
                      time: '10:20 AM',
                      city: 'SHZ',
                      date: '9 Oct',
                    },
                    duration: '3h 25m',
                    airline: 'Iran air',
                    airlineImage:
                      'https://r-xx.bstatic.com/data/airlines_logo/NK.png',
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flight;
