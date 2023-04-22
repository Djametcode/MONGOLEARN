import axios from "axios";

export default function ProductList({ data }) {
  console.log(data);
  return (
    <div>
      <div className=" bg-purple-700 p-4 text-3xl text-white">
        <h1 className=" font-quick">Product List</h1>
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
