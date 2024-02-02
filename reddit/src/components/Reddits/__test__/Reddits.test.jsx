import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Reddits from '../Reddits'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom';
import { setButton, setSelectedComment } from '../../Comments/CommentsSlice'


const configStore = configureMockStore([])


const initialState = {
    reddits: {
        posts: {
                data: {
                    children: [
                        {data: {id: '1', title: 'post title 1', selftext: 'post selftext 1',url: 'url1', author: 'author 1', permalink: 'permalink 1'}},
                        {data: {id: '2', title: 'post title 2', selftext: 'post selftext 2',url: 'url2', author: 'author 2', permalink: 'permalink 2'}}
                    ]
                },
        },
        searchTerm: '',
        selectedSubreddit: 'r/pics',
    },
    comments: {
        showButton: 'show comments'
    }
}
const initialSearchState = {
    reddits: {
        posts: {
                data: {
                    children: [
                        {data: {id: '1', title: 'post title 1', selftext: 'post selftext 1',url: 'url1', author: 'author 1'}},
                        {data: {id: '2', title: 'post title 2', selftext: 'post selftext 2',url: 'url2', author: 'author 2'}}
                    ]
                },
        },
        searchTerm: 'search term',
        selectedSubreddit: 'r/pics',
    },
    comments: {
        showButton: 'show comments'
    }
}



test('should render the post title', () => {
    const store = configStore(initialState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Reddits/>   
            </MemoryRouter>
        </Provider>
    )
    
    expect(getByText('Post Title: post title 1')).toBeInTheDocument()
})

test('should render the selftext of the post', () => {
    const store = configStore(initialState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Reddits/>   
            </MemoryRouter>
        </Provider>
    )
    expect(getByText('post selftext 1')).toBeInTheDocument()
})

test('should render the selected subreddit', () => {
    const store = configStore(initialState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Reddits/>   
            </MemoryRouter>
        </Provider>
    )
    expect(getByText('Subreddit: r/pics')).toBeInTheDocument()
})

test('should render the search term instead of the subreddit', () => {
    const store = configStore(initialSearchState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Reddits/>   
            </MemoryRouter>
        </Provider>
    )
    expect(getByText('SearchTerm: search term')).toBeInTheDocument()
})

// test('should change the state of the show button', () => {
//     const store = configStore(initialState)
//     const {getAllByText} = render(  
//         <Provider store={store}>
//             <MemoryRouter>
//                 <Reddits/>   
//             </MemoryRouter>
//         </Provider>
//     )
//     const button = getAllByText('Check the Comments')
//     fireEvent.click(button[1])
    
//     const action = store.getActions()
//     const expectedResult = setButton('hide comments')

//     expect(action).toContainEqual(expectedResult)
// })


// test('should change the prefix on click ', () => {
//     const store = configStore(initialSearchState)
//     const {getAllByText} = render(  
//         <Provider store={store}>
//             <MemoryRouter>
//                 <Reddits/>   
//             </MemoryRouter>
//         </Provider>
//     )

//     const button = getAllByText('Check the Comments')[0]
//     fireEvent.click(button)

//     const actions = store.getActions()
//     const expectedAction = setSelectedComment()

//     expect(actions).toEqual(expectedAction)

// })
