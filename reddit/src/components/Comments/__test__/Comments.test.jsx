import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import Comments from '../Comments'
import { MemoryRouter } from 'react-router-dom'
import '@testing-library/jest-dom';
import { setButton } from '../CommentsSlice'

const configStore = configureMockStore()


const initialState = {
    comments: {
        comments: {
                data: {
                    children: [
                        {data: {id: '1', body: 'comment 1', author: 'author 1'}},
                        {data: {id: '2', body: 'comment 2', author: 'author 2'}}
                    ]
                },
        },
        selectedComments: 'selected comment',
        showButton: 'hide comments',
    }
}

test('should render the comment count in comment component', () => {
    const store = configStore(initialState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Comments/>   
            </MemoryRouter>
        </Provider>
    )

    expect(getByText('comment 2')).toBeInTheDocument();
})

test('should render the comment author', () => {
    const store = configStore(initialState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Comments/>   
            </MemoryRouter>
        </Provider>
    )
    expect(getByText('Author: author 2')).toBeInTheDocument()
})

test('should renderr the comment index', () => {
    const store = configStore(initialState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Comments/>   
            </MemoryRouter>
        </Provider>
    )
    expect(getByText('Comment No 1')).toBeInTheDocument()
})

test('should render the selected comment', () => {
    const store = configStore(initialState)
    const {getByText} = render(  
        <Provider store={store}>
            <MemoryRouter>
                <Comments/>   
            </MemoryRouter>
        </Provider>
    )
    expect(getByText('comment 1')).toBeInTheDocument()
})

// test('should set the showButton to the show comments when pressed on the button',  () => {
//     const store = configStore(initialState)
//     render(
//         <Provider store={store}>
//             <MemoryRouter>
//                 <Comments />
//             </MemoryRouter>
//         </Provider>
//     )

//     const button = screen.getByText('Back to posts')
//     fireEvent.click(button)

//     const actions = store.getActions()
//     const expectedAction = setButton('show comments')

//     expect(actions).toContainEqual(expectedAction)

// })







