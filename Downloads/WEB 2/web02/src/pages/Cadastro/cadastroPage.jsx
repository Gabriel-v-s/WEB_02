import { Link } from "react-router-dom"
import { Title, Input, Button } from "/src/Styles/Style"
function Cadastro () {
    return (
        <>
            <Title>Cadastro de Cliente</Title>
            <form>
                Codigo: <Input type="text" name="codigo" id="id" maxLength={10} required />
                Nome: <Input type="text" name="nome" id="name" placeholder="Informe seu nome completo" minLength={3} maxLength={50} required />
                Email: <Input type="email" name="email" id="email" placeholder="Informe seu email" pattern="[a-zA-Z0-9.@]+" title="caracteres especiais não são permitidos, somente '@' '.' " maxLength={50} required/> 
                Telefone: <Input type="tel" name="telefone" id="phone" placeholder="Ex: 0 0000-0000" pattern="[0-9]{4,5}-[0-9]{4}"/> 
                Documento: <Input type="number" name="documento" id="doc" minLength={8} maxLength={20} required />
                Endereço: <textarea rows={5} cols={50} name="endereço" id="address" pattern="[\w] {10,200}" required></textarea>
                Senha: <Input type="password" name="senha" id="password" placeholder="Informe sua senha"  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial." minLength={8} maxLength={20} required/>
                Confirmar senha: <Input type="password" name="confirmacaoSenha" id="confirmPassword" placeholder="Informe sua senha"  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Deve corresponder a sua senha" minLength={8} maxLength={20} required/>
                <Input type="checkbox" id="receiveOfers" />Autorizo o envio de mensagens e ofertas
                <Button id="botãoCriar">Criar</Button>
                {/* <input type="submit" id="Criar" /> */}
            </form>
            <Link to="/">Voltar para a pagina de login</Link>
        </>
    )
}

export default Cadastro