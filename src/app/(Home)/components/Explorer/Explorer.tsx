export const Explorer = () => {
  return (
    <div className="border-gary-400 mt-[24px] w-full border-b border-t bg-white p-[16px]">
      <h3 className="text-booking-black-700 text-[20px] font-[700]">
        Explore Germany
      </h3>
      <p className="mt-[4px] font-[300] text-[#474747]">
        These popular destinations have a lot to offer
      </p>

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
