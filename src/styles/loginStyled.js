import styled from 'styled-components'
import{ NavLink} from 'react-bootstrap';


export const Links = styled(NavLink)`

text-align: center;
display:block;
  justify-content:center;
  align-items:center;
  color:white;
  &:hover {
  {color:#2cb67d};

       
`
export const FOoter = styled.footer`
  display: grid;
  grid-template-columns: repeat(3, 2fr);

  padding-top: 45px;
  background-color:  #232e35;;
  color:white;
  
`;

export const Divs = styled.div`

font-size:30px;
display:block;
line-height : 55px;
color:white;
cursor: pointer;
&:hover {
  {color:#2cb67d};

`;