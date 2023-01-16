import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { SocialLinksWrapper, VerticalLine } from "./social-links.styles";

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <BsInstagram size={"1.5rem"} />
      <BsGithub size={"1.5rem"} />
      <BsLinkedin size={"1.5rem"} />
      <VerticalLine aria-hidden />
    </SocialLinksWrapper>
  );
};

export { SocialLinks };
