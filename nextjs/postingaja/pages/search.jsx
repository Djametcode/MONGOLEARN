import Layout from "@/components/layout";

export default function Search() {
  return (
    <div className=" h-full flex flex-col justify-center text-white">
      <h1>Update soon</h1>
    </div>
  );
}

Search.getlayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
