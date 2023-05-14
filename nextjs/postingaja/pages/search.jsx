import Layout from "@/components/layout";

export default function Search() {
  return (
    <div className=" flex justify-center translate-y-72 text-white">
      <h1>Update soon</h1>
    </div>
  );
}

Search.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
