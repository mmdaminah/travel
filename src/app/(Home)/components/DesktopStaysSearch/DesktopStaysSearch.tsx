import { useState } from 'react';
import { Select } from '@/components/Select/Select';
import { Button } from '@/components/Button/Button';
import {
  UserIcon,
  ArrowDownIcon,
  BsPlusIcon,
  MinusIcon,
  CalendarIcon,
  BedIcon,
} from '@/icons';
import { DropDown } from '@/components';
import { Calendar } from 'react-multi-date-picker';
import Footer from 'react-multi-date-picker/plugins/range_picker_footer';

export const DesktopStaysSearch = () => {
  const [flightFilter, setFlightFilter] = useState({
    id: 0,
    from: '',
    to: '',
    date: '',
  });

  const [airports, setAirports] = useState(['nyw', 'fwd']);

  return (
    <div className="bg-booking-yellow-300 relative z-10 mx-auto mt-[-20px] hidden w-full max-w-[1100px] flex-col gap-[8px] rounded-[8px] p-[4px] lg:flex">
      <div
        key={flightFilter.id}
        className="flex w-full flex-col items-center lg:flex-row"
      >
        <div className="border-booking-yellow-300 w-1/3 border-r">
          <Select
            placeholder={
              <div className="flex">
                <BedIcon className="mr-5 h-5 w-5" />
                <div>Where are you going?</div>
              </div>
            }
            options={airports.map((item) => ({
              label: item,
              value: item,
            }))}
            value={flightFilter.from}
            styles={{
              control: (base: any) => ({
                ...base,
                padding: '10px',
              }),
              placeholder: (base: any) => ({
                ...base,
                color: 'black',
                fontSize: '0.875rem',
                fontWeight: '600',
              }),
            }}
          />
        </div>

        <div className="border-booking-yellow-300  mx-1 w-1/3 rounded-md border-r bg-white py-2">
          <DropDown
            label={
              <div className="flex w-full items-center justify-between rounded-md px-2 py-2">
                <CalendarIcon className="h-5 w-5" />
                <div className="ml-4 text-sm font-semibold">
                  Check-in Data - Check-out Date
                </div>
                <ArrowDownIcon className="h-5 w-5" />
              </div>
            }
          >
            <div className="absolute top-14">
              <Calendar
                range
                numberOfMonths={2}
                plugins={[
                  <Footer
                    key="key"
                    position="bottom"
                    format="MMM DD"
                    names={{
                      selectedDates: 'Flight information:',
                      from: 'Departure date:',
                      to: 'Return date:',
                      selectDate: 'select',
                      close: 'Close',
                      separator: ',',
                    }}
                  />,
                ]}
              />
            </div>
          </DropDown>
        </div>

        <div className="relative flex w-1/3 items-center gap-[4px] rounded-md bg-white py-2">
          <DropDown
            label={
              <div className="flex w-full items-center justify-between rounded-md px-2 py-2">
                <UserIcon className="h-5 w-5" />
                <div className="ml-4 text-sm font-semibold">
                  2 adults . 0 children . 1 room
                </div>
                <ArrowDownIcon className="h-5 w-5" />
              </div>
            }
          >
            <div className="absolute top-16 rounded-md bg-white p-8 shadow-lg">
              <div className="flex w-[350px] flex-col justify-center">
                <div className="mb-1 flex items-center justify-between">
                  <div>Adults</div>
                  <div className="flex w-[126px] justify-between rounded-md border border-black">
                    <div className="flex cursor-pointer items-center">
                      <MinusIcon className="h-full w-10 px-2 text-[#3f90eb] hover:rounded-l-md hover:bg-sky-100" />
                    </div>
                    <div className="grid-cols-4 px-1 py-2">2</div>
                    <div className="flex cursor-pointer items-center">
                      <BsPlusIcon className="h-full w-10 px-2 text-[#3f90eb] hover:rounded-r-md hover:bg-sky-100" />
                    </div>
                  </div>
                </div>
                <div className="mb-1 flex items-center justify-between">
                  <div>Children</div>
                  <div className="flex w-[126px] justify-between rounded-md border border-black">
                    <div className="flex cursor-pointer items-center">
                      <MinusIcon className="h-full w-10 px-2 text-[#3f90eb] hover:rounded-l-md hover:bg-sky-100" />
                    </div>
                    <div className="grid-cols-4 px-1 py-2">0</div>
                    <div className="flex cursor-pointer items-center">
                      <BsPlusIcon className="h-full w-10 px-2 text-[#3f90eb] hover:rounded-r-md hover:bg-sky-100" />
                    </div>
                  </div>
                </div>
                <div className="mb-1 flex items-center justify-between">
                  <div>Room</div>
                  <div className="flex w-[126px] justify-between rounded-md border border-black">
                    <div className="flex cursor-pointer items-center">
                      <MinusIcon className="h-full w-10 px-2 text-[#3f90eb] hover:rounded-l-md hover:bg-sky-100" />
                    </div>
                    <div className="grid-cols-4 px-1 py-2">1</div>
                    <div className="flex cursor-pointer items-center">
                      <BsPlusIcon className="h-full w-10 px-2 text-[#3f90eb] hover:rounded-r-md hover:bg-sky-100" />
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="border-booking-blue-300 text-booking-blue-300 w-full rounded-md border px-3 py-1 hover:bg-sky-100">
                    Done
                  </Button>
                </div>
              </div>
            </div>
          </DropDown>
        </div>

        <Button className="ml-1 h-full rounded-sm bg-blue-700 px-6 py-4 text-xl font-bold text-white transition-all hover:bg-blue-900 ">
          Search
        </Button>
      </div>
    </div>
  );
};
