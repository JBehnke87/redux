import fetchMock from 'fetch-mock'
import ReactDOM from 'react-dom'
import Item from './Item'

describe('Fetch-Mock-Test', () => {
  afterEach(() => {
    fetchMock.restore()
  })

  it('renders without error', async () => {
    fetchMock.get('https://myURL', [
      {
        id: 1,
        name: "I am a Item",
      },
    ])

    const div = document.createElement('div')

    const response = await fetch('https://myURL');
    const json = await response.json();
    console.log(json)

    ReactDOM.render( json.map((el, i) => <Item key={i} item={el} />) , div)
  })
})