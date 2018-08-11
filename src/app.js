import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import { Avatar } from 'antd'
import './assists/rebase.css'

const Wrap = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Greeting = styled.div`
  padding: 5px;
`

class App extends React.Component {
  render() {
    return (
      <Wrap>
        <Avatar size="large" icon="user" />
        <Greeting>
          Hello World
        </Greeting>
      </Wrap>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
