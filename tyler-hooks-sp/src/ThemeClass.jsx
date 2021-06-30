import React from 'react'
import './styleTheme.css'

/*
  INSTRUCTIONS:
  Convert the code below from a Class component
  using setState to a function component using
  the useState Hook.
*/

class ThemeClass extends React.Component {
  state   = {
    theme: 'light',
  }
  toDark  = () => this.setState({ theme: 'dark' })
  toLight = () => this.setState({ theme: 'light' })

  render() {
    const { theme } = this.state

    return (
      <div className={theme}>
        {theme === 'light'
         ? <button onClick={this.toDark}>🔦 class</button>
         : <button onClick={this.toLight}>💡 class</button>}
      </div>
    )
  }
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Theme/>, rootElement)

export default ThemeClass
