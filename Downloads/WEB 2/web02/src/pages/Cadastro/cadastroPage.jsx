import { Link } from "react-router-dom"
import { Title, Input, ContainerInput, Txt, Label, ContainerCheckBox, Container, RLabel } from "/src/Styles/Style"
import { Rbutton } from "./styles"
function Cadastro () {
    return (
        <>
        <Container>
            <Title>Cadastro de Cliente</Title>
            <form>
                <ContainerInput><Label htmlFor="id">Codigo:</Label> <Input type="text" name="codigo" id="id" maxLength={10} required /> </ContainerInput>
                <ContainerInput><Label htmlFor="name">Nome:</Label> <Input type="text" name="nome" id="name" placeholder="Informe seu nome completo" minLength={3} maxLength={50} required /> </ContainerInput>
                <ContainerInput><Label htmlFor="email">Email:</Label> <Input type="email" name="email" id="email" placeholder="Informe seu email" pattern="[a-zA-Z0-9.@]+" title="caracteres especiais não são permitidos, somente '@' '.' " maxLength={50} required/> </ContainerInput>
                <ContainerInput><Label htmlFor="phone">Telefone:</Label> <Input type="tel" name="telefone" id="phone" placeholder="Ex: 0 0000-0000" pattern="[0-9]{4,5}-[0-9]{4}"/> </ContainerInput>
                <ContainerInput><Label htmlFor="doc">Documento:</Label> <Input type="number" name="documento" id="doc" minLength={8} maxLength={20} required /> </ContainerInput>
                <ContainerInput><Label htmlFor="address">Endereço:</Label> <Txt rows={5} cols={50} name="endereço" id="address" pattern="[\w] {10,200}" required></Txt> </ContainerInput>
                <ContainerInput><Label htmlFor="password">Senha:</Label> <Input type="password" name="senha" id="password" placeholder="Informe sua senha"  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial." minLength={8} maxLength={20} required/> </ContainerInput>
                <ContainerInput><Label htmlFor="confirmPassword">Confirmar senha:</Label> <Input type="password" name="confirmacaoSenha" id="confirmPassword" placeholder="Informe sua senha"  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Deve corresponder a sua senha" minLength={8} maxLength={20} required/> </ContainerInput>
                <ContainerCheckBox><Input type="checkbox" id="receiveOfers" /><RLabel htmlFor="receiveOfers">Autorizo o envio de mensagens e ofertas</RLabel> </ContainerCheckBox>
                <Rbutton id="botãoCriar">Criar</Rbutton>
                {/* <input type="submit" id="Criar" /> */}
            </form>
            <Link to="/">Voltar para a pagina de login</Link>
        </Container>
        </>
    )
}

export default Cadastro