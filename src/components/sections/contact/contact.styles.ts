import { styled } from "~stitches";

const StyledContact = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$8",
});

const StyledCard = styled("div", {
  position: "relative",
  borderRadius: "$1",
  boxShadow: "1px 2px 6px rgba(173, 181, 189, 0.5)",
  maxWidth: "100%",
  display: "flex",
  margin: "0 auto",
  zIndex: 99,
  background: "#FFF",

  "@bp2": {
    width: "fit-content",
  },

  "@bp3": {
    width: 860,
  },
});

const FormWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$6",
  flexGrow: 1,
  padding: "$5",
  width: 450,
  maxWidth: "100%",

  "& form": {
    display: "flex",
    flexDirection: "column",
    gap: "$4",

    "& input, textarea": {
      color: "$textConstrast",
      backgroundColor: "#FFF",
      border: "1px solid #ced4da",
      borderRadius: "$1",
      transition: "$default",
      padding: "$3",
      resize: "vertical",
    },
  },

  "@bp1": {
    padding: "$8",
  },
});

const ContactInfo = styled("div", {
  display: "none",
  alignSelf: "center",
  minWidth: 350,
  padding: "$8",
  gap: "$6",
  borderLeft: "1px solid #dee2e6",

  "@bp2": {
    display: "flex",
    flexDirection: "column",
  },
});

const ContactInfoItem = styled("div", {
  display: "flex",
  alignItems: "center",
  flexWrap: "nowrap",
  gap: "$3",

  "& svg": {
    width: 40,
    fontSize: 16,
    color: "$primary",
  },

  "& div": {
    flexGrow: 1,
  },
});

const BackgroundImage = styled("img", {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "50%",
});

export {
  StyledContact,
  StyledCard,
  FormWrapper,
  ContactInfo,
  ContactInfoItem,
  BackgroundImage,
};
