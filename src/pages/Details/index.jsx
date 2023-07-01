import * as C from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"

const Details = () => {
  return (
    <C.Container>
      <Header />

      <main>
        <C.Content>
          <ButtonText title="Excluir nota" />

          <h1>
            Introdução ao React
          </h1>

          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Autem voluptates cupiditate assumenda ullam ipsum temporibus ad qui vel veritatis! Aperiam, velit.
            Possimus unde similique corporis suscipit sequi facilis hic nemo?
            Possimus unde similique corporis suscipit sequi facilis hic nemo?
          </p>

          <Section title="Links úteis">
            <C.Links>
              <li> <a href="#">https://rocketseat.com.br/</a> </li>
              <li> <a href="#">https://rocketseat.com.br/</a> </li>
            </C.Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />
        </C.Content>
      </main>
    </C.Container>
  )
}

export default Details