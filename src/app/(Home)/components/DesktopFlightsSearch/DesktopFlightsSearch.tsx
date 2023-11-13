import { useState } from 'react';
import { Select } from '@/components/Select/Select';
import { Button } from '@/components/Button/Button';
import { ExchangeIcon } from '@/icons';

export const DesktopFlightsSearch = () => {
  const [flightFilter, setFlightFilter] = useState({
    id: 0,
    from: '',
    to: '',
    date: '',
  });

  const [airports, setAirports] = useState(['nyw', 'fwd']);

  return (
    <div className="bg-booking-yellow-300 relative z-10 mx-auto mt-[-20px] hidden w-full max-w-[1100px] flex-col gap-[8px] rounded-[8px] p-[4px] lg:flex ">
      <div
        key={flightFilter.id}
        className="flex w-full flex-col items-center lg:flex-row"
      >
        <div className="border-booking-yellow-300 w-1/3 border-r">
          <Select
            placeholder="where from?"
            options={airports.map((item) => ({
              label: item,
              value: item,
            }))}
            value={flightFilter.from}
          />
        </div>

        <div className="border-booking-yellow-300 ml-1 border-r">
          <button className="flex items-center justify-center rounded-[4px] bg-white p-[10px]">
            <ExchangeIcon />
          </button>
        </div>

        <div className="border-booking-yellow-300  mx-1 w-1/3 border-r">
          <Select
            placeholder="where to?"
            options={airports.map((item) => ({
              label: item,
              value: item,
            }))}
            value={flightFilter.to}
          />
        </div>

        <div className="flex w-1/3 items-center gap-[4px]">
          <div className="border-booking-yellow-300 w-3/4 border-r">
            <input
              type="date"
              className="h-[36px] w-full rounded-[4px]"
              value={flightFilter.date}
            />
          </div>

          <Button className="max-h-[36px]">Search</Button>
        </div>
      </div>
    </div>
  );
};
