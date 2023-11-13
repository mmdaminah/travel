import { Button } from '@/components/Button/Button';
import { useEffect, useState } from 'react';

const RoomBox = ({
  title,
  image,
  score,
  scoreTitle,
  reviewCount,
  address,
  level,
  description,
  longDescription,
  distanceDiscription,
  stars,
  price,
}) => {
  const [starsArr, setStarsArr] = useState([]);

  useEffect(() => {
    let temp = [];
    for (let i = 0; i < stars; i++) {
      temp.push(1);
    }
    setStarsArr(temp);
  }, []);

  return (
    <>
      <div
        className={
          'h-full w-full rounded-[12px] border border-gray-300 bg-white p-[8px]'
        }
      >
        <div className={'flex h-full w-full gap-[8px]'}>
          <div className={'lg:min-h-auto min-h-full w-[123px]'}>
            <img
              className={'lg:min-h-auto min-h-full w-full lg:rounded-[8px]'}
              src={image}
            />
          </div>

          <div className={'flex w-full flex-col justify-between gap-[4px]'}>
            <div className={'flex items-center'}>
              <h2 className={'lg:text-booking-blue-300'}>{title}</h2>
              <div className={'flex'}>
                {starsArr.map((item) => (
                  <svg
                    key={Math.random()}
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    className="fill-yellow-300"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className={'flex items-center gap-[4px] lg:hidden'}>
              <div
                className={
                  'bg-booking-blue-700 flex h-[24px] w-[24px] items-center justify-center rounded-[5px] text-[10px] font-[600] text-white'
                }
              >
                {score}
              </div>
              <p className={'flex items-center'}>
                <span>{scoreTitle}</span>
                <span>.</span>
                <span>{reviewCount} reviews</span>
              </p>
            </div>

            <div className={'flex flex-wrap items-center gap-[8px]'}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="lg:hidden"
                viewBox="0 0 16 16"
              >
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              </svg>

              <a
                className={'lg:text-booking-blue-300 text-[12px] lg:underline'}
              >
                {address}
              </a>
              <a
                className={
                  'lg:text-booking-blue-300 hidden text-[12px] lg:block lg:underline'
                }
              >
                Show On Map
              </a>
              <p>{distanceDiscription}</p>
            </div>

            <div className={'border-gray-200 lg:border-l lg:px-[8px]'}>
              {longDescription}
            </div>

            <p className={'w-full text-right text-[18px] font-[700] lg:hidden'}>
              {price}
            </p>
          </div>

          <div
            className={
              'flex flex-col items-center justify-center lg:items-end lg:justify-between'
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="lg:hidden"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>

            <div className={'hidden flex-col justify-end lg:flex'}>
              <div className={'flex items-center justify-end gap-[4px]'}>
                <div className={'flex flex-col items-end'}>
                  <p className={'font-[600]'}>{scoreTitle}</p>
                  <p className={'text-[12px]'}>{reviewCount} reviews</p>
                </div>

                <div
                  className={
                    'bg-booking-blue-700 flex h-[32px] w-[32px] items-center justify-center rounded-[5px] font-[600] text-white'
                  }
                >
                  {score}
                </div>
              </div>
            </div>

            <div className={'hidden flex-col items-end lg:flex'}>
              <p className={'w-full text-right text-[18px] font-[700]'}>
                {price}
              </p>

              <Button className={'whitespace-nowrap'}>See availability</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoomBox;
