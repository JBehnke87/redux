import configureMockStore from 'redux-mock-store'
import { getItems, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILED, FETCH_ITEMS_REQUEST } from './getItems'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe("Test async actions", () => {

    afterEach(() => {
        fetchMock.restore()
    })

    it("FETCH_ITEMS_SUCCESS test", async () => {
        const items = [{ "name": "Mediocre Iron Watch", "priceInCents": 399, "id": 1 },
        { "name": "Heavy Duty Concrete Plate", "priceInCents": 499, "id": 2 },
        { "name": "Intelligent Paper Knife", "priceInCents": 1999, "id": 3 },
        { "name": "Small Aluminum Keyboard", "priceInCents": 2500, "id": 4 },
        { "name": "Practical Copper Plate", "priceInCents": 1000, "id": 5 },
        { "name": "Awesome Bronze Pants", "priceInCents": 399, "id": 6 },
        { "name": "Intelligent Leather Clock", "priceInCents": 2999, "id": 7 },
        { "name": "Ergonomic Bronze Lamp", "priceInCents": 40000, "id": 8 },
        { "name": "Awesome Leather Shoes", "priceInCents": 3990, "id": 9 }]

        fetchMock.get("http://localhost:8082/api/products", items);

        const store = mockStore({ messageReducer: { message: "nein" }, itemsReducer: [] });

        const expectedActions = [{ type: FETCH_ITEMS_REQUEST }, { type: FETCH_ITEMS_SUCCESS, payload: items }];

        return store.dispatch(getItems()).then(() => {
            const storeActions = store.getActions();

            expect(storeActions).toEqual(expectedActions);
        })
    })

    it('FETCH_ITEMS_FAILED test', async () => {

        fetchMock.get("http://localhost:8082/api/products", { throws: Error });

        const expectedActions = [
            { type: FETCH_ITEMS_REQUEST },
            {
                type: FETCH_ITEMS_FAILED,
                payload: Error
            },
        ]
        const store = mockStore({ messageReducer: { message: "nein" }, itemsReducer: [] })

        return store.dispatch(getItems()).then(() => {
            const storeGetActions = store.getActions();

            expect(store.getActions()).toEqual(expectedActions);
        })
    })
})