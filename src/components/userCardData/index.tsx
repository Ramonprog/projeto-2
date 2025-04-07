import { Container, UserImage, UserInfo } from "./styles";

interface UserCardDataProps {
  name: string;
  bio?: string;
  url: string;
}

export function UserCardData({ name, bio, url }: UserCardDataProps) {
  return (
    <Container>
      <UserImage src={url} alt="User Avatar" />
      <UserInfo>
        <h3>{name}</h3>
        <p>{bio}</p>
      </UserInfo>
    </Container>
  );
}