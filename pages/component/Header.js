import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>Magang Kampus Merdeka</title>
      <meta name="title" content="Magang Kampus Merdeka" />
      <meta
        name="description"
        content="Merupakan website yang berisi lowongan yang dibuka dari perusahaan yang menjadi partner program Magang Kampus Merdeka periode Januari-Juni 2022.
            "
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://magangmerdeka.vercel.app/" />
      <meta property="og:title" content="Magang Kampus Merdeka" />
      <meta
        property="og:description"
        content="Merupakan website yang berisi lowongan yang dibuka dari perusahaan yang menjadi partner program Magang Kampus Merdeka periode Januari-Juni 2022.
            "
      />
      <meta
        property="og:image"
        content="https://magangmerdeka.vercel.app/meta.jpg"
      />
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://magangmerdeka.vercel.app/"
      />
      <meta property="twitter:title" content="Magang Kampus Merdeka" />
      <meta
        property="twitter:description"
        content="Merupakan website yang berisi lowongan yang dibuka dari perusahaan yang menjadi partner program Magang Kampus Merdeka periode Januari-Juni 2022.
            "
      />
      <meta
        property="twitter:image"
        content="https://magangmerdeka.vercel.app/meta.jpg"
      ></meta>
      <script async src="https://cdn.splitbee.io/sb.js"></script>
    </Head>
  );
}
