
import path from 'path'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Page from '../components/Page'
import PageContent from '../components/PageContent'

const port = 8500

const app = express()
app.use(express.static(path.join('public'), { maxage: '30d' }))

app.get('/', function (req, res) {
  const stream = ReactDOMServer.renderToNodeStream(
    <Page>
      <PageContent />
    </Page>
  )
  res.header('Vary', 'Accept-Encoding')
  res.write('<!DOCTYPE html>')
  stream.pipe(res, { end: false })
  stream.on('end', () => res.end())
})

app.listen(port, () => {
  console.log(`Test app for React 16 with <noscript> running on port ${port}`)
})
