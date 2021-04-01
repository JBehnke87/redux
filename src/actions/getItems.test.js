import configureMockStore from 'redux-mock-store'
import { FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILED } from './getItems'
import fetchMock from 'fetch-mock'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
fetchMock.get("/getItems",
    [
        {
            "name": "Mediocre Iron Watch",
            "priceInCents": 399,
            "id": 1
        },
        {
            "name": "Heavy Duty Concrete Plate",
            "priceInCents": 499,
            "id": 2
        },
        {
            "name": "Intelligent Paper Knife",
            "priceInCents": 1999,
            "id": 3
        }
    ]

)

const store = mockStore({ messageReducer: { message: "nein" }, itemsReducer: [] });

describe("Test async actions", () => {

    it("fetch items", async () => {
        const expectedActions = [{ type: FETCH_ITEMS_SUCCESS },
        {
            type: FETCH_ITEMS_SUCCESS,
            items: [
                {
                    "name": "Mediocre Iron Watch",
                    "priceInCents": 399,
                    "id": 1
                },
                {
                    "name": "Heavy Duty Concrete Plate",
                    "priceInCents": 499,
                    "id": 2
                },
                {
                    "name": "Intelligent Paper Knife",
                    "priceInCents": 1999,
                    "id": 3
                }
            ]
        }
        ]
        await store.dispatch()

        expect(store.getActions()).toEqual(expectedActions)
    })
})