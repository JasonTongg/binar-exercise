import React from 'react'
import {useSelector} from 'react-redux'

export default function GithubProfile() {
    let data = useSelector(state => state.github);
    
    return (
        <React.Fragment>
            <p>{data.login}</p>
        </React.Fragment>
    )
}
