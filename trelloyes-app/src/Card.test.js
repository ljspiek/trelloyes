import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const props = {
            id: 'a', title: 'First card', content: 'lorem ipsum'
        }
        ReactDOM.render(<Card {...props}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});