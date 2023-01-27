import { BsInstagram, BsGithub, BsLinkedin } from "react-icons/bs";
import { SocialLinksWrapper } from "./social-links.styles";

const SocialLinks = () => {
  return (
    <SocialLinksWrapper>
      <BsInstagram size={"1.5rem"} />
      <BsGithub size={"1.5rem"} />
      <BsLinkedin size={"1.5rem"} />
    </SocialLinksWrapper>
  );
};

export { SocialLinks };
