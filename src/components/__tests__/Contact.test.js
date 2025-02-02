import Contact from "../Contact"
import { render , screen} from "@testing-library/react";
import "@testing-library/jest-dom"

describe("all headings",()=>{
    test("should have heading in Contact component",()=>{
        render(<Contact/>);
    
        //querying
        const heading = screen.getByRole("heading");
        // console.log(heading)
        
        //assertion
        expect(heading).toBeInTheDocument();
    })
})

describe("all inputs and buttons",()=>{
    test("should have button in Contact component",()=>{
        render(<Contact/>)
    
        //querying
        const button = screen.getByText("Submit");
        //  console.log(button)
    
         //assertion
         expect(button).toBeInTheDocument()
    })
    
    test("should have input box in Contact component",()=>{
        render(<Contact/>)
    
        //querying
        const input = screen.getAllByRole("textbox");
        //  console.log(input)
    
         //assertion
         expect(input.length).not.toBe(2)
    })
})
