import React from 'react'
import Menu from   '../menu/Menu'
import Footer from '../Footer/index'
import styled from 'styled-components'

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 50px;
  padding-left: 5%;
  padding-right: 5%;
`;
const PageDefault = (props)=>{

    return(
        <>
            <Menu> </Menu>
                <Main>
                 {props.children}
                </Main>  
            <Footer></Footer>
        </>
        
    );
}

export default PageDefault