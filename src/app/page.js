import {
  faCalendarCheck,
  faClock,
  faRectangleList,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRotateRight,
  faClockRotateLeft,
  faGear,
  faHome,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

import NewsSlider from "@/components/NewsSlider";
import MainHead from "@/components/MainHead";

export default function Home() {
  return (
    <div className="container main-container grid grid-cols-1 pb-28">
      <MainHead />

      {/* Main */}
      <div className="grid grid-cols-1 gap-6">
        {/* Info card */}
        <div className="px-5">
          <h2 className="mb-2">Hi, Good Morning!</h2>
          <div className="p-4 bg-gradient-to-br from-[#FF0014] to-[#D20068] rounded-xl text-white grid grid-cols-1 gap-4 shadow-md">
            {/* Top */}
            <div className="flex justify-between gap-2">
              {/* Left content */}
              <div className="flex gap-3">
                {/* Avatar */}
                <div className="rounded-full w-11 h-11 bg-black"></div>
                <div>
                  <p className="font-bold">Tabay</p>
                  <p className="text-xs italic opacity-80">UI/UX Designer</p>
                </div>
              </div>
              {/* Right content */}
              <div className="text-right">
                <p className="text-xs italic opacity-70">Member since</p>
                <p className="font-bold">01 Juni 2021</p>
              </div>
            </div>
            {/* Botton */}
            <div className="flex justify-between gap-2 items-end">
              <div>
                <p className="text-xs opacity-70">Location</p>
                <p className="font-bold text-sm">Kantor Sahid</p>
              </div>
              <div>
                <p className="text-xs italic opacity-70">ICO</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activity card */}
        <div className="px-5">
          <h2 className="font-bold font-display mb-3">Today's Activity</h2>

          <div className="grid grid-cols-3">
            <div className="grid grid-cols-1 justify-center text-center p-2">
              <div className="text-center mb-1">
                <FontAwesomeIcon
                  icon={faClock}
                  width={22}
                  className="text-red-500 inline-block"
                />
              </div>
              <p className="font-bold text-sm">08:30</p>
              <p className="text-xs">Check In</p>
            </div>
            <div className="grid grid-cols-1 justify-center text-center p-2">
              <div className="text-center mb-1">
                <FontAwesomeIcon
                  icon={faArrowRotateRight}
                  width={22}
                  className="text-red-500 inline-block"
                />
              </div>
              <p className="font-bold text-sm text-red-500">03:00:00</p>
              <p className="text-xs">Working Hours</p>
            </div>
            <div className="grid grid-cols-1 justify-center text-center p-2">
              <div className="text-center mb-1">
                <FontAwesomeIcon
                  icon={faClockRotateLeft}
                  width={22}
                  className="text-red-500 inline-block"
                />
              </div>
              <p className="text-sm">--:--</p>
              <p className="text-xs">Check Out</p>
            </div>
          </div>
        </div>

        {/* News card */}
        <div>
          <div className="px-5">
            <h2 className="font-bold font-display mb-3">PCS News</h2>
          </div>
          <NewsSlider />
        </div>

        {/* Online */}
        <div className="px-5">
          <h2 className="font-bold font-display mb-3">Online</h2>

          <div className="rounded-xl shadow-lg p-3 w-full -gap-4 whitespace-nowrap">
            <div className="inline-block">
              <div className="grid grid-cols-1">
                <div className="w-11 h-11 border-2 border-white bg-black rounded-full"></div>
                <div className="text-center">
                  <p className="text-[10px] font-bold">Jefril</p>
                  <p className="text-[8px]">Sahid</p>
                </div>
              </div>
            </div>
            <div className="inline-block -ml-2.5">
              <div className="grid grid-cols-1">
                <div className="w-11 h-11 border-2 border-white bg-black rounded-full"></div>
                <div className="text-center">
                  <p className="text-[10px] font-bold">Zasami</p>
                  <p className="text-[8px]">BSD</p>
                </div>
              </div>
            </div>
            <div className="inline-block -ml-2.5">
              <div className="grid grid-cols-1 ">
                <div className="w-11 h-11 border-2 border-white bg-black rounded-full"></div>
                <div className="text-center">
                  <p className="text-[10px] font-bold">Sam</p>
                  <p className="text-[8px]">Sahid</p>
                </div>
              </div>
            </div>
            <div className="inline-block -ml-2.5">
              <div className="grid grid-cols-1">
                <div className="w-11 h-11 border-2 border-white bg-black rounded-full"></div>
                <div className="text-center">
                  <p className="text-[10px] font-bold">Aldo</p>
                  <p className="text-[8px]">Sahid</p>
                </div>
              </div>
            </div>

            <div className="inline-block -ml-2.5">
              <div className="grid grid-cols-1">
                <div className="w-11 h-11 border-2 border-white bg-black rounded-full"></div>
                <div className="text-center">
                  <p className="text-[10px] font-bold">Erwin</p>
                  <p className="text-[8px]">Sahid</p>
                </div>
              </div>
            </div>

            <div className="inline-block -ml-2.5">
              <div className="grid grid-cols-1">
                <div className="w-11 h-11 border-2 border-white bg-black rounded-full"></div>
                <div className="text-center">
                  <p className="text-[10px] font-bold">Arye</p>
                  <p className="text-[8px]">BSD</p>
                </div>
              </div>
            </div>
            <div className="inline-block -ml-2.5">
              <div className="grid grid-cols-1 ">
                <div className="w-11 h-11 border-2 border-white bg-black rounded-full"></div>
                <div className="text-center">
                  <p className="text-[10px] font-bold">Risya</p>
                  <p className="text-[8px]">BSD</p>
                </div>
              </div>
            </div>
            <div className="inline-block -ml-2.5">
              <div className="grid grid-cols-1 ">
                <div className="w-11 h-11 border-2 border-white bg-black rounded-full"></div>
                <div className="text-center">
                  <p className="text-[10px] font-bold">Nesha</p>
                  <p className="text-[8px]">WFH</p>
                </div>
              </div>
            </div>
            <div className="inline-block -ml-2.5">
              <div className="grid grid-cols-1 ">
                <div className="w-11 h-11 border-2 border-white bg-gradient-to-br from-[#FF0014] to-[#D20068] rounded-full relative">
                  <div className="absolute text-white w-full h-full grid grid-cols-1 content-center items-center text-center">
                    <p className="text-sm">10</p>
                    <p className="text-[8px]">more</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="bg-white fixed bottom-0 left-0 w-full border-t">
        <div className="container main-container flex justify-between px-5 py-2 w-full">
          <div className="flex gap-8">
            <Link
              href={"/"}
              className="grid grid-cols-1 justify-center text-red-500 gap-1"
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faHome}
                  width={22}
                  className="inline-block"
                />
              </div>
              <p className="font-bold text-xs">Home</p>
            </Link>
            <Link
              href={"/"}
              className="grid grid-cols-1 justify-center text-gray-400 gap-1"
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  width={22}
                  className="inline-block"
                />
              </div>
              <p className="text-xs">Attendance</p>
            </Link>
          </div>
          <div>
            <Link
              href={"/"}
              className="grid grid-cols-1 justify-center text-red-500 gap-1.5"
            >
              <div className="text-center text-white bg-red-500 w-16 h-16 flex items-center justify-center rounded-full -mt-10 shadow-md">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  width={24}
                  className="inline-block"
                />
              </div>
              <p className="font-bold text-xs">Check Out</p>
            </Link>
          </div>
          <div className="flex gap-8">
            <Link
              href={"/"}
              className="grid grid-cols-1 justify-center text-gray-400 gap-1"
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faRectangleList}
                  width={22}
                  className="inline-block"
                />
              </div>
              <p className="text-xs">Form</p>
            </Link>
            <Link
              href={"/"}
              className="grid grid-cols-1 justify-center text-gray-400 gap-1"
            >
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faGear}
                  width={22}
                  className="inline-block"
                />
              </div>
              <p className="text-xs">Settings</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
