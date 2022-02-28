import React from "react";
import  {FOoter, Links, Divs}  from "../styles/loginStyled.js";
import { HomeOutlined, LineChartOutlined,UserOutlined } from '@ant-design/icons';



function Footer() {
  return (
    <FOoter>
      <Divs>
        <HomeOutlined style={{fontsize:'80px', display: 'block',margin:'auto'}}/>
        <Links href="/home">Home</Links>
      </Divs>

      <Divs>
      <LineChartOutlined style={{fontsize:'80px', display: 'block',margin:'auto'}} />
        <Links href="/estadisticas">Estadisticas</Links>
      </Divs>


      <Divs>
      <UserOutlined style={{fontsize:'80px', display: 'block',margin:'auto'}} />
        <Links href="/perfil">Perfil</Links>
      </Divs>

    </FOoter>
  );
}

export default Footer;


