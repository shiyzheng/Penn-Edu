import { render, screen } from '@testing-library/react';
import renderer from 'react-test-renderer'
import AddPost from '../components/AddPost';


test('renders addPost has private', () => {
  render(<AddPost />);
  const linkElement = screen.getByLabelText('Private');

  expect(linkElement).toBeInTheDocument();
});

test('renders addPost has anonymous', () => {
  render(<AddPost />);
  const linkElement = screen.getByLabelText('Anonymous');

  expect(linkElement).toBeInTheDocument();
});

test('renders addPost has title', () => {
    render(<AddPost />);
    const linkElement = screen.getByLabelText('Title');
    expect(linkElement).toBeInTheDocument();
});
test('renders addPost has id', () => {
    render(<AddPost />);
    const linkElement = screen.getByTestId('body');

    expect(linkElement).toBeInTheDocument();
});
test('renders addPost matches snapshot', () => {
    const component = renderer.create(<AddPost />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});

test('renders addPost has form-group', () => {
    render(<AddPost />);
    const linkElement = screen.getByTestId('form-group');
    expect(linkElement).toHaveClass('form-group')
    expect(linkElement).toBeInTheDocument();
});

test('renders addPost has button', () => {
    render(<AddPost />);
    const linkElement = screen.getByTestId('button');
    expect(linkElement).toHaveClass('btn btn-primary')
    expect(linkElement).toBeInTheDocument();
});
