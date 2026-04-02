import NewsListItem from "./NewsListItem";

export default function NewsList({ news }) {
  const newsHandler = news.map((item) => (
    <NewsListItem key={item.id} item={item}/>
  ));

  return (
    <>
      {newsHandler}
    </>
  );
}