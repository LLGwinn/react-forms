import React from 'react';
import {render, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TodoList from './TodoList';

// SMOKE TEST
it('should render without crashing', () => {
    render(<TodoList />);
})

// SNAPSHOT TEST
it('should match snapshot', () => {
    const {asFragment} = render(<TodoList />);
    expect(asFragment).toMatchSnapshot();
})

// LOGIC TESTS

// enter a new todo into the input field
function enterNewTodo(todoList) {
    const todoInput = todoList.getByPlaceholderText('Enter new task');
    fireEvent.change(todoInput, { target: { value: 'feed dog' } });
}

it('should show new todo <li> when task added', () => {
    const testTodoList = render(<TodoList />);
    enterNewTodo(testTodoList);

    // no todos yet
    expect(testTodoList.queryByText('X')).toBeNull();

    // add the new todo
    const addButton = testTodoList.getByText('Add Task');
    fireEvent.click(addButton);
    expect(testTodoList.queryByText('X')).not.toBeNull();
    expect(testTodoList.queryByText('feed dog')).toBeInTheDocument();
})

it('should remove todo <li> when task removed', () => {
    const testTodoList = render(<TodoList />);

    // add the new todo
    enterNewTodo(testTodoList);
    const addButton = testTodoList.getByText('Add Task');
    fireEvent.click(addButton);
    expect(testTodoList.queryByText('feed dog')).toBeInTheDocument();

    // remove the todo
    const removeButton = testTodoList.queryByText('X');
    fireEvent.click(removeButton);
    expect(testTodoList.queryByText('feed dog')).not.toBeInTheDocument();
})