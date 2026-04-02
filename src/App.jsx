import { useState } from "react";
import Header from "./components/Header/Header";
import NewsList from "./components/NewsList";
import "./styles.css";
import { newsData } from "./utils/data";

// export default function App() {
//   const [news, setNews] = useState(newsData);

//   const getkeywords = (event) => {
//     const keywords = event.target.value;

//     const filteredNews = newsData.filter((item) => {
//       return item.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1;
//     });

//     setNews(filteredNews);
//   };

//   return (
//     <>
//       <Header getkeywords={getkeywords} />
//       <NewsList news={news} />
//     </>
//   );
// }
export default function App() {
  const [news, setNews] = useState(newsData);

  const getkeywords = (keywords) => {
    const filteredNews = newsData.filter((item) =>
      item.title.toLowerCase().includes(keywords.toLowerCase())
    );

    setNews(filteredNews);
  };

  return (
    <>
      <Header getkeywords={getkeywords} />
      <NewsList news={news} />
    </>
  );
}