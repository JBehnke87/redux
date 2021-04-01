import { render, screen } from '@testing-library/react';
import App from './App';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

test('renders learn react link', () => {
  const store = mockStore({ messageReducer: { message: "nein" }, itemsReducer: [] })
  render(
    <MemoryRouter>
      <Provider store={store} >
        <App />
      </Provider>
    </MemoryRouter>)
  const linkElement = screen.getByText(/Phones/i);
  expect(linkElement).toBeInTheDocument();
});
