import styled from 'styled-components'

const Footer = styled.footer`
border-top: 2px solid #fad312;
box-sizing: border-box;
background: #000;

& h3 {
  margin: 0px;
  font-size: 13px;
  color: #999999;
  text-align: center;
  padding: 25px 10px;
}
`

export default function FormFooter() {
  return (
    <Footer>
      <h3>© 2020 © Copyright. All rights Reserved.</h3>
    </Footer>
  )
}
