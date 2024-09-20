import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function MainHead() {
  return (
    <div className="flex justify-between items-center pt-10 p-5">
      <Link href="/">
        <Image
          src={"/assets/images/logo.svg"}
          width={92}
          height={20}
          alt="KerjaYuk!"
        />
        <h1 className="sr-only">KerjaYuk!</h1>
      </Link>
      <Link href="/notification" className="relative">
        <FontAwesomeIcon width={20} icon={faBell} />
        <div className="absolute top-0 right-0 rounded-full w-2.5 h-2.5 border-2 border-white bg-red-500">
          <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"></div>
        </div>
      </Link>
    </div>
  )
}