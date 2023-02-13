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
        <li>
          <Anchor href={url} key={url} aria-label={`Link to ${name}`}>
            <Icon size={32} aria-hidden />
          </Anchor>
        </li>
      ))}
    </SocialMediaWrapper>
  );
};

export { SocialMedia };
