import ForYouPage from "@/components/foryoupage";

export default function Home() {
  return (
    <div>
      <div className=" bg-slate-300 flex flex-col justify-center   sticky top-0">
        <div className=" flex justify-between pl-11 pr-11">
          <div className=" flex flex-col justify-center h-20">
            <h1 className=" text-2xl">Beranda</h1>
          </div>
          <div className=" flex flex-col justify-center">
            <svg
              className=" w-10 bg-gray-400/40 p-2 rounded-full"
              fill="grey"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div>
        <ForYouPage />
      </div>
    </div>
  );
}
