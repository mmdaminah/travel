import { Modal } from '@/components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { changeLanguage } from '@/redux/reducers/siteSetting';
import { useRouter } from 'next/router';
import { langList } from '@/static';

export const LanguageModal = ({ exitModal }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <Modal>
      <div className="w-full">
        <div className="mx-auto max-h-full w-full max-w-[calc(100%-64px)] overflow-auto rounded-[20px] bg-white p-[12px] xl:max-w-[960px]">
          <div className="flex items-center justify-between">
            <h3 className="font-[700] lg:text-[20px]">Languages</h3>
            <svg
              onClick={() => {
                exitModal && exitModal();
              }}
              className="h-[16px] w-[16px] cursor-pointer lg:h-[24px] lg:w-[24px]"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </div>
          <div className="mt-[12px] flex w-full flex-wrap gap-[16px]">
            {langList.map((lang) => (
              <div
                key={lang.symbol}
                className={`flex min-w-[170px] cursor-pointer items-center gap-[8px] rounded-[6px] p-[8px] ${
                  router.locale === lang.symbol
                    ? 'bg-booking-blue-300 bg-opacity-70'
                    : ''
                }`}
                onClick={() =>
                  dispatch(changeLanguage({ language: lang.symbol }))
                }
              >
                <div className="h-[22px] w-[22px] rounded-full">
                  <img className="h-full w-full rounded-full" src={lang.icon} />
                </div>
                <p className="text-[12px] font-[600] lg:text-[16px]">
                  {lang.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
