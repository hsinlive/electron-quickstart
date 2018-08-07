import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

const Wrap = styled.div`
text-align: center;
`

class App extends React.Component {
  render() {
    return (
      <div>Hello World</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
