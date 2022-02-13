import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import Box from './Box';

// SMOKE TEST
it('should render without crashing', () => {
    render(<Box />);
})

// SNAPSHOT TEST
it('should match snapshot', () => {
    const style = {
        backgroundColor: 'red',
        width: '50px',
        height: '50px'
    };
    const {asFragment} = render(<Box style={style} />);
    expect(asFragment).toMatchSnapshot();
})
