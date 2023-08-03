import { useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import NewsContent from "./components/NewsContent/NewsContent";
import axios from "axios";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResult, setNewsResult] = useState();
  const [news, setNews] = useState(10);

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
      );
      setNewsArray(news.data.articles);
      setNewsResult(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newsApi();
  }, [category, newsResult, news]);

  return (
    <div>
      <Nav setCategory={setCategory} />
      <NewsContent
        news={news}
        setNews={setNews}
        newsArray={newsArray}
        newsResult={newsResult}
      />
      <Footer />
    </div>
  );
}

export default App;
