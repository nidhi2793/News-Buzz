import "./NewsContent.css";
import { Button, Container } from "@mui/material";
import googlePlay from "../../assets/google.png";
import appleStore from "../../assets/apple.png";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = ({ newsArray, newsResult, news, setNews }) => {
  return (
    <Container maxWidth="lg">
      <div className="content">
        {newsArray.slice(0, news).map((newsItem) => (
          <NewsCard newsItem={newsItem} key={newsItem.title} />
        ))}

        {newsArray.length > news && (
          <Button
            variant="primary"
            onClick={() => setNews(news + 10)}
            style={{ color: "#DFA878" }}
          >
            Load More
          </Button>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;
