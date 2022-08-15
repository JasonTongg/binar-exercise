import {combineReducers} from 'redux'
import person from './person'
import github from './Github'

export default combineReducers({
    person,
    github
});