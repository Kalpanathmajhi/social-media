import React from "react";
import { FaHeart } from "react-icons/fa";
import { IoPaperPlane } from "react-icons/io5";
import ConfigFunc from "../context/ConfigFunc";
import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";

const PostComp = ({ post }) => {
  const { formatTime } = ConfigFunc();
  return (
    <div className="p-5 rounded-[26px] shadow-md bg-slate-100 flex flex-col">
      <div className="flex items-center gap-2">
        <img
          src={post?.user_photo}
          alt={post?.created_by}
          className="w-12 h-12 object-cover rounded-[50%]"
        />
        <div className="flex flex-col gap-1 text-xs">
          <h3 className="text-base font-bold">{post?.created_by}</h3>
          <p className="text-gray-500">{formatTime(post?.created_at)}</p>
        </div>
      </div>
      <p className="text-lg mt-5 font-bold">{post?.title}</p>
      <div className="h-[200px] sm:h-[250px] flex flex-wrap gap-2 w-full mt-7">
        <Swiper
          spaceBetween={10}
          loop={false}
          centeredSlides={false}
          pagination={{
            clickable: true,
          }}

          slidesPerView={post?.post_url.length > 1 ? 1.5 : 1}
          slidesPerGroup={1}
          modules={[Pagination]}
          className={`mySwiper h-full w-full overflow-hidden`}
        >
          {post?.post_url.map((link, index) => (
            <SwiperSlide key={index} className="w-full">
              {link.includes(".mp4") ? (
                <video
                  src={link}
                  width="100%"
                  className="w-full h-full"
                  controls
                  loop
                  autoPlay={false}
                />
              ) : (
                <img
                  src={link}
                  alt={index}
                  className="w-full h-full rounded-xl object-cover"
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <button>
          <FaHeart className="text-gray-500 text-xl hover:text-red-500" />
        </button>
        <button className="bg-gray-200 text-gray-600 flex items-center gap-1 rounded-[30px] py-2 px-5 text-lg shadow-sm hover:shadow-md transition-all hover:bg-gray-200">
          <IoPaperPlane size={20} />
          Share
        </button>
      </div>
    </div>
  );
};

export default PostComp;
