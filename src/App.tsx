


import { Container } from "./components/Container"
// import { Logo } from "./components/Logo"
import { Menu } from "./components/Menu";
import "./styles/global.css"
import "./styles/theme.css"

export function App() {
return (
        <>
            <Container>
                <Menu />
            </Container>

            <Container>
                <section>
                    <p>MENU</p>
                </section>
            </Container>

            <Container>
                <section>
                    <p>FORM</p>
                </section>
            </Container>

            <Container>
                <section>
                    <p>FOOTER</p>
                </section>
            </Container>
        </>
    )
}