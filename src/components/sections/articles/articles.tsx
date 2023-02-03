import { SectionTitle } from "~atoms/section-title";
import { Typography } from "~atoms/typography";
import {
  ArticleCard,
  ArticleInfo,
  ArticleMeta,
  ArticlesList,
  StyledArticles,
} from "./articles.styles";

const Articles = () => {
  return (
    <StyledArticles>
      <SectionTitle name="My articles" />
      <ArticlesList>
        {[...Array(3)].map((_, idx) => (
          <ArticleCard key={idx}>
            <img src="https://cdn-images-1.medium.com/max/800/1*kej2WmeUuzxtY37oqQc_5Q.png" />
            <ArticleInfo>
              <Typography size="m">Article title very long</Typography>
              <ArticleMeta>
                <Typography size="s" as="a" href="#">
                  Posted by: xgeeks
                </Typography>
                {/* <a href="#">likes</a>
                            <a href="#">comments</a> */}
              </ArticleMeta>
              <Typography size="m">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ad
                vel dolorum, iusto velit, minima? Voluptas nemo harum impedit
                nisi.
              </Typography>
              <Typography as="a" color="accent">
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
