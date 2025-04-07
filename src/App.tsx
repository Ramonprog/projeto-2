import { Input } from "antd"
import { Container, InputArea, TextContent } from "./style"
import { GithubOutlined } from "@ant-design/icons"
import { useState } from "react";
import { useGithubUser } from "./hooks/useGithubUser";
import { SkeletonLoading } from "./components/skeletonloading";
import { NotFoundCard } from "./components/notFoundCard";

function App() {
  const { Search } = Input;

  const [username, setUsername] = useState("");

  const { data, isLoading, error, refetch } = useGithubUser(username);
  console.log("🚀 ~ App ~ data:", data)

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

      {isLoading && <SkeletonLoading />}
      {error && <NotFoundCard />}

    </Container>
  );
}

export default App
