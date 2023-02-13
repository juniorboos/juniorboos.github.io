import { SectionTitle } from "~atoms/section-title";
import { Typography } from "~atoms/typography";
import {
  ArticleCard,
  ArticleInfo,
  ArticleMeta,
  ArticlesList,
} from "./articles.styles";
import ArticlesContent from "../../../content/articles";
import { SectionProps } from "types";
import { HorizontalLine } from "~atoms/horizontal-line";
import { StyledSection, USE_IN_VIEW_THRESHOLD } from "~theme/utils";
import { useInView } from "react-intersection-observer";

const Articles = (props: SectionProps) => {
  const { title, articles } = ArticlesContent;
  const { ref, inView } = useInView({
    threshold: USE_IN_VIEW_THRESHOLD,
  });

  return (
    <StyledSection {...props} ref={ref} inView={inView}>
      <SectionTitle name={title} />
      <ArticlesList>
        {articles.map((article, idx) => (
          <ArticleCard key={`${article.title}-${idx}`}>
            <img
              src={article.imgUrl}
              loading="lazy"
              alt={article.imgAlt}
              width={360}
              height={308}
            />
            <ArticleInfo>
              <Typography weight="bold">{article.title}</Typography>
              <ArticleMeta>
                <Typography size="s">Posted by: {article.postedBy}</Typography>
              </ArticleMeta>
              <HorizontalLine small />
              <Typography>{article.description}</Typography>
              <Typography as="a" color="accent" href={article.url}>
                Read More...
              </Typography>
            </ArticleInfo>
          </ArticleCard>
        ))}
      </ArticlesList>
    </StyledSection>
  );
};

export { Articles };
