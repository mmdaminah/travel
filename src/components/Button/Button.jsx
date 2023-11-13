import classNames from 'classnames';

export const Button = ({
  children,
  color = 'primary',
  outlined = false,
  className = '',
  isLoading = false,
  ...props
}) => {
  const btnClasses = classNames(
    'btn',
    !outlined && color === 'primary' && 'btn-primary',
    !outlined && color === 'secondary' && 'btn-secondary',
    outlined && 'btn-outlined',
    isLoading && 'btn-primary--loading',
    className,
  );

  return (
    <button className={btnClasses} {...props}>
      {isLoading !== false && <LoadingSpinner />}

      {isLoading !== true && children}
    </button>
  );
};

const LoadingSpinner = () => (
  <svg
    className="spinner"
    width="11"
    height="14"
    viewBox="0 0 11 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.92188 13.6797C8.21875 13.8652 8.58984 13.7539 8.73828 13.4199C10.0742 10.7109 10 7.44531 8.44141 4.81055C6.91992 2.13867 4.13672 0.431641 1.13086 0.208984C0.759766 0.171875 0.5 0.46875 0.5 0.802734V1.99023C0.5 2.28711 0.722656 2.54688 1.01953 2.58398C3.24609 2.76953 5.28711 4.03125 6.40039 5.99805C7.51367 7.92773 7.58789 10.3027 6.66016 12.3438C6.51172 12.6035 6.62305 12.9375 6.88281 13.0859L7.92188 13.6797Z"
      fill="#4A75CB"
    />
  </svg>
);
