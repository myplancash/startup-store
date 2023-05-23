import {
  ContactContainer,
  ContactItem,
  ContactLabel,
  ContactValue,
} from './contact.styles.jsx'

const Contact = ({ contactDetails }) => {
  const {name, email, phone, address, hours } = contactDetails
  
  return (
    <ContactContainer>
      <ContactItem>
        <ContactLabel>Name:</ContactLabel>
        <ContactValue>{name}</ContactValue>
      </ContactItem>

      <ContactItem>
        <ContactLabel>Address:</ContactLabel>
        <ContactValue>{address}</ContactValue>
      </ContactItem>

      <ContactItem>
        <ContactLabel>Email:</ContactLabel>
        <ContactValue>{email}</ContactValue>
      </ContactItem>

      <ContactItem>
        <ContactLabel>Phone:</ContactLabel>
        <ContactValue>{phone}</ContactValue>
      </ContactItem>
      <ContactItem>
        <ContactLabel>Working Hours:</ContactLabel>
        <ContactValue>{hours}</ContactValue>
      </ContactItem>
    </ContactContainer>
  );
};

export default Contact;