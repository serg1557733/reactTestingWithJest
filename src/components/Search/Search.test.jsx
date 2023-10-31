import { screen, render } from "@testing-library/react";
import userEvent from '@testing-library/user-event';

import Search from "./Search";

const onChange = jest.fn();

describe('Search component', () => {


    it('render Search component' , () => {
        render(
            <Search  value = "" onChange= {onChange} >
                   Find... 
            </Search >);    
        expect(screen.getByText(/find/i)).toBeInTheDocument();    
        });

    it('render without children', () => {

        render(
            <  Search value = "" onChange= {onChange} />);    
        expect(screen.getByText(/search/i)).toBeInTheDocument();   

    })

    it('render without placeholder', () => {

        render(
            <  Search value = "" onChange= {onChange} />);    
        expect(screen.getByPlaceholderText(/search/)).toBeInTheDocument();   

    })

    it('custom placeholder working correctly' , () => {
        render(
            <  Search value = "" onChange= {onChange} placeholder = 'find text..'/>);    
        expect(screen.getByPlaceholderText(/find text/)).toBeInTheDocument();   

    })

    it('onChange working' ,() => {
        render(
            <Search  value = "" onChange= {onChange} >
                   Find: 
            </Search >);  

        userEvent.type(screen.getByRole('textbox'), 'React');

        expect(onChange).toHaveBeenCalledTimes(5);
    } )

    it('dinamyc styles works', () => {
        render(<Search value = "abc.." onChange = {onChange} ></Search>);

        expect(screen.getByRole('textbox')).toHaveClass('input');
        expect(screen.getByRole('textbox')).toHaveClass('filled');
        expect(screen.getByText(/Search/)).toHaveClass('label');
       // expect(screen.getByRole('label')).toHaveStyle('display: flex');
    })




    
})