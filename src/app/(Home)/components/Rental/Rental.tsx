import { useTranslations } from 'next-intl';
import { BlueCarIcon, ArrowRightIcon, BlackCarIcon } from '@/icons';

export const Rental = () => {
  const t = useTranslations('home_page');
  return (
    <>
      <div className="mt-[24px] flex w-full flex-col gap-[2px]">
        <a
          href="#"
          className="relative flex w-full justify-between gap-[8px] bg-white px-[12px] py-[16px]"
        >
          <div className="fill-booking-blue-300 h-[24px] w-[24px]">
            <BlueCarIcon />
          </div>
          <div className="w-full">
            <h3 className="text-[14px] font-[700] text-[#262626]">
              Rent a car
            </h3>
            <p className="text-[12px] text-[#262626]">
              Hundreds of cars and 24/7 customer service
            </p>
          </div>
          <div className="centerY-absolute absolute right-[12px] h-[14px] w-[14px]">
            <ArrowRightIcon />
          </div>
        </a>
      </div>

      <div className="mt-[24px] flex w-full flex-col gap-[2px]">
        <a
          href="#"
          className="relative flex w-full justify-between gap-[8px] bg-white px-[12px] py-[16px]"
        >
          <div className="fill-booking-black-700 h-[24px] w-[24px]">
            <BlackCarIcon />
          </div>
          <div className="w-full">
            <h3 className="text-[14px] font-[700] text-[#262626]">
              Rent a car
            </h3>
            <p className="text-[12px] text-[#262626]">
              Hundreds of cars and 24/7 customer service
            </p>
          </div>
        </a>
      </div>
    </>
  );
};
