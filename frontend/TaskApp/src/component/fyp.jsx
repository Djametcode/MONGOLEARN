const List = ({ data }) => {
  const { username, address, secret, date } = data;
  const formatdate = date.split("T")[0];
  console.log(formatdate);
  return (
    <div className=" bg-wave flex flex-col p-4">
      <div className=" flex justify-between bg-slate-400/30 mb-2 rounded-lg">
        <div className=" w-full pb-4 p-2">
          <p>Dari : {username} </p>
        </div>
        <div className=" w-full flex gap-3 p-2">
          <p>{address}</p>
          <p>{formatdate}</p>
        </div>
      </div>
      <div className=" bg-slate-400/30 p-2 pb-48 rounded-xl">
        <p>{secret}</p>
      </div>
    </div>
  );
};

const ForYouPage = ({ data }) => {
  const result = data.map((item) => <List key={item._id} data={item} />);
  return <div className=" text-white">{result}</div>;
};

export default ForYouPage;
