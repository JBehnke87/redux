import React from 'react';
import renderer from 'react-test-renderer';
import Phone1 from './Phone1';
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares)

test('Phone 1 Snapshottest', () => {
    const store = mockStore({ messageReducer: { message: "nein" }, itemsReducer: [] })
    const tree = renderer.create(<Provider store={store} >
        <Phone1 />
    </Provider>).toJSON();
    expect(tree).toMatchSnapshot();
});