import { IconType } from "@react-icons/all-files/lib";
import Anchor from "~atoms/anchor";
import { SocialMediaWrapper } from "./social-links.styles";

interface Link {
  Icon: IconType;
  name: string;
  url: string;
}

interface SocialMediaProps {
  links: Link[];
}

const SocialMedia = ({ links }: SocialMediaProps) => {
  return (
    <SocialMediaWrapper>
      {links.map(({ url, name, Icon }) => (
        <Anchor href={url} key={url} aria-label={`Link to ${name}`}>
          {/* <Icon size="1.5rem" aria-hidden /> */}
        </Anchor>
      ))}
    </SocialMediaWrapper>
  );
};

export { SocialMedia };
