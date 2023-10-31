import { screen, render, debug } from "@testing-library/react";

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

    it('custom placeholder' , () => {
        
    })


        

})