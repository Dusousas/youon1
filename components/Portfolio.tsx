import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import Cta from './subcomponents/Cta';

// Ativar módulos
export default function Portfolio() {
  return (
    <>
      <section id='portfolio' className='customH bg1 bg-GrayP py-10'>
        <div className='maxWidth'>
          <h1 className="text-[55px] font-bold uppercase text-center outlined-text font-Poppins lg:text-[100px]">
            Portfólio
          </h1>
          <h2 className="text-white mx-auto relative top-[-28px] text-3xl uppercase font-black text-center lg:top-[-46px] lg:text-5xl max-w-[700px]">
            Transformando ideias em realidade digital
          </h2>
          <p className="text-center text-white">
            A primeira impressão é a que fica, tenha um site moderno e exclusivo
          </p>

          {/* CAROUSEL */}
          <article className="mt-12 mx-auto flex items-center flex-col lg:flex-row w-full">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
              autoplay={{ delay: 3000 }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full"
            >
              
              <SwiperSlide className="flex justify-center items-center">
                <a target='_blank' href="https://atelieboho.com" className="flex justify-center">
                  <img
                    src="Boho.png"
                    alt="Projeto 1"
                    className="object-contain h-auto max-w-[90%] lg:max-w-[90%]"
                  />
                </a>
              </SwiperSlide>

              <SwiperSlide className="flex justify-center items-center">
                <a target='_blank' href="voleonilda.vercel.app" className="flex justify-center">
                  <img
                    src="Voleonilda.png"
                    alt="Projeto 2"
                    className="object-contain h-auto max-w-[90%] lg:max-w-[90%]"
                  />
                </a>
              </SwiperSlide>

              <SwiperSlide className="flex justify-center items-center">
                <a target='_blank' href="https://nutri-sooty.vercel.app" className="flex justify-center">
                  <img
                    src="Nutri.png"
                    alt="Projeto 3"
                    className="object-contain h-auto max-w-[90%] lg:max-w-[90%]"
                  />
                </a>
              </SwiperSlide>

              <SwiperSlide className="flex justify-center items-center">
                <a target='_blank' href="https://studio-madam.vercel.app" className="flex justify-center">
                  <img
                    src="madam.png"
                    alt="Projeto 3"
                    className="object-contain h-auto max-w-[90%] lg:max-w-[90%]"
                  />
                </a>
              </SwiperSlide>

              <SwiperSlide className="flex justify-center items-center">
                <a target='_blank' href="https://adv-sage.vercel.app" className="flex justify-center">
                  <img
                    src="Adv.png"
                    alt="Projeto 3"
                    className="object-contain h-auto max-w-[90%] lg:max-w-[90%]"
                  />
                </a>
              </SwiperSlide>

            </Swiper>
          </article>
        
        <Cta />
        </div>
      </section>
    </>
  );
}
