import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import BoxList from './BoxList';
import '@testing-library/jest-dom/extend-expect';

// SMOKE TEST
it('should render without crashing', () => {
    render(<BoxList />)
})

// SNAPSHOT TEST
it('should match snapshot', () => {
    const {asFragment} = render(<BoxList />);
    expect(asFragment).toMatchSnapshot();
})

// LOGIC TESTS

// enter all input data into input fields
function enterBoxData(testBoxList, height='50', width='50', color='red') {
    const heightInput = testBoxList.getByLabelText('Height:');
    const widthInput = testBoxList.getByLabelText('Width:');
    const colorInput = testBoxList.getByLabelText('Color:');

    fireEvent.change(colorInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
}

it ('should add box', () => {
    const boxList = render(<BoxList />);
    enterBoxData(boxList);
    // no box yet
    expect(boxList.queryByText('X')).not.toBeInTheDocument;

    const button = boxList.getByText('Make a Box!');
    fireEvent.click(button);
    // box with 'x' button should be there
    const removeButton = boxList.queryByText('X');
    expect(removeButton).toBeInTheDocument;
    expect(removeButton.previousSibling).toHaveStyle({"background-color":'red'});
})

it ('should remove box', () => {
    const boxList = render(<BoxList />);
    enterBoxData(boxList);
    // add a box with 'x' button and make sure it's there
    const button = boxList.getByText('Make a Box!');
    fireEvent.click(button);
    const removeButton = boxList.queryByText('X');
    expect(removeButton).toBeInTheDocument;
    expect(removeButton.previousSibling).toHaveStyle({"background-color":'red'});
    // remove the box
    fireEvent.click(removeButton);
    expect(boxList.queryByText('X')).not.toBeInTheDocument;
})
