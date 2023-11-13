import { Button } from '@/components/Button/Button';

const TicketBox = ({ flights, price }) => {
  return (
    <>
      <div className={'w-full rounded-[12px] border border-gray-300 lg:hidden'}>
        {flights?.map((item) => (
          <div className="w-full" key={`${Math.random()}-${item.start.time}`}>
            <div
              className={
                'flex w-full items-center justify-between gap-[8px] p-[12px]'
              }
            >
              <div
                className={'flex w-full flex-col items-center justify-center'}
              >
                <p className={'font-[700]'}>{item.start.time}</p>
                <div className={'flex items-start gap-[2px] font-[300]'}>
                  <p>{item.start.city}</p>
                  <p>.</p>
                  <p>{item.start.date}</p>
                </div>
              </div>

              <div
                className={'flex w-full flex-col items-center justify-center'}
              >
                <p className={'font-[300] text-gray-500'}>{item.duration}</p>
                <div className={'h-[1px] w-full bg-gray-400'} />
                <p className={'font-[300] text-gray-500'}>Direct</p>
              </div>

              <div
                className={'flex w-full flex-col items-center justify-center'}
              >
                <p className={'font-[700]'}>{item.end.time}</p>
                <div className={'flex items-start gap-[2px] font-[300]'}>
                  <p>{item.end.city}</p>
                  <p>.</p>
                  <p>{item.end.date}</p>
                </div>
              </div>
            </div>
            <div
              className={
                'mt-[8px] flex w-full items-center gap-[8px] border-b border-gray-300 px-[12px] pb-[8px]'
              }
            >
              <div className={'h-[16px] w-[16px]'}>
                <img className={'h-full w-full'} src={item.airlineImage} />
              </div>
              <p className={'text-[12px] font-[300]'}>{item.airline}</p>
            </div>
          </div>
        ))}

        <div className={'w-full p-[12px]'}>
          <div className={'flex w-full items-end justify-between'}>
            <div className={'flex flex-col'}>
              <svg
                className={'h-[24px] w-[24px] fill-gray-400'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="m 15 12.75 H 9 C 8.036 12.755 7.255 13.536 7.25 14.5 v 4 c 0.005 0.964 0.786 1.745 1.75 1.75 h 6 c 0.964 -0.005 1.745 -0.786 1.75 -1.75 v -4 C 16.745 13.536 15.964 12.755 15 12.75 z m -6 1.5 h 6 c 0.138 0 0.25 0.112 0.25 0.25 v 0.62 h -6.5 V 14.5 c 0 -0.138 0.112 -0.25 0.25 -0.25 z m 6 4.5 H 9 c -0.138 0 -0.25 -0.112 -0.25 -0.25 v -1.88 h 3.5 v 0.26 a 0.75 0.75 0 0 0 1.5 0 v -0.26 h 1.5 v 1.88 c 0 0.138 -0.112 0.25 -0.25 0.25 z M 15.69 4.42 a 3.73 3.73 0 0 0 -7.38 0 C 6.219 4.958 4.755 6.84 4.75 9 v 11.5 c 0 1.243 1.007 2.25 2.25 2.25 h 10 c 1.243 0 2.25 -1.007 2.25 -2.25 V 9 C 19.245 6.84 17.781 4.958 15.69 4.42 z M 12 2.75 c 0.95 0.002 1.796 0.603 2.11 1.5 H 9.89 C 10.204 3.353 11.05 2.752 12 2.75 z m 5.75 17.75 c -0.005 0.412 -0.338 0.745 -0.75 0.75 H 7 C 6.588 21.245 6.255 20.912 6.25 20.5 V 9 C 6.255 7.207 7.707 5.755 9.5 5.75 h 5 c 1.793 0.005 3.245 1.457 3.25 3.25 z"></path>
              </svg>
              <div className={'text-[10px] font-[300]'}>
                <span>Included: </span>
                <span>personal item</span>
              </div>
            </div>

            <div className={'flex flex-col items-end gap-[2px]'}>
              <p className={'text-[18px] font-[700]'}>67,93 €</p>
              <p className={'text-[10px]'}>Total price for all travelers</p>
            </div>
          </div>

          <Button outlined className={'mt-[10px] w-full py-[8px] font-[600]'}>
            View details
          </Button>
        </div>
      </div>
      <div
        className={
          'flex hidden w-full rounded-[12px] border border-gray-300 lg:flex'
        }
      >
        <div className={'w-[60%] border-r border-gray-300'}>
          {flights?.map((item) => (
            <div key={`${Math.random()}-${item.start.time}`} className="w-full">
              <div className={'flex w-full items-center pl-[16px]'}>
                <div className={'h-[32px] w-[32px]'}>
                  <img className={'h-full w-full'} src={item.airlineImage} />
                </div>
                <div
                  className={
                    'flex w-full items-center justify-between gap-[8px] p-[12px]'
                  }
                >
                  <div
                    className={
                      'flex w-full flex-col items-center justify-center'
                    }
                  >
                    <p className={'font-[700]'}>{item.start.time}</p>
                    <div className={'flex items-start gap-[2px] font-[300]'}>
                      <p>{item.start.city}</p>
                      <p>.</p>
                      <p>{item.start.date}</p>
                    </div>
                  </div>

                  <div
                    className={
                      'flex w-full flex-col items-center justify-center'
                    }
                  >
                    <p className={'font-[300] text-gray-500'}>
                      {item.duration}
                    </p>
                    <div className={'h-[1px] w-full bg-gray-400'} />
                    <p className={'font-[300] text-gray-500'}>Direct</p>
                  </div>

                  <div
                    className={
                      'flex w-full flex-col items-center justify-center'
                    }
                  >
                    <p className={'font-[700]'}>{item.end.time}</p>
                    <div className={'flex items-start gap-[2px] font-[300]'}>
                      <p>{item.end.city}</p>
                      <p>.</p>
                      <p>{item.end.date}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  'mt-[8px] flex w-full items-center gap-[8px] px-[12px] pb-[8px]'
                }
              >
                <p className={'text-[12px] font-[300]'}>{item.airline}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={'w-[40%] p-[12px]'}>
          <div
            className={
              'flex w-full flex-col items-end justify-between gap-[20px]'
            }
          >
            <div className={'flex flex-col items-end'}>
              <svg
                className={'h-[24px] w-[24px] fill-gray-400'}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="m 15 12.75 H 9 C 8.036 12.755 7.255 13.536 7.25 14.5 v 4 c 0.005 0.964 0.786 1.745 1.75 1.75 h 6 c 0.964 -0.005 1.745 -0.786 1.75 -1.75 v -4 C 16.745 13.536 15.964 12.755 15 12.75 z m -6 1.5 h 6 c 0.138 0 0.25 0.112 0.25 0.25 v 0.62 h -6.5 V 14.5 c 0 -0.138 0.112 -0.25 0.25 -0.25 z m 6 4.5 H 9 c -0.138 0 -0.25 -0.112 -0.25 -0.25 v -1.88 h 3.5 v 0.26 a 0.75 0.75 0 0 0 1.5 0 v -0.26 h 1.5 v 1.88 c 0 0.138 -0.112 0.25 -0.25 0.25 z M 15.69 4.42 a 3.73 3.73 0 0 0 -7.38 0 C 6.219 4.958 4.755 6.84 4.75 9 v 11.5 c 0 1.243 1.007 2.25 2.25 2.25 h 10 c 1.243 0 2.25 -1.007 2.25 -2.25 V 9 C 19.245 6.84 17.781 4.958 15.69 4.42 z M 12 2.75 c 0.95 0.002 1.796 0.603 2.11 1.5 H 9.89 C 10.204 3.353 11.05 2.752 12 2.75 z m 5.75 17.75 c -0.005 0.412 -0.338 0.745 -0.75 0.75 H 7 C 6.588 21.245 6.255 20.912 6.25 20.5 V 9 C 6.255 7.207 7.707 5.755 9.5 5.75 h 5 c 1.793 0.005 3.245 1.457 3.25 3.25 z"></path>
              </svg>
              <div className={'text-[10px] font-[300]'}>
                <span>Included: </span>
                <span>personal item</span>
              </div>
            </div>

            <div className={'flex flex-col items-end gap-[2px]'}>
              <p className={'text-[18px] font-[700]'}>{price}</p>
              <p className={'text-[10px]'}>Total price for all travelers</p>
            </div>
          </div>

          <Button outlined className={'mt-[10px] w-full py-[8px] font-[600]'}>
            View details
          </Button>
        </div>
      </div>
    </>
  );
};

export default TicketBox;
