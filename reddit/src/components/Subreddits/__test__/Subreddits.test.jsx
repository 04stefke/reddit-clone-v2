import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Subreddits from '../Subreddits'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom';
import { setButton, setSelectedComment } from '../../Comments/CommentsSlice'
import { setSelectedSubreddit } from '../../Reddits/RedditsSlice'

const configStore = configureMockStore([])

const initialState = {
    reddits: {
        selectedSubreddit: 'r/pics'
    },
    subreddits: {
        subreddits: {
            data: {
                children: [
                    {data: {display_name: 'Subreddit name 1', display_name_prefixed: 'r/Home1'}},
                    {data: {display_name: 'Subreddit name 2', display_name_prefixed: 'r/Home2'}}
                ],
            },
        },
    },
    comments: {
        showButton: 'show comments'
    }
}

test('should render the subreddit name', () => {
    const store = configStore(initialState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Subreddits/>   
            </MemoryRouter>
        </Provider>
    )
    
    expect(getByText('Subreddit name 1')).toBeInTheDocument()
})

// test('should dispatch the selectSubreddit on click', async () => {
//     const store = configStore(initialState)
//     const {getByText} = render(  
//         <Provider store={store}>
//             <MemoryRouter>
//                 <Subreddits/>   
//             </MemoryRouter>
//         </Provider>
//     )
    
//     const button = getByText('Subreddit name 1')
//     fireEvent.click(button)

//     const actions = store.getActions()
    
//     const expectedAction = setSelectedSubreddit('Subreddit name prefixed 1')

//     expect(actions).toContainEqual(expectedAction) 
// })



