import React from 'react'
import { render,screen } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Comments from '../Comments'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom';

const configStore = configureMockStore([])


const initialState = {
    comments: {
        comments: {
                data: {
                    children: [
                        {data: {id: 1, body: 'comment 1', author: 'author 1'}},
                        {data: {id: 2, body: 'comment 2', author: 'author 2'}}
                    ]
                },
        },
        selectedComments: 'selected comment',
        showButton: 'hide comments'
    }
}

test('should render the comment count in comment component', () => {
    var store = configStore(initialState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Comments/>   
            </MemoryRouter>
        </Provider>
    )

    expect(getByText('comment 2')).toBeInTheDocument();
})




