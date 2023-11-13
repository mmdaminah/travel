import { langList } from '@/static';
import { Button } from '@/components/Button/Button';
import { BookingIcon, PlaneIcon, StayIcon } from '@/icons';
import { ServiceType } from '@/models/serviceType';

const HomePageHeader = ({
  setSearchMode,
  searchMode,
  t,
  setIsLangModalOpen,
}) => {
  return (
    <header className="bg-booking-blue-700 w-full">
      <div className="mx-auto flex h-[64px] w-full max-w-[1110px] items-center justify-between px-[16px] py-[8px] lg:h-[68px] lg:px-[32px] lg:pt-[12px]">
        <div>
          <BookingIcon />
        </div>

        <div>
          <div className="flex items-center gap-x-[32px] md:hidden">
            <div className="h-[24px] w-[24px]">
              <svg
                className="fill-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M16.5 9.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zm1.5 0a6 6 0 1 0-12 0 6 6 0 0 0 12 0zm1.445 10.597c-4.086-4.111-10.732-4.132-14.844-.046l-.046.046a.75.75 0 0 0 1.064 1.058l.04-.04a8.996 8.996 0 0 1 12.722.04.75.75 0 0 0 1.064-1.058zM22.5 12c0 5.799-4.701 10.5-10.5 10.5S1.5 17.799 1.5 12 6.201 1.5 12 1.5 22.5 6.201 22.5 12zm1.5 0c0-6.627-5.373-12-12-12S0 5.373 0 12s5.373 12 12 12 12-5.373 12-12z" />
              </svg>
            </div>

            <svg
              onClick={() => setIsLangModalOpen(true)}
              className="h-[20px] w-[20px] fill-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M2.25 18.753h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm0-6h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5zm0-6h19.5a.75.75 0 0 0 0-1.5H2.25a.75.75 0 0 0 0 1.5z" />
            </svg>
          </div>

          <div className="hidden items-center gap-x-[32px] md:flex">
            {/* <div
              className="hover:bg-booking-blue-300 h-[36px] w-[36px] cursor-pointer rounded-[6px] p-[6px]"
              onClick={() => setIsLangModalOpen(true)}
            >
              <img
                className="h-full w-full rounded-full"
                // src={langList?.find((item) => router.locale === item.symbol)}
                src={langList?.find((item) => 'en' === item.symbol)}
              />
            </div> */}
            <a
              href="/login"
              className="hidden items-center gap-x-[32px] md:flex"
            >
              <Button className="h-[36px] text-white" color="secondary">
                {t('register')}
              </Button>
              <Button className="h-[36px] text-white" color="secondary">
                {t('signIn')}
              </Button>
            </a>
          </div>
        </div>
      </div>

      <div className="no-scrollbar mx-auto mt-[2px] w-full max-w-[1110px] overflow-x-auto px-[16px] pb-[8px]">
        <button
          onClick={() => setSearchMode(ServiceType.STAYS)}
          className={`inline-block cursor-pointer rounded-[24px] border-white bg-opacity-10 px-[16px] py-[12px] ${
            searchMode === ServiceType.STAYS ? 'border bg-white' : ''
          }`}
        >
          <div className="flex  items-center justify-center gap-[6px]">
            <StayIcon className="h-[20px] w-[20px]" />
            <p className="text-[14px] text-white">{t('stays')}</p>
          </div>
        </button>

        <button
          onClick={() => setSearchMode(ServiceType.FLIGHTS)}
          className={`ml-[16px] inline-block cursor-pointer rounded-[24px] border-white bg-opacity-10 px-[16px] py-[12px] ${
            searchMode === ServiceType.FLIGHTS ? 'border bg-white' : ''
          }`}
        >
          <div className="flex  items-center justify-center gap-[6px]">
            <PlaneIcon className="h-[20px] w-[20px]" />
            <p className="text-[14px] text-white">{t('flights')}</p>
          </div>
        </button>
      </div>

      <div
        className="relative hidden h-[375px] w-full px-60 py-[72px] md:block"
        style={{ background: 'url(/hero.jpeg)', backgroundSize: 'cover' }}
      >
        <div className="max-w-lg text-white">
          <h2 className="text-[48px] font-[700]">{t('findYourNextStay')}</h2>
          <p className="text-[24px]">
            {t('searchDealsOnHotelsHomesAndMuchMore')}
          </p>
        </div>
      </div>
    </header>
  );
};

export default HomePageHeader;
