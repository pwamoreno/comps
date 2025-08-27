"use client";

import { userObj } from "@/lib";
import { BadgeCheck, MessageCircle, User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FullCard = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="max-w-[250px] mx-auto">
      <div className="relative bg-neutral-900 rounded-3xl overflow-hidden shadow-xl">
        {/* Full background image */}
        <div className="relative w-full h-[420px]">
          <Image
            src={userObj.image}
            alt="Profile"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Frosted glass style overlay */}
        <div className="absolute bottom-0 w-full px-4 pb-4 pt-6 bg-gradient-to-t from-black/40 via-black/20 to-transparent backdrop-blur-md mask-to-t">
          <div className="mt-[180px]">
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-semibold text-white">
                {userObj.name}
              </h2>
              <BadgeCheck className="w-5 h-5 text-green-400" />
            </div>
            <p className="text-gray-200 text-sm mt-1">{userObj.bio}</p>

            {/* Stats + Follow */}
            <div className="flex items-center justify-between mt-3 text-gray-200 text-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>{userObj.followers}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle className="w-4 h-4" />
                  <span>48</span>
                </div>
              </div>

              {/* Follow button */}
              <button
                onClick={() => setIsFollowing(!isFollowing)}
                className={`py-2 px-4 rounded-full font-medium transition hover:cursor-pointer ${
                  isFollowing ? "bg-gray-700 text-white" : "bg-white text-black"
                }`}
              >
                {isFollowing ? "Following" : "Follow +"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullCard;
