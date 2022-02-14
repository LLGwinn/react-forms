import React from 'react';
import {render} from '@testing-library/react';
import NewTodoForm from './NewTodoForm';

// SMOKE TEST
it('should render without crashing', () => {
    render(<NewTodoForm />);
})

// SNAPSHOT TEST
it('should match snapshot', () => {
    const {asFragment} = render(<NewTodoForm />);
    expect(asFragment).toMatchSnapshot();
})