import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';

describe('List Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        const props = {

            id: '1',
            header: 'First list',
            cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],

            cards: [{id: 'a', title: 'First card', content: 'lorem ipsum'}, { id: 'b', title: 'Second card', content: 'lorem ipsum' }]
    }
        ReactDOM.render(<List {...props}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        const props = {

          
            header: 'First list',
            cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],

            cards: [{id: 'a', title: 'First card', content: 'lorem ipsum'}, { id: 'b', title: 'Second card', content: 'lorem ipsum' }]
    }
        ReactDOM.render(<List {...props}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });


    it('renders without crashing', () => {
        const props = {

            id: '2',
            header: 'First list',
            cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],

            cards: [{id: 'a', title: 'First card', content: 'lorem ipsum'}, { id: 'b', title: 'Second card', content: 'lorem ipsum' }]
    }
        const tree = renderer.create(<List {...props} />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
