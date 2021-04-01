import reducer from './messageReducer'

import deepFreeze from 'deep-freeze'

describe('reducerTest', () => {
    const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
          message: "nein"
        })
    })

    it('should handle UPDATE_MESSAGE', () => {
        const currentState = { message: "nein" }
        deepFreeze(currentState)

        expect(
            reducer(currentState, {
                type: UPDATE_MESSAGE,
                payload: "ja"
            })
        ).toEqual({message: "ja"})
    })
})