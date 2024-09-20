import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function PageNavigation({
  title,
}) {
  return (
    <div className="sticky top-0 left-0 bg-white w-full shadow-md z-10">
      <div className="container main-container p-5 h-20">
        <div className="inline-flex gap-4 items-center h-full">
          <Link href={"/"}>
            <FontAwesomeIcon icon={faArrowLeft} width={16} />
            <span className="sr-only">Back</span>
          </Link>
          { title && (
            <h1 className="text-lg font-display font-bold text-red-500">
              {title}
            </h1>
          ) }
        </div>
      </div>
    </div>
  )
}
