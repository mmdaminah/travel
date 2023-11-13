'use client';
import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { useState } from 'react';
import { langList } from '@/static';
// import { useRouter } from 'next/router';
import LanguageModal from '@/components/languageModal';
import {
  BookingIcon,
  MenuIcon,
  QuestionIcon,
  FacebookIcon,
  GoogleIcon,
  AppleIcon,
} from '@/icons';

// const emailRegex =
//   /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

const LoginPage = () => {
  //   const router = useRouter();

  const [isLangModalOpen, setIsLangModalOpen] = useState(false);

  const [mode, setMode] = useState('email');
  const [step, setStep] = useState(1);

  const [emailInput, setEmailInput] = useState({ value: '', error: '' });

  // const sendEmailOTP = () => {
  //   if (emailInput.value.length > 0 && emailRegex.test(emailInput.value)) {
  //     setEmailInput({ ...emailInput, error: '' });
  //     setStep(2);
  //   } else {
  //     setEmailInput({
  //       ...emailInput,
  //       error: 'Please enter valid email address',
  //     });
  //   }
  // };

  return (
    <>
      {isLangModalOpen ? (
        <LanguageModal exitModal={() => setIsLangModalOpen(false)} />
      ) : null}
      <div className="h-screen w-screen">
        <header className="w-full bg-booking-blue-700">
          <div className="mx-auto flex h-[64px] w-full max-w-[1140px] items-center justify-between px-[16px] py-[8px] lg:h-[68px] lg:px-[32px] lg:pt-[12px]">
            <div>
              <BookingIcon />
            </div>

            <div>
              <div className="lg:hidden">
                <MenuIcon />
              </div>

              <div className="hidden items-center gap-x-[32px] lg:flex">
                <QuestionIcon />
              </div>
            </div>
          </div>
        </header>

        <main className="w-full p-[16px]">
          <div className="mx-auto w-full max-w-[360px] ">
            {step === 1 ? (
              <>
                <p className="mt-12 text-left text-[20px] font-bold text-booking-black-700">
                  Sign in or create an account
                </p>

                {mode === 'email' && (
                  <>
                    <div className="mt-[32px] w-full">
                      <Input
                        className="w-full rounded border px-2 py-1 placeholder:text-left  placeholder:text-[15px] focus:border-2 focus:border-sky-500 focus:outline-none"
                        label="Email address"
                        placeholder="Enter your email address"
                        value={emailInput.value}
                        onChange={(e) =>
                          setEmailInput({
                            ...emailInput,
                            value: e.target.value,
                          })
                        }
                        error={emailInput.error}
                      />
                    </div>

                    <Button
                      className="p- mt-[16px] w-full bg-[#006ce4] px-4 py-2 text-white"
                      // onClick={sendEmailOTP}
                    >
                      Continue with email
                    </Button>
                  </>
                )}

                <div>
                  <div className="relative mt-[26px] w-full border-t border-[#e7e7e7]">
                    <p className="absolute left-[50%] top-[-12px] translate-x-[-50%] whitespace-nowrap bg-[#f5f5f5] px-[8px] text-[14px] text-booking-black-700">
                      or use one of these options
                    </p>
                  </div>

                  <div className="mt-[22px] flex w-full flex-wrap items-center justify-center gap-[16px] px-[36px] sm:mt-[32px] sm:gap-[32px] sm:px-[40px]">
                    <div className="mx-auto flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[4px] border border-[#e7e7e7] sm:h-[72px] sm:w-[72px]">
                      <FacebookIcon />
                    </div>

                    <div className="mx-auto flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[4px] border border-[#e7e7e7] sm:h-[72px] sm:w-[72px]">
                      <GoogleIcon />
                    </div>

                    <div className="mx-auto flex h-[60px] w-[60px] cursor-pointer items-center justify-center rounded-[4px] border border-[#e7e7e7] sm:h-[72px] sm:w-[72px]">
                      <AppleIcon />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-center text-[20px] font-bold text-booking-black-700">
                  Check your inbox
                </p>

                {mode === 'email' && (
                  <>
                    <div className="mt-[32px] w-full">
                      <p className="text-center text-[14px]">
                        {`We've just emailed a verification link to`}{' '}
                        <span className="font-[700]">{emailInput.value}</span>.
                        Once it arrives, it will be valid for 10 minutes.
                      </p>
                    </div>

                    <Button
                      className="mt-[16px] w-full"
                      onClick={() => setStep(1)}
                      outlined
                    >
                      Back to sign in
                    </Button>
                  </>
                )}
              </>
            )}

            <div>
              <div className="mt-[24px] w-full border-b border-t border-[#e7e7e7] py-[16px] text-center text-[12px] font-[300] text-booking-black-700">
                By signing in or creating an account, you agree with our
                <a className="mx-[6px] cursor-pointer text-booking-blue-300">
                  Terms & conditions
                </a>
                and
                <a className="mx-[6px] cursor-pointer text-booking-blue-300">
                  Privacy statement
                </a>
              </div>

              <p className="mt-[16px] text-center text-[12px] font-[300] text-booking-black-700">
                All rights reserved.
              </p>

              <p className="text-center text-[12px] font-[300] text-booking-black-700">
                Copyright (2006 - 2023) - Booking.com™
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LoginPage;
