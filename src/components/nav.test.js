import { render, screen } from '@testing-library/react';
import Nav from './Nav';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import { shallow } from 'enzyme'

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

test('renders learn react link', () => {
    const store = mockStore({ messageReducer: { message: "nein" }, itemsReducer: [] })
    const wrapper = shallow(<Provider store={store} >
        <Nav />
    </Provider>)
    
    expect(wrapper.find('Connect(Nav)')).toHaveLength(1);
});


