type Props = {
  labelText: string;
  labelClassname: string;
  dir: 'ltr' | 'rtl';
  checked: boolean;
};

export const Radio = ({ labelText, labelClassname, dir, checked }: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/label-has-associated-control
    <label className="relative cursor-pointer">
      <div className="flex w-full items-center gap-x-[8px]" dir={dir}>
        <CheckedRadio isChecked={checked || false} />
        <p className={labelClassname}>{labelText}</p>
      </div>
      <input
        checked={checked}
        type="radio"
        className="absolute left-0 top-0 opacity-0"
      />
    </label>
  );
};

const CheckedRadio = ({ isChecked }: { isChecked: boolean }) => {
  return (
    <div
      className={`relative h-[18px] w-[18px] rounded-full border ${
        isChecked ? 'border-booking-blue-700' : 'border-tanBezan-black-black3'
      }`}
    >
      {isChecked ? (
        <div className="center-absolute bg-booking-blue-700 absolute h-[10px] w-[10px] rounded-full" />
      ) : null}
    </div>
  );
};
