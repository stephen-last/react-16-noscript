
import React from 'react'

class PageContent extends React.Component {
  constructor () {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = { myText: 'Testing' }
  }

  handleClick (event) {
    if (event) event.preventDefault()
    this.setState({ myText: 'Text changed!' })
  }

  render () {
    return (
      <div>
        <noscript>
          <img src='https://placeimg.com/300/200/animals' width='300' height='200' />
        </noscript>
        <p><a href='#' onClick={this.handleClick}>Change the text</a></p>
        <p>{this.state.myText}</p>
      </div>
    )
  }
}

export default PageContent
