import { IconType } from "react-icons/lib";
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
        <a href={url} key={url} aria-label={`Link to ${name}`}>
          <Icon size="1.5rem" aria-hidden />
        </a>
      ))}
    </SocialMediaWrapper>
  );
};

export { SocialMedia };
