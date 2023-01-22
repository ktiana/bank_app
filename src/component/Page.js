import styled from "styled-components";

export default function Page({ children }) {
  return <PageTag>{children}</PageTag>;
}

const PageTag = styled.div`
  /* робимо фон градієнтом */
  background: linear-gradient(to top, #80ffdb, #5390d9);
  /* робимо фон на всю ширину */
  width: 100%;
`;
