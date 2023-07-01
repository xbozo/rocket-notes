import * as C from "./styles"

import { Link } from "react-router-dom"

import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"

const New = () => {
  return (
    <C.Container>
      <Header />

      <main>
        <C.Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <TextArea placeholder="Observações" />

          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem $isNew={true} />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem $isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar" />
        </C.Form>
      </main>

    </C.Container>
  )
}

export default New