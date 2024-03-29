import React from "react";
import Header from './Header';
import {Global, css} from '@emotion/core';


const Layout = props => {
    return (
        <>
            <Global
            style={css`
                  :root{
                    --gris: #222222;
                    --verde: #6f6
                    --azul: #109dfa
                  }
                  html{
                    font-size: 62.5%;
                    box-sizing: border-box;
                  }
                  *, *:before, *:after {
                    box-sizing: inherit;
                  }
                  body{
                    font-size: 1.6rem;
                    line-height: 1.5;
                  }
                  h1,h2,h3{
                    margin: 0 0 2rem 0;
                    line-height:1.5;
                  }
                  ul{
                    list-style: none;
                    margin: 0;
                    padding: 0;
                  }
                  a{
                    text-decoration: none;
                  }
            `
            }/>            
            <Header/>
            <main>
                {props.children}
            </main>
        </>
    );
}

export default Layout;