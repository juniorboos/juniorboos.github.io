import { Button } from "~atoms/button";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { Typography } from "~atoms/typography";
import {
  BackgroundImage,
  ContactInfo,
  ContactInfoItem,
  FormWrapper,
  StyledCard,
  StyledContact,
} from "./contact.styles";

const Contact = () => {
  return (
    <StyledContact>
      <StyledCard>
        <FormWrapper>
          <Typography weight="bold" size="l" color="contrast">
            Get In Touch!
          </Typography>
          <form action="">
            <input
              type="email"
              placeholder="Enter your email"
              aria-describedby="emailHelp"
              required
            />
            <textarea
              name="contact-message"
              id=""
              cols={30}
              rows={6}
              placeholder="Message"
            />
            <Button type="submit" variant="secondary">
              Send Message
            </Button>
          </form>
        </FormWrapper>
        <ContactInfo>
          <ContactInfoItem>
            <HiOutlineLocationMarker size={24} />
            <div>
              <Typography size="m" color="contrast" weight="bold">
                Location
              </Typography>
              <Typography color="contrast">
                Leiria, Portugal, 2410-170
              </Typography>
            </div>
          </ContactInfoItem>
          <ContactInfoItem>
            <AiOutlinePhone size={24} />
            <div>
              <Typography size="m" color="contrast" weight="bold">
                Phone Number
              </Typography>
              <Typography color="contrast">(351) 913 020 410</Typography>
            </div>
          </ContactInfoItem>
          <ContactInfoItem>
            <AiOutlineMail size={24} />
            <div>
              <Typography size="m" color="contrast" weight="bold">
                Email Address
              </Typography>
              <Typography color="contrast">miltonboosj@gmail.com</Typography>
            </div>
          </ContactInfoItem>
        </ContactInfo>
      </StyledCard>
      <BackgroundImage src="" alt="" />
    </StyledContact>
  );
};

export { Contact };
