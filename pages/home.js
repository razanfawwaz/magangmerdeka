import Navbar from "./component/navbar";
import MagangLists from "./magang";
import Footer from "./component/footer";
import Header from "./component/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <div className="bg-black">
        <div className="max-w-6xl mx-auto px-4 py-4">
          {/* Hero Section */}
          <div className="py-20 hero">
            <h1 className="text-white text-center font-semibold text-6xl">
              Magang Kampus Merdeka
            </h1>
            <p className="pt-8 text-gray-400 text-center text-xl">
              List perusahaan yang menawarkan magang di <br /> Kampus Merdeka
              periode Januari - Juni 2022
            </p>
          </div>
          {/* Search Section */}
          <div className="flex justify-center items-center py-2 w-50">
            <input
              id="search"
              disabled
              type="text"
              placeholder="Searchbar is under development!"
              className="cursor-not-allowed w-3/4 bg-gray-300 rounded-lg px-4 py-2 focus:outline text-black focus:shadow-outline"
            />
          </div>
          {/* List Section */}
          <MagangLists />
        </div>
      </div>
      <Footer />
    </div>
  );
}
