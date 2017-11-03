
import React from 'react'

const Page = props => (
  <html>
    <head>
      <title>Test</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
    </head>
    <body>
      <div id='react-root'>
        { props.children }
      </div>
      <script src='/client.js' />
    </body>
  </html>
)

export default Page
