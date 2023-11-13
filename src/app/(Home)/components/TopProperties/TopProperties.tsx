export const TopProperties = () => {
  return (
    <div className="border-gary-400 mt-[24px] w-full border-b border-t bg-white p-[16px]">
      <h3 className="text-booking-black-700 text-[20px] font-[700]">
        Stay at our top unique properties
      </h3>
      <p className="mt-[4px] font-[300] text-[#474747]">
        From castles and villas to boats and igloos, we have it all
      </p>

      <div className="no-scrollbar mt-[12px] w-full overflow-x-auto">
        <div className="flex gap-[8px] py-[4px]">
          <div className="job-box-shadow rounded-[8px] bg-white">
            <div className="h-[175px] w-[219px] rounded-[8px] ">
              <img
                className="h-full w-full rounded-[4px]"
                src="https://r-xx.bstatic.com/xdata/images/city/263x210/977038.jpg?k=7a972d6549c05a3f19227bdd9be88209cbc57be1dd143dcc20ae7a6addb8d3fb&o="
              />
            </div>
            <div className="px-[8px]">
              <p className="text-booking-black-700 mt-[4px] font-[700]">
                Hamburg
              </p>
              <p className="text-[14px] font-[300] text-gray-600">
                724 properties
              </p>
              <div className="flex items-center gap-[6px] py-[8px]">
                <div className="bg-booking-blue-700 flex h-[24px] w-[24px] items-center justify-center rounded-[4px] text-white">
                  <p className="text-[12px] font-[700]">8.7</p>
                </div>
                <p className="text-[14px] font-[300] text-gray-800">
                  Excellent . 68 reviews
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
