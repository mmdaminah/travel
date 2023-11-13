import classNames from 'classnames';

export const Input = ({
  label = null,
  color = 'primary',
  className = '',
  labelClassName = '',
  error,
  ...props
}) => {
  const inputClasses = classNames(
    'input',
    error ? 'input-error' : color === 'primary' && 'input-primary',
    className,
  );

  const labelClasses = classNames('input-label', 'mb-[4px]', labelClassName);

  const errorTextClasses = classNames(
    'input-label',
    'text-booking-red-500',
    'mt-[4px]',
  );

  return (
    <label>
      {label ? <p className={labelClasses}>{label}</p> : <></>}
      <input className={inputClasses} {...props} />
      {error ? (
        <p className={errorTextClasses}>{error.message ?? error}</p>
      ) : (
        <></>
      )}
    </label>
  );
};
