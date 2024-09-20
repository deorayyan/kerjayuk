import { faArrowRight, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function NotificationCard({
  url = "#",
  type,
  status,
  viewed,
  title,
  description,
  time,
}) {
  const icons = {
    "reimbursement": "coins.svg",
    "sickness": "pill.svg",
    "overtime": "alarm-clock.svg"
  }
  const statusIcons = {
    approved: faCheck,
    pending: faArrowRight,
    rejected: faXmark
  }
  const statusColors = {
    approved: "bg-green-500",
    pending: "bg-blue-500",
    rejected: "bg-red-500"
  }
  return (
    <Link href={url} className={`px-5 py-4 block ${!viewed && "bg-blue-100"}`}>
      <div className="flex container main-container gap-4">
        <div>
          <div className="relative flex justify-center items-center h-12 w-12 rounded-lg bg-gradient-to-br from-[#FF0014] to-[#D20068] shadow-md">
            <Image
              src={`/assets/images/illustrations/${icons[type]}`}
              width={26}
              height={26}
              alt=""
            />
            <div className={`flex items-center justify-center absolute -bottom-1.5 -right-1.5 w-5 h-5 rounded-full text-white ${statusColors[status]}`}>
              <FontAwesomeIcon icon={statusIcons[status]} width={10} />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1">
          <div className="flex justify-between">
            <h2 className="font-bold text-sm mb-1">{title}</h2>
            <p className="text-xs font-bold opacity-40">{time}</p>
          </div>
          <div className="text-sm">
            {description}
          </div>
        </div>
      </div>
    </Link>
  )
}