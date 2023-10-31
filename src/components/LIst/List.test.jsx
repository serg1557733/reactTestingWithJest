import {render, screen} from '@testing-library/react';
import List from './List'

const data = ['html5', 'js', 'scc'];

describe('List component', () => {
    it('List render' , () => {
        render(<List item = {data} />);

        expect(screen.getByText(/html/i)).toBeInTheDocument();
        expect(screen.getByRole('list')).toBeInTheDocument();
    });

    it('List render without data', () => {
        render(<List />);

        expect(screen.queryByRole('list')).toBeNull();
    })

    it('List snapshot', () => {
        const view = render(<List item = {data} />);

        expect(view).toMatchSnapshot();
    })

    it('List snapshot without data', () => {
        const view = render(<List />);

        expect(view).toMatchSnapshot();
    })
} )
