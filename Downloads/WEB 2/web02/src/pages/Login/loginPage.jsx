import { Link } from "react-router-dom";
import { Title, Input, Button, ContainerInput, Label, Container } from "/src/Styles/Style";

function Login () {

    return (
        <>
            <Container>
            <Title>Login</Title>
            <form>
               <ContainerInput><Label htmlFor="email">Email:</Label><Input type="email" id="email" name="email" placeholder="Informe seu email" pattern="[a-zA-Z0-9.@]+" title="caracteres especiais não são permitidos, somente '@' '.' " required/></ContainerInput>
               <ContainerInput><Label htmlFor="password">Senha:</Label><Input type="password" id="password" name="senha" placeholder="Informe sua senha"  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="A senha deve conter pelo menos uma letra maiúscula, uma minúscula, um número e um caractere especial." minLength={8} maxLength={20} required/></ContainerInput>
                <Button>Acessar</Button><br /> <br />
           </form>
            <Link to="/cadastro">Não tenho Cadastro</Link><br />
            {/* <Link> Esqueci minha senha</Link> */}
            </Container>
        </>
    )
}

export default Login