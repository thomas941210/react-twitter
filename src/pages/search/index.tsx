import { useState } from "react";
import PostBox from "components/posts/PostBox";
import { PostProps } from "pages/home";
import useTranslation from "hooks/useTranslation";

export default function SearchPage() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const onChange = () => {};
  const t = useTranslation();
  return (
    <div className="home">
      <div className="home__top">
        <div className="home__title">
          <div className="home__title-text">Search</div>
        </div>
        <div className="home__search-div">
          <input
            type="text"
            className="home__search"
            placeholder={t("SEARCH_HASHTAG")}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="post">
        {posts?.length > 0 ? (
          posts?.map((post) => <PostBox post={post} key={post.id} />)
        ) : (
          <div className="post__no-posts">
            <div className="post__text">{t("NO_POSTS")}</div>
          </div>
        )}
      </div>
    </div>
  );
}