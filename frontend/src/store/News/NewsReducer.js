import {  NEWS } from "./NewsActions"

const initialState = {
  news: []
}

const NewsReducer = ( state = initialState, actions ) => {
  const { type, data } = actions
  let newState = {}

  switch (type) {

    case NEWS:
      newState = Object.assign(
        {}, 
        state, {
          news: data
        }
      )
      break


    default:
      newState = state
      break
  }
  return newState
}

export default NewsReducer
