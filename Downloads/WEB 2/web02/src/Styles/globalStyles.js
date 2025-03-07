import { createGlobalStyle } from "styled-components";

export const MyGlobalStyles = createGlobalStyle`
* {
    margin: 1px;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;