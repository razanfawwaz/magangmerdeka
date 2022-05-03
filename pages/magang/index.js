/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

export default function App() {
  const [items, setItems] = useState([]); //state untuk data yang di fetch dari API atau JSON file
  const [visible, setVisible] = useState(6); //state untuk jumlah item yang visible di UI
  const [loading, setLoading] = useState(false); //state untuk menunjukan loading data

  //fungsi handler dari click event di button "load more"
  const handlerLoadMore = () => {
    setVisible((prevValue) => prevValue + 4);
  };

  //fungsi mem-fecth data dari API atau Json file
  const getDataPosts = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/magang");
      const dataPosts = await res.json();
      setItems(dataPosts);
      setLoading(false);
    } catch (err) {
      setLoading(true);
    }
  };

  useEffect(() => {
    getDataPosts();
  }, []);

  return (
    <div className="bg-black py-12 relative max-w-7xl mx-auto px-4 ">
      {loading ? (
        <div className="text-center text-white text-xl">Loading...</div>
      ) : (
        <div className="flex flex-col-reverse grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, visible).map((magangData, index) => (
            <div
              key={index}
              className="rounded-lg p-6 bg-slate-500 backdrop-filter backdrop-blur-xl bg-clip-padding bg-opacity-50 hover:scale-110 transition ease-in-out duration-50"
            >
              <img
                src={magangData.logo}
                alt={magangData.mitra_name}
                className="rounded-full w-10 pt-2"
              />
              <h1 className="text-white text-2xl mt-4">
                {magangData.position}
              </h1>
              <p className="text-gray-400 text-lg mt-2">
                Mitra: {magangData.mitra_name}
              </p>
              <p className="text-gray-400 text-lg mt-2">
                Quota: {magangData.quota}
              </p>
              <p className="text-gray-400 text-lg mt-2">
                Status: {magangData.data_activity}
              </p>
              <p className="text-gray-400 text-lg mt-2">
                Location: {magangData.location}
              </p>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center items-center">
        <button
          className="flex py-6 mt-4 relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center bg-slate-700 hover:bg-slate-600 pointer-events-auto"
          onClick={handlerLoadMore}
        >
          Show More
        </button>
      </div>
    </div>
  );
}
