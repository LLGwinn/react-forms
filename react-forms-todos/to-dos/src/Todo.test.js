import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Todo from './Todo';

// SMOKE TEST
it('should render without crashing', () => {
    render(<Todo />);
})

// SNAPSHOT TEST
it('should match snapshot', () => {
    const newTodo = "mop floor"
    const {asFragment} = render(<Todo newTodo={newTodo}/>);
    expect(asFragment).toMatchSnapshot();
})