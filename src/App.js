import React, { Component } from 'react';
import logo from './logo.svg';
import styled, {keyframes} from 'styled-components';

const spinner = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Wrapper = styled.div`
  text-align: center;
  background-color: red;
`;

const Logo = styled.img`
  animation: ${spinner} infinite ${props => props.time || "10s"} linear;
  height: 80px;
`;

const Header = styled.header`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`;

const Intro = styled.p`
  font-size: large;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo src={logo} className="App-logo" alt="logo" time="2s" />
          <Logo src={logo} className="App-logo" alt="logo" time="5s" />
          <Logo src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </Header>
        <Intro>
          To get started, edit <code>src/App.js</code> and save to reload.
        </Intro>
      </Wrapper>
    );
  }
}

export default App;
