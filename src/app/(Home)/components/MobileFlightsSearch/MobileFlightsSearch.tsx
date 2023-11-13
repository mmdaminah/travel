import { useState } from 'react';
import { Select } from '@/components/Select/Select';
import { Button } from '@/components/Button/Button';
import { ExchangeIcon } from '@/icons';

export const MobileFlightSearch = () => {
  const [flightFilter, setFlightFilter] = useState({
    id: 0,
    from: '',
    to: '',
    date: '',
  });

  const [airports, setAirports] = useState(['nyw', 'fwd']);

  return (
    <div className="mt-10 w-full px-[16px] lg:hidden">
      <div className="bg-booking-yellow-300 flex w-full flex-col items-center rounded-[8px] p-[4px] lg:flex-row">
        <div className="flex w-full flex-col gap-[16px]">
          <div key={flightFilter.id}>
            <div className="flex w-full items-center">
              <div className="w-full ">
                <div className="border-booking-yellow-300 w-full border-r">
                  <Select
                    placeholder="where from?"
                    options={airports.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                    value={flightFilter.from}
                  />
                </div>

                <div className="border-booking-yellow-300 w-full border-r">
                  <Select
                    placeholder="where to?"
                    options={airports.map((item) => ({
                      label: item,
                      value: item,
                    }))}
                    valie={flightFilter.to}
                  />
                </div>
              </div>

              <div className="border-booking-yellow-300 border-r">
                <button className="flex h-[72px] items-center justify-center rounded-[4px] bg-white p-[10px]">
                  <ExchangeIcon />
                </button>
              </div>
            </div>

            <div className="border-booking-yellow-300 mt-[4px] w-full border-r">
              <input
                type="date"
                className="h-[36px] w-full rounded-[4px]"
                value={flightFilter.date}
              />
            </div>
          </div>
        </div>

        <Button className="mt-[4px] max-h-[36px] w-full">Search</Button>
      </div>
    </div>
  );
};
