import React from "react";
import { useSocialContext } from "../../context/SocialContext";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

const ProfileInfo = () => {
  const { userInfo, userPosts } = useSocialContext();
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div
        className="w-full h-[200px] md:h-[250px] rounded-b-2xl p-5 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: userInfo?.banner_img
            ? `url(${userInfo?.banner_img?.fileUrl})`
            : "url('https://img.freepik.com/premium-photo/free-photo-background-dark-gradient_854787-16.jpg?semt=ais_hybrid')",
        }}
      >
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:text-gray-300"
        >
          <FaArrowLeftLong size={23} />
        </button>
      </div>
      <div className="py-2 pb-4 px-4">
        {/* Profile Info */}
        <div>
          {/* Profile Img */}
          <div className="flex gap-2 md:gap-4 items-center justify-between relative bottom-10">
            {userInfo &&
              (typeof userInfo.photoUrl === "object" ? (
                <img
                  src={userInfo.photoUrl.fileUrl}
                  alt={userInfo?.name}
                  className="w-28 h-28 rounded-[50%]"
                />
              ) : (
                <img
                  src={userInfo.photoUrl}
                  alt={userInfo?.name}
                  className="w-28 h-28 rounded-[50%]"
                />
              ))}
            <button
              onClick={() => navigate(`/edit/${userInfo?.id}`)}
              className="flex-1 h-fit mt-7 w-full p-2 md:p-3 rounded-3xl border md:border-2 border-gray-500 text-gray-500 font-medium max-w-72 transition-all hover:text-gray-800 hover:border-gray-800"
            >
              Edit Profile
            </button>
          </div>
          {/* Profile Bio */}
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-bold">{userInfo?.name}</h2>
            <p>
              {userInfo?.bio
                ? userInfo?.bio
                : "There is no bio!!. Add your bio."}
            </p>
          </div>
        </div>
        {/* Feeds */}
        <div className="w-full mt-5">
          <h4 className="font-semibold text-2xl">My Posts</h4>
          <div className="gap-5 user--posts--wrapper mt-5">
            {userPosts?.map((post, index) => (
              <div className="w-full h-auto group" key={index}>
                <div
                  style={{ backgroundImage: `url(${post?.post_url[0]})` }}
                  className="w-full min-h-[180px] h-auto object-cover rounded-3xl bg-center bg-cover bg-no-repeat flex justify-center items-center p-5 group-hover:brightness-75 transition-all"
                >
                  <p className="text-white flex items-center gap-1">
                    <FaHeart /> {post?.likes.length}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;