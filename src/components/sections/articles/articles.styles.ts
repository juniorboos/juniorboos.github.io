import { styled } from "~stitches";

const StyledArticles = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$8",
});

const ArticlesList = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "$8",
  flexWrap: "wrap",
  marginBottom: "$8",

  "@bp2": {
    flexWrap: "nowrap",
  },
});

const ArticleCard = styled("div", {
  display: "flex",
  flexDirection: "column",
  wordWrap: "break-word",
  backgroundColor: "$backgroundAccent",
  borderRadius: "$1",
  overflow: "hidden",

  boxShadow: "2px 5px 5px rgba(0, 0, 0, 0.5)",

  "& img": {
    width: "100%",
  },

  "@bp2": {
    maxWidth: 360,
  },
});

const ArticleInfo = styled("div", {
  flex: "1 1 auto",
  padding: "$5",
});

const ArticleMeta = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  maxWidth: 250,

  "& a": {
    color: "$textSecondary",
  },
});

export { StyledArticles, ArticlesList, ArticleCard, ArticleInfo, ArticleMeta };
