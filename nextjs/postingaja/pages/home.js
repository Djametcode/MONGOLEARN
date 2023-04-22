import axios from "axios";

export default function ProductList({ data }) {
  console.log(data);
  return (
    <div>
      <div className=" flex justify-between sticky top-0 z-10 bg-purple-700 p-4 text-3xl text-white">
        <h1 className=" font-quick">Product List</h1>
        <div className=" flex flex-col justify-center">
          <svg
            className=" w-7 h-7"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </div>
      </div>
      <div className=" font-quick text-white gap-2 flex flex-wrap justify-center mt-2">
        {data.products.map((item) => (
          <div className=" bg-slate-500 p-4 rounded-lg w-40 h-48 overflow-show relative flex flex-col gap-2">
            <p className=" text-base h-7 overflow-scroll">{item.title}</p>
            <div className=" h-11 overflow-scroll">
              <p className=" text-xs">{item.description}</p>
            </div>
            <div className=" flex overflow-scroll m-1 gap-2">
              {item.images.map((item) => (
                <img
                  className=" mix-blend-multiply rounded-xl w-28 h-16 object-cover"
                  src={item}
                  alt=""
                />
              ))}
            </div>
            <div>
              <p>
                {item.price.toLocaleString("ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </p>
            </div>
            <div className="flex">
              <p className=" bg-teal-300 text-black p-1 rounded-lg absolute -top-2 -left-2">
                New
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const response = await axios.get("https://dummyjson.com/products");
  const products = response.data;
  return {
    props: {
      data: products,
    },
  };
}
