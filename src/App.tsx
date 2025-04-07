import { Input } from "antd"
import { Container, InputArea, TextContent } from "./style"
import { GithubOutlined } from "@ant-design/icons"
import { useState } from "react";
import { useGithubUser } from "./hooks/useGithubUser";
import { SkeletonLoading } from "./components/skeletonloading";
import { NotFoundCard } from "./components/notFoundCard";
import { UserCardData } from "./components/userCardData";

function App() {
  const { Search } = Input;

  const [username, setUsername] = useState("");

  const { data, isLoading, error, refetch } = useGithubUser(username);

  const onSearch = (value: string) => {
    setUsername(value);
    refetch();
  };

  return (
    <Container>
      <TextContent>
        <GithubOutlined style={{ fontSize: 50 }} />
        <h1>Perfil</h1>
        <span>GitHub</span>
      </TextContent>

      <InputArea>
        <Search
          placeholder="Digite um usuário do Github"
          onSearch={onSearch}
          enterButton
        />
      </InputArea>
      {data && (
        <UserCardData
          name={data.name}
          bio={data.bio}
          url={data.avatar_url}
        />
      )}

      {isLoading && <SkeletonLoading />}
      {error && <NotFoundCard />}

    </Container>
  );
}

export default App
