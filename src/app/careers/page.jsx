'use client';

import { Button } from '@/components/Button/Button';
import { Input } from '@/components/Input/Input';
import { CareersIcon, MenuIcon } from '@/icons';

const CareerPage = () => {
  return (
    <div className="h-screen w-full overflow-x-hidden">
      <header className="w-full bg-booking-blue-700">
        <div className="mx-auto flex h-[64px] w-full max-w-[1163px] items-center justify-between px-[16px] py-[8px] lg:h-[68px] lg:px-[32px] lg:pt-[12px] xl:h-[80px]">
          <div>
            <CareersIcon />
          </div>

          <div>
            <div className="hidden items-center gap-[10px] font-[200] text-white xl:flex">
              <a
                href="#"
                className="rounded-[4px] bg-transparent px-[12px] py-[12px] transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              >
                Teams
              </a>
              <a
                href="#"
                className="rounded-[4px] bg-transparent px-[12px] py-[12px] transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              >
                Locations
              </a>
              <a
                href="#"
                className="rounded-[4px] bg-transparent px-[12px] py-[12px] transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              >
                Life at Booking.com
              </a>
              <a
                href="#"
                className="rounded-[4px] bg-transparent px-[12px] py-[12px] transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              >
                Our Impact
              </a>
              <a
                href="#"
                className="rounded-[4px] bg-transparent px-[12px] py-[12px] transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              >
                Start Your Journey
              </a>
              <a
                href="#"
                className="rounded-[4px] bg-transparent px-[12px] py-[12px] transition-all duration-300 hover:bg-white hover:bg-opacity-10"
              >
                Benefits
              </a>
              <a
                href="#"
                className="rounded-[2px] bg-booking-blue-300 bg-opacity-80 px-[18px] py-[12px] font-[600] transition-all duration-300 hover:bg-white hover:bg-opacity-100 hover:text-booking-blue-700"
              >
                See All Jobs
              </a>
            </div>

            <div className="xl:hidden">
              <MenuIcon />
            </div>
          </div>
        </div>
      </header>

      <section className="w-full">
        <div className="relative h-[70vh] w-full bg-[url(https://careers.booking.com/cdn-cgi/image/format=auto,quality=80,width=2560/https://careersmedia.booking.com/wp-content/uploads/2023/04/21093412/GettyImages-579472304-scaled.jpg)] bg-cover bg-bottom xl:h-[90vh]">
          <div className="absolute bottom-[-40px] left-0 w-full rounded-tr-[48px] bg-booking-blue-700 md:bottom-[-20px] xl:bottom-[-80px] xl:w-[55%] xl:rounded-br-[12px] 2xl:w-[60%] 2xl:rounded-tr-[120px]">
            <div
              className="w-full px-[20px] py-[60px] text-white xl:px-[140px] xl:py-[96px] 2xl:px-[200px] 2xl:py-[80px] 2xl:pl-[300px]"
              data-aos="fade-up"
            >
              <h2 className="text-[26px] font-[800] md:text-[52px]">
                Your Booking.com journey starts here
              </h2>

              <p className="mt-[20px] text-[18px] font-[300] md:text-[24px] xl:mt-[40px]">
                Where do you want to go?
              </p>

              <div className="mt-[20px] flex h-[72px] w-full rounded-[4px] border-[4px] border-booking-yellow-300 bg-white xl:mt-[48px]">
                <div className="h-full w-full p-[8px]">
                  <Input
                    className="duration-400 focuse:!border-[4px] focuse:border-booking-blue-700 h-full w-full border-transparent transition-all placeholder:text-left"
                    placeholder="Search for jobs by title or keyword"
                  />
                </div>
                <div className="bg-booking-blue-800 hidden h-full border-l-[4px] border-booking-yellow-300 xl:block">
                  <Button className="h-full min-w-[110px] rounded-[0]">
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mt-[40px] w-full md:mt-[20px] xl:mt-[80px]">
        <svg
          data-aos="fade-down"
          fill="none"
          viewBox="0 0 1774 884"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-[-80px] z-[1] hidden w-[98%] xl:block"
          data-v-6202187c=""
        >
          <path
            d="M1766.86-23c-56.73,421.61-141.42,1080-524.86,1080c-511.5,0-530.84-380.5-932-380.5c-194.46,0-289.29,103.33-331.28,236"
            className="stroke-[#febb02] stroke-[25px] transition-[stroke-dashoffset]"
            data-v-6202187c=""
            style={{ strokeDasharray: 2767, strokeDashoffset: 0 }}
          ></path>
        </svg>
        <div className="relative z-[10] mx-auto  mt-[16px] w-full max-w-[1160px] pt-[32px] xl:mt-[48px]">
          <h2 className="px-[16px] text-[18px] font-[700] xl:text-[26px]">
            Join our teams
          </h2>
          <div className="scrollbar scrollbar-thumb-booking-blue-700 scrollbar-track-gray-200 scrollbar-thin scrollbar-thumb-rounded-xl max-w-full overflow-x-auto overflow-y-hidden pb-[20px] pt-[40px]">
            <div className="flex min-w-[1400px] items-center justify-center gap-[16px] px-[16px] xl:min-w-0">
              <a
                className={
                  'job-box-shadow relative z-[10] block h-[285px] w-[320px] rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[95%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px] xl:w-[280px]'
                }
              >
                <p className={'text-[12px] font-[600] tracking-wider'}>
                  ENGINEERING
                </p>
                <p
                  className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}
                >
                  Senior Engineering Manager - Horizontal Business Services -
                  Identity Platform
                </p>
                <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

                <svg
                  width="17"
                  height="45"
                  viewBox="0 0 45 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[12px]"
                  data-v-06ad6788=""
                >
                  <path
                    d="M37 1L44 8L37 15.5"
                    className="stroke-booking-blue-300"
                  ></path>
                  <path d="M1 8H44" className="stroke-booking-blue-300"></path>
                </svg>
              </a>

              <a
                className={
                  'job-box-shadow relative z-[10] block h-[285px] w-[320px] rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[95%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px] xl:w-[280px]'
                }
              >
                <p className={'text-[12px] font-[600] tracking-wider'}>
                  ENGINEERING
                </p>
                <p
                  className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}
                >
                  Senior Engineering Manager - Horizontal Business Services -
                  Identity Platform
                </p>
                <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

                <svg
                  width="17"
                  height="45"
                  viewBox="0 0 45 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[12px]"
                  data-v-06ad6788=""
                >
                  <path
                    d="M37 1L44 8L37 15.5"
                    className="stroke-booking-blue-300"
                  ></path>
                  <path d="M1 8H44" className="stroke-booking-blue-300"></path>
                </svg>
              </a>

              <a
                className={
                  'job-box-shadow relative z-[10] block h-[285px] w-[320px] rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[95%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px] xl:w-[280px]'
                }
              >
                <p className={'text-[12px] font-[600] tracking-wider'}>
                  ENGINEERING
                </p>
                <p
                  className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}
                >
                  Senior Engineering Manager - Horizontal Business Services -
                  Identity Platform
                </p>
                <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

                <svg
                  width="17"
                  height="45"
                  viewBox="0 0 45 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[12px]"
                  data-v-06ad6788=""
                >
                  <path
                    d="M37 1L44 8L37 15.5"
                    className="stroke-booking-blue-300"
                  ></path>
                  <path d="M1 8H44" className="stroke-booking-blue-300"></path>
                </svg>
              </a>

              <a
                className={
                  'job-box-shadow relative z-[10] block h-[285px] w-[320px] rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[95%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px] xl:w-[280px]'
                }
              >
                <p className={'text-[12px] font-[600] tracking-wider'}>
                  ENGINEERING
                </p>
                <p
                  className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}
                >
                  Senior Engineering Manager - Horizontal Business Services -
                  Identity Platform
                </p>
                <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

                <svg
                  width="17"
                  height="45"
                  viewBox="0 0 45 17"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mt-[12px]"
                  data-v-06ad6788=""
                >
                  <path
                    d="M37 1L44 8L37 15.5"
                    className="stroke-booking-blue-300"
                  ></path>
                  <path d="M1 8H44" className="stroke-booking-blue-300"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mt-[96px] w-full">
        <section className="relative h-[70vh] w-full bg-[url(https://careers.booking.com/cdn-cgi/image/format=auto,quality=80,width=1920/https://careersmedia.booking.com/wp-content/uploads/2023/04/18101522/DSC6887_Hero-imagery_RT_HiRes.jpg)] bg-cover bg-bottom xl:h-[90vh]">
          <div className="job-box-shadow absolute bottom-[-40px] right-0 hidden w-full rounded-tl-[12px] bg-white md:bottom-[-20px] xl:bottom-[-80px] xl:block xl:w-[55%] xl:rounded-bl-[12px] 2xl:w-[60%] 2xl:rounded-tl-[12px]">
            <div
              className="w-full px-[20px] py-[60px] text-booking-black-700 xl:px-[96px] xl:py-[96px] xl:pr-[220px] 2xl:py-[80px]"
              data-aos="fade-up"
            >
              <h2 className="text-[24px] font-[700]">
                Thousands of experiments departing daily
              </h2>

              <p className="mt-[12px] text-[18px]">
                Every day, we make it easier for people to experience the world.
                Learn more about Mandy, a Solutions Engineer, making a splash in
                our FinTech business unit.
              </p>

              <Button className={'mt-[24px]'}>Read more</Button>
            </div>
          </div>

          <div className="job-box-shadow centerX-absolute absolute bottom-[-260px] block w-[85%] rounded-[12px] bg-white sm:bottom-[-110px] xl:hidden">
            <div
              className="w-full p-[20px] text-booking-black-700"
              data-aos="fade-up"
            >
              <h2 className="text-[24px] font-[700]">
                Thousands of experiments departing daily
              </h2>

              <p className="mt-[12px] text-[18px]">
                Every day, we make it easier for people to experience the world.
                Learn more about Mandy, a Solutions Engineer, making a splash in
                our FinTech business unit.
              </p>

              <Button className={'mt-[24px]'}>Read more</Button>
            </div>
          </div>
        </section>
      </section>

      <section
        className={
          'relative mx-auto mt-[360px] w-full px-[16px] sm:mt-[200px] md:max-w-[70%] xl:mt-[160px]'
        }
      >
        <div className={'centerX-absolute absolute w-screen'}>
          <svg
            fill="none"
            viewBox="0 0 1774 809"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            data-v-6202187c=""
          >
            <path
              d="M-24 687.292C147.04 747.684 354.29 753.55 548 676.765C657.885 633.208 998.481 392.625 1129.34 239.629C1136.51 231.246 1152.9 238.607 1150.74 249.425L1048.7 760.878C1046.57 771.58 1060.62 777.289 1066.64 768.186C1272.67 456.626 1342.12 271.412 1611.73 23.7614C1619.16 16.9373 1630.78 24.1961 1627.95 33.8784C1575.67 212.69 1512.34 468.403 1493.3 664.24C1491.48 682.998 1514.34 692.826 1527.21 679.057C1584.04 618.254 1693.93 503.911 1785 428.315"
              className="stroke-[#febb02] stroke-[25px]"
              data-v-6202187c=""
            ></path>
          </svg>
        </div>
        <h2 className={'text-[18px] font-[700] lg:text-[26px]'}>
          Make an impact
        </h2>

        <p className={'mt-[12px] w-full text-[18px]'}>
          Help us shape the future of travel with our sustainability and
          diversity initiatives.
        </p>

        <Button className={'mt-[24px] min-w-full md:min-w-0'}>
          Learn more about our impact
        </Button>

        <div className="scrollbar scrollbar-thumb-booking-blue-700 scrollbar-track-gray-200 scrollbar-thin scrollbar-thumb-rounded-xl block max-w-full overflow-x-auto overflow-y-hidden pb-[20px] pt-[40px] xl:hidden">
          <div className="flex min-w-[1400px] items-center justify-center gap-[16px] px-[16px] xl:min-w-0">
            <a
              className={
                'job-box-shadow relative z-[10] block h-[285px] w-[320px] rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[95%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px] xl:w-[280px]'
              }
            >
              <p className={'text-[12px] font-[600] tracking-wider'}>
                ENGINEERING
              </p>
              <p className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}>
                Senior Engineering Manager - Horizontal Business Services -
                Identity Platform
              </p>
              <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

              <svg
                width="17"
                height="45"
                viewBox="0 0 45 17"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[12px]"
                data-v-06ad6788=""
              >
                <path
                  d="M37 1L44 8L37 15.5"
                  className="stroke-booking-blue-300"
                ></path>
                <path d="M1 8H44" className="stroke-booking-blue-300"></path>
              </svg>
            </a>

            <a
              className={
                'job-box-shadow relative z-[10] block h-[285px] w-[320px] rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[95%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px] xl:w-[280px]'
              }
            >
              <p className={'text-[12px] font-[600] tracking-wider'}>
                ENGINEERING
              </p>
              <p className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}>
                Senior Engineering Manager - Horizontal Business Services -
                Identity Platform
              </p>
              <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

              <svg
                width="17"
                height="45"
                viewBox="0 0 45 17"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[12px]"
                data-v-06ad6788=""
              >
                <path
                  d="M37 1L44 8L37 15.5"
                  className="stroke-booking-blue-300"
                ></path>
                <path d="M1 8H44" className="stroke-booking-blue-300"></path>
              </svg>
            </a>

            <a
              className={
                'job-box-shadow relative z-[10] block h-[285px] w-[320px] rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[95%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px] xl:w-[280px]'
              }
            >
              <p className={'text-[12px] font-[600] tracking-wider'}>
                ENGINEERING
              </p>
              <p className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}>
                Senior Engineering Manager - Horizontal Business Services -
                Identity Platform
              </p>
              <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

              <svg
                width="17"
                height="45"
                viewBox="0 0 45 17"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[12px]"
                data-v-06ad6788=""
              >
                <path
                  d="M37 1L44 8L37 15.5"
                  className="stroke-booking-blue-300"
                ></path>
                <path d="M1 8H44" className="stroke-booking-blue-300"></path>
              </svg>
            </a>

            <a
              className={
                'job-box-shadow relative z-[10] block h-[285px] w-[320px] rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[95%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px] xl:w-[280px]'
              }
            >
              <p className={'text-[12px] font-[600] tracking-wider'}>
                ENGINEERING
              </p>
              <p className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}>
                Senior Engineering Manager - Horizontal Business Services -
                Identity Platform
              </p>
              <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

              <svg
                width="17"
                height="45"
                viewBox="0 0 45 17"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-[12px]"
                data-v-06ad6788=""
              >
                <path
                  d="M37 1L44 8L37 15.5"
                  className="stroke-booking-blue-300"
                ></path>
                <path d="M1 8H44" className="stroke-booking-blue-300"></path>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-[30px] hidden min-w-[1400px] flex-col items-center justify-center gap-[16px] xl:flex xl:min-w-0">
          <a
            className={
              'job-box-shadow relative z-[10] block h-[285px] w-full rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[98%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px]'
            }
          >
            <p className={'text-[12px] font-[600] tracking-wider'}>
              ENGINEERING
            </p>
            <p className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}>
              Senior Engineering Manager - Horizontal Business Services -
              Identity Platform
            </p>
            <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

            <svg
              width="17"
              height="45"
              viewBox="0 0 45 17"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[12px]"
              data-v-06ad6788=""
            >
              <path
                d="M37 1L44 8L37 15.5"
                className="stroke-booking-blue-300"
              ></path>
              <path d="M1 8H44" className="stroke-booking-blue-300"></path>
            </svg>
          </a>

          <a
            className={
              'job-box-shadow relative z-[10] block h-[285px] w-full rounded-[14px] bg-white px-[24px] py-[36px] text-booking-black-700 transition-all duration-300 hover:scale-[98%] hover:bg-booking-blue-300 hover:text-white xl:h-[280px]'
            }
          >
            <p className={'text-[12px] font-[600] tracking-wider'}>
              ENGINEERING
            </p>
            <p className={'mt-[12px] text-[18px] font-[700] leading-[24px]'}>
              Senior Engineering Manager - Horizontal Business Services -
              Identity Platform
            </p>
            <p className={'mt-[12px]'}>Amsterdam, Netherlands</p>

            <svg
              width="17"
              height="45"
              viewBox="0 0 45 17"
              xmlns="http://www.w3.org/2000/svg"
              className="mt-[12px]"
              data-v-06ad6788=""
            >
              <path
                d="M37 1L44 8L37 15.5"
                className="stroke-booking-blue-300"
              ></path>
              <path d="M1 8H44" className="stroke-booking-blue-300"></path>
            </svg>
          </a>
        </div>
      </section>

      <section className="relative z-10 mt-[96px] w-full">
        <section className="relative h-[70vh] w-full bg-[url(https://careers.booking.com/cdn-cgi/image/format=auto,quality=80,width=1920/https://careersmedia.booking.com/wp-content/uploads/2023/04/18101522/DSC6887_Hero-imagery_RT_HiRes.jpg)] bg-cover bg-bottom xl:h-[90vh]">
          <div className="job-box-shadow absolute bottom-[-40px] right-0 hidden w-full rounded-tl-[12px] bg-white md:bottom-[-20px] xl:bottom-[-80px] xl:block xl:w-[55%] xl:rounded-bl-[12px] 2xl:w-[60%] 2xl:rounded-tl-[12px]">
            <div
              className="w-full px-[20px] py-[60px] text-booking-black-700 xl:px-[96px] xl:py-[96px] xl:pr-[220px] 2xl:py-[80px]"
              data-aos="fade-up"
            >
              <h2 className="text-[24px] font-[700]">
                Thousands of experiments departing daily
              </h2>

              <p className="mt-[12px] text-[18px]">
                Every day, we make it easier for people to experience the world.
                Learn more about Mandy, a Solutions Engineer, making a splash in
                our FinTech business unit.
              </p>

              <Button className={'mt-[24px]'}>Read more</Button>
            </div>
          </div>

          <div className="job-box-shadow centerX-absolute absolute bottom-[-260px] block w-[85%] rounded-[12px] bg-white sm:bottom-[-110px] xl:hidden">
            <div
              className="w-full p-[20px] text-booking-black-700"
              data-aos="fade-up"
            >
              <h2 className="text-[24px] font-[700]">
                Thousands of experiments departing daily
              </h2>

              <p className="mt-[12px] text-[18px]">
                Every day, we make it easier for people to experience the world.
                Learn more about Mandy, a Solutions Engineer, making a splash in
                our FinTech business unit.
              </p>

              <Button className={'mt-[24px]'}>Read more</Button>
            </div>
          </div>
        </section>
      </section>

      <section className="relative mt-[280px] w-full md:mt-[220px]">
        <div
          className={
            'z-1 absolute left-[40px] top-[-290px] hidden w-full lg:block 2xl:top-[-320px]'
          }
        >
          <svg
            fill="none"
            viewBox="0 0 1774 506"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            data-v-6202187c=""
          >
            <path
              d="M-15 -13C20.6773 153.001 142.127 350.714 308.59 534"
              className="stroke-[#febb02] stroke-[25px]"
              data-v-6202187c=""
              style={{ strokeDasharray: 643, strokeDashoffset: 0 }}
            ></path>
          </svg>
        </div>
        <section className="relative relative z-10 h-[70vh] w-full bg-[url(https://careers.booking.com/cdn-cgi/image/format=auto,quality=80,width=2048/https://careersmedia.booking.com/wp-content/uploads/2023/04/10062712/GettyImages-1433189021-1-scaled.jpg)] bg-cover bg-bottom">
          <div className="job-box-shadow centerY-absolute absolute left-0 hidden w-[40%] rounded-r-[12px] bg-white xl:block">
            <div
              className="w-full px-[20px] px-[40px] py-[60px] text-booking-black-700"
              data-aos="fade-up"
            >
              <h2 className="text-[24px] font-[700]">
                Thousands of experiments departing daily
              </h2>

              <p className="mt-[12px] text-[18px]">
                Every day, we make it easier for people to experience the world.
                Learn more about Mandy, a Solutions Engineer, making a splash in
                our FinTech business unit.
              </p>

              <Button className={'mt-[24px]'}>Read more</Button>
            </div>
          </div>
        </section>
      </section>

      <section
        className={
          'w-screen bg-booking-blue-700 p-[20px] text-white xl:py-[96px]'
        }
      >
        <h2
          className={'mx-auto w-full max-w-[1200px] text-[18px] xl:text-[26px]'}
        >
          Voted happiest place to work.
        </h2>

        <div
          className={
            'mx-auto mt-[20px] flex w-full max-w-[1200px] grid-cols-4 flex-col items-center justify-center gap-[20px] xl:mt-[54px] xl:grid xl:gap-[12px]'
          }
        >
          <div
            className={
              'w-full border-b border-[#006ce4] pb-[12px] xl:border-b-0 xl:border-r xl:pr-[12px]'
            }
          >
            <p className={'text-[12px] font-[600] text-[#bad4f7]'}>
              GREAT PLACE TO WORK
            </p>
            <p className={'mt-[12px] font-[700]'}>
              One of the best places to work in the Netherlands
            </p>
            <p className={'mt-[70px] xl:mt-[24px]'}>2023</p>
          </div>
          <div
            className={
              'w-full border-b border-[#006ce4] pb-[12px] xl:border-b-0 xl:border-r xl:pr-[12px]'
            }
          >
            <p className={'text-[12px] font-[600] text-[#bad4f7]'}>
              GREAT PLACE TO WORK
            </p>
            <p className={'mt-[12px] font-[700]'}>
              One of the best places to work in the Netherlands
            </p>
            <p className={'mt-[70px] xl:mt-[24px]'}>2023</p>
          </div>
          <div
            className={
              'w-full border-b border-[#006ce4] pb-[12px] xl:border-b-0 xl:border-r xl:pr-[12px]'
            }
          >
            <p className={'text-[12px] font-[600] text-[#bad4f7]'}>
              GREAT PLACE TO WORK
            </p>
            <p className={'mt-[12px] font-[700]'}>
              One of the best places to work in the Netherlands
            </p>
            <p className={'mt-[70px] xl:mt-[24px]'}>2023</p>
          </div>
          <div className={'w-full pb-[12px] xl:pr-[12px]'}>
            <p className={'text-[12px] font-[600] text-[#bad4f7]'}>
              GREAT PLACE TO WORK
            </p>
            <p className={'mt-[12px] font-[700]'}>
              One of the best places to work in the Netherlands
            </p>
            <p className={'mt-[70px] xl:mt-[24px]'}>2023</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerPage;
