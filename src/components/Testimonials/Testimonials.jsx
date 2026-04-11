import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Heading from "../Heading/Heading";
import { IoIosArrowBack, IoIosArrowForward, IoMdStar } from "react-icons/io";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpg";

const Testimonials = () => {
  return (
    <section>
      <div className="max-w-350 mx-auto px-10 py-20">
        <Heading highlight="Customers" heading="Saying" />

        <div className="flex justify-end py-5 gap-x-3">
          <button className="custom-prev text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-all duration-300">
            <IoIosArrowBack />
          </button>

          <button className="custom-next text-2xl text-zinc-800 rounded-lg w-11 h-11 bg-zinc-100 flex justify-center items-center hover:bg-gradient-to-b hover:from-orange-400 hover:to-orange-500 hover:text-white cursor-pointer transition-transform duration-200">
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1, spaceBetween: 20
            },
            768: {
              slidesPerView: 2, spaceBetween: 20
            },
            1024: {
              slidesPerView: 3, spaceBetween: 20
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => {
            return (
              <SwiperSlide className="bg-zinc-100 rounded-xl p-8" key={item.id}>
                <div className="flex items-center gap-x-5">
                  <div className="w-16 h-16 rounded-full overflow-hidden outline-2 outline-orange-500 outline-offset-4">
                    <img 
                    className="w-full h-full object-cover"
                    src={item.image} />
                  </div>

                  <div className="">
                    <h5 className="text-xl font-bold">{item.name}</h5>
                    <p className="text-zinc-600">{item.profession}</p>
                    <span className="flex text-orange-500 mt-1 text-xl gap-x-0.5">
                      {Array.from({ length: item.rating }, (_, index) => (
                        <IoMdStar />
                      ))}
                    </span>
                  </div>
                </div>

                <div className="mt-10 min-h-[15vh]">
                  <p className="text-zinc-600">{item.para}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;

const review = [
  {
    id: 1,
    name: "John Doe",
    profession: "Food Blogger",
    rating: 5,
    para: "GrOcify has transformed my grocery shopping experience! The user-friendly interface and wide selection of products make it my go-to app for all my grocery needs. Highly recommended!",
    image: customer1,
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Chef",
    rating: 4,
    para: "I love using GrOcify for my grocery shopping. The app is easy to navigate, and the delivery service is reliable. It has saved me so much time and effort. I highly recommend it to anyone looking for a convenient grocery shopping solution.",
    image: customer2,
  },
  {
    id: 3,
    name: "Michael Johnson",
    profession: "Busy Professional",
    rating: 5,
    para: "GrOcify has been a game-changer for me. As a busy professional, I don't have time to go to the grocery store. With GrOcify, I can easily order my groceries online and have them delivered right to my doorstep. It's been a lifesaver!",
    image: customer3,
  },
  {
    id: 4,
    name: "Emily Davis",
    profession: "Health Enthusiast",
    rating: 4,
    para: "GrOcify has made it so convenient for me to get fresh and healthy groceries. The app offers a great selection of organic and specialty products, and the delivery service is prompt. I highly recommend it to anyone looking for a hassle,-free grocery shopping experience.",
    image: customer4,
  },
  {
    id: 5,
    name: "David Wilson",
    profession: "Parent",
    rating: 5,
    para: "GrOcify has been a lifesaver for me as a parent. With two young kids, I don't have the time or energy to go to the grocery store. GrOcify allows me to easily order groceries online and have them delivered right to my doorstep. It's been ,a game-changer for our family!",
    image: customer5,
  },
];
