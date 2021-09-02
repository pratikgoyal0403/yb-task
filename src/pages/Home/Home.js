import classes from "./Home.module.css";
import Card from "../../components/Card/Card";
import { useSelector } from "react-redux";
import { useState } from "react";
import Spinner from "../../components/spinner/Spinner";

export default function Home() {
  const [page, setPage] = useState(1);
  const scrollHandler = (e) => {
    const totalScrollableHeight = e.target.scrollHeight;
    const scrolledFromTop = e.target.scrollTop;
    const containerHeight = e.target.clientHeight;
    if (
      Math.floor(containerHeight + scrolledFromTop) ===
      Math.floor(totalScrollableHeight)
    ) {
      setPage((prevValue) => prevValue + 1);
    }
  };
  const posts = useSelector((state) => state.posts);
  return (
    <div className={classes.pageContainer} onScroll={scrollHandler}>
        {!posts.length && <Spinner />}
      {!!posts.length &&
        posts
          .slice(0, page * 20)
          .map((post) => <Card {...post} key={post.id} />)}
    </div>
  );
}
