import * as C from "./styles"
import { FiPlus, FiSearch } from "react-icons/fi"

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"

const Home = () => {
  return (
    <C.Container>
      <C.Brand>
        <h1>Rocketnotes</h1>
      </C.Brand>

      <Header />

      <C.Menu>
        <li> <ButtonText title="Todos" isActive /> </li>
        <li> <ButtonText title="React" /> </li>
        <li> <ButtonText title="Nodejs" /> </li>
      </C.Menu>

      <C.Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </C.Search>

      <C.Content>
        <Section title="Minhas Notas">
          <Note data={{
            title: "React", 
            tags: [
              { id: "1", name: "react" },
              { id: "2", name: "rocketseat" },
            ]
          }}
          />
        </Section>
      </C.Content>

      <C.NewNote to="/new">
        <FiPlus />
        Criar Nota
      </C.NewNote>

      
    </C.Container>
  )
}

export default Home