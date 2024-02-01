import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Comments from '../Comments'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom';
import { setButton } from '../CommentsSlice'

const configStore = configureMockStore([])


const initialState = {
    reddits: {
        posts: {
                data: {
                    children: [
                        {data: {id: '1', title: 'post title 1', body: 'post body 1',url: 'url1', author: 'author 1', permalink: 'permalink 1'}},
                        {data: {id: '1', title: 'post title 1', body: 'post body 1',url: 'url2', author: 'author 1', permalink: 'permalink 1'}}
                    ]
                },
        },
        searchTerm: '',
        selectedSubreddit: 'r/pics',
    }
}
const initialSearchState = {
    reddits: {
        posts: {
                data: {
                    children: [
                        {data: {id: '1', title: 'post title 1', body: 'post body 1',url: 'url1', author: 'author 1'}},
                        {data: {id: '1', title: 'post title 1', body: 'post body 1',url: 'url2', author: 'author 1'}}
                    ]
                },
        },
        searchTerm: 'search term',
        selectedSubreddit: 'r/pics',
    }
}