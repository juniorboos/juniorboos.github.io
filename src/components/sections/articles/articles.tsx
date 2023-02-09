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
import { SectionProps } from "types";

const Articles = (props: SectionProps) => {
  const { title, articles } = ArticlesContent;
  return (
    <StyledArticles {...props}>
      <SectionTitle name={title} />
      <ArticlesList>
        {articles.map((article, idx) => (
          <ArticleCard key={`${article.title}-${idx}`}>
            <img src={article.imgUrl} />
            <ArticleInfo>
              <Typography weight="bold">{article.title}</Typography>
              <ArticleMeta>
                <Typography size="s" color="secondary">
                  Posted by: {article.postedBy}
                </Typography>
              </ArticleMeta>
              <Typography>{article.description}</Typography>
              <Typography as="a" color="accent" href={article.url}>
                Read More...
              </Typography>
            </ArticleInfo>
          </ArticleCard>
        ))}
      </ArticlesList>
    </StyledArticles>
  );
};

export { Articles };
