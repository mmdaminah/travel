import { useTranslations } from 'next-intl';
import { useState } from 'react';

export const TripPlanner = () => {
  const [searchMode, setSearchMode] = useState('hotel');
  const t = useTranslations('home_page');
  return (
    <div className="border-gary-400 mt-[24px] w-full border-b border-t bg-white p-[16px]">
      <h3 className="text-booking-black-700 text-[20px] font-[700]">
        Quick and easy trip planner
      </h3>
      <p className="mt-[4px] font-[300] text-[#474747]">
        Pick a vibe and explore the top destinations in Germany
      </p>

      <div className="mt-[12px] w-full overflow-x-auto pb-[8px]">
        <div className="flex">
          <button
            onClick={() => setSearchMode('hotel')}
            className={`border-booking-blue-300 cursor-pointer rounded-[24px] bg-opacity-10 px-[16px] py-[12px] ${
              searchMode === 'hotel'
                ? 'fill-booking-blue-300 text-booking-blue-300 bg-booking-blue-300 border'
                : 'fill-black text-black'
            }`}
          >
            <div className="flex  items-center justify-center gap-[6px]">
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z" />
              </svg>
              <p className="text-[14px]">Stays</p>
            </div>
          </button>

          <button
            onClick={() => setSearchMode('hotelx')}
            className={`border-booking-blue-300 cursor-pointer rounded-[24px] bg-opacity-10 px-[16px] py-[12px] ${
              searchMode === 'hotelx'
                ? 'fill-booking-blue-300 text-booking-blue-300 bg-booking-blue-300 border'
                : 'fill-black text-black'
            }`}
          >
            <div className="flex  items-center justify-center gap-[6px]">
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z" />
              </svg>
              <p className="text-[14px]">Stays</p>
            </div>
          </button>

          <button
            onClick={() => setSearchMode('hotelx')}
            className={`border-booking-blue-300 cursor-pointer rounded-[24px] bg-opacity-10 px-[16px] py-[12px] ${
              searchMode === 'hotelx'
                ? 'fill-booking-blue-300 text-booking-blue-300 bg-booking-blue-300 border'
                : 'fill-black text-black'
            }`}
          >
            <div className="flex  items-center justify-center gap-[6px]">
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z" />
              </svg>
              <p className="text-[14px]">Stays</p>
            </div>
          </button>

          <button
            onClick={() => setSearchMode('hotelx')}
            className={`border-booking-blue-300 cursor-pointer rounded-[24px] bg-opacity-10 px-[16px] py-[12px] ${
              searchMode === 'hotelx'
                ? 'fill-booking-blue-300 text-booking-blue-300 bg-booking-blue-300 border'
                : 'fill-black text-black'
            }`}
          >
            <div className="flex  items-center justify-center gap-[6px]">
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z" />
              </svg>
              <p className="text-[14px]">Stays</p>
            </div>
          </button>

          <button
            onClick={() => setSearchMode('hotelx')}
            className={`border-booking-blue-300 cursor-pointer rounded-[24px] bg-opacity-10 px-[16px] py-[12px] ${
              searchMode === 'hotelx'
                ? 'fill-booking-blue-300 text-booking-blue-300 bg-booking-blue-300 border'
                : 'fill-black text-black'
            }`}
          >
            <div className="flex  items-center justify-center gap-[6px]">
              <svg
                className="h-[20px] w-[20px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M2.75 12h18.5c.69 0 1.25.56 1.25 1.25V18l.75-.75H.75l.75.75v-4.75c0-.69.56-1.25 1.25-1.25zm0-1.5A2.75 2.75 0 0 0 0 13.25V18c0 .414.336.75.75.75h22.5A.75.75 0 0 0 24 18v-4.75a2.75 2.75 0 0 0-2.75-2.75H2.75zM0 18v3a.75.75 0 0 0 1.5 0v-3A.75.75 0 0 0 0 18zm22.5 0v3a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-1.5 0zm-.75-6.75V4.5a2.25 2.25 0 0 0-2.25-2.25h-15A2.25 2.25 0 0 0 2.25 4.5v6.75a.75.75 0 0 0 1.5 0V4.5a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v6.75a.75.75 0 0 0 1.5 0zm-13.25-3h7a.25.25 0 0 1 .25.25v2.75l.75-.75h-9l.75.75V8.5a.25.25 0 0 1 .25-.25zm0-1.5A1.75 1.75 0 0 0 6.75 8.5v2.75c0 .414.336.75.75.75h9a.75.75 0 0 0 .75-.75V8.5a1.75 1.75 0 0 0-1.75-1.75h-7z" />
              </svg>
              <p className="text-[14px]">Stays</p>
            </div>
          </button>
        </div>
      </div>

      <div className="no-scrollbar mt-[12px] w-full overflow-x-auto">
        <div className="flex gap-[8px]">
          <div>
            <div className="h-[96px] w-[120px] rounded-[4px] ">
              <img
                className="h-full w-full rounded-[4px]"
                src="https://r-xx.bstatic.com/xdata/images/city/263x210/977038.jpg?k=7a972d6549c05a3f19227bdd9be88209cbc57be1dd143dcc20ae7a6addb8d3fb&o="
              />
            </div>
            <p className="text-booking-black-700 mt-[4px] font-[700]">
              Hamburg
            </p>
            <p className="text-[14px] font-[300] text-gray-600">
              724 properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
