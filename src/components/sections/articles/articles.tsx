import { SectionTitle } from "~atoms/section-title";
import { Typography } from "~atoms/typography";
import {
  ArticleCard,
  ArticleInfo,
  ArticleMeta,
  ArticlesList,
  StyledArticles,
} from "./articles.styles";
import ArticlesContent from "../../../content/articles";

const Articles = () => {
  const { title, articles } = ArticlesContent;
  return (
    <StyledArticles>
      <SectionTitle name={title} />
      <ArticlesList>
        {articles.map((article) => (
          <ArticleCard key={article.title}>
            <img src={article.imgUrl} />
            <ArticleInfo>
              <Typography weight="bold">{article.title}</Typography>
              <ArticleMeta>
                <Typography size="s" as="a" href="#">
                  Posted by: {article.postedBy}
                </Typography>
              </ArticleMeta>
              <Typography>{article.description}</Typography>
              <Typography as="a" color="accent" href={article.url}>
                Read More..
              </Typography>
            </ArticleInfo>
          </ArticleCard>
        ))}
      </ArticlesList>
    </StyledArticles>
  );
};

export { Articles };
