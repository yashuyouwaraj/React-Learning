import {render,screen} from "@testing-library/react"
import FindByQueries from "../../src/components/FindByQueries"

describe('FindByQueries Component', () => { 
    test("finds an element by its text content",async ()=>{
        render(<FindByQueries />)
        const headingElement=await screen.findByText(/FindBy Queries Test/i)
        expect(headingElement).toBeInTheDocument()
    })

    test("finds an element by its aria-label",async ()=>{
        render(<FindByQueries />)
        const buttonElement = await screen.findByLabelText(/click-me/i)
        expect(buttonElement).toBeInTheDocument()
    })

    test("finds an element by its placeholder text", async ()=>{
        render(<FindByQueries />)
        const inputElement=await screen.findByPlaceholderText(/Enter text here/i)

        expect(inputElement).toBeInTheDocument()
    })

    test("find an element by its alt text",async ()=>{
        render(<FindByQueries />)
        const imageElement=await screen.findByAltText(/test-image/i)
        expect(imageElement).toBeInTheDocument()
    })

    test("finds an element by its defaultValue",async ()=>{
        render(<FindByQueries />)
        const inputElement=await screen.findByDisplayValue(/This is a test input/i)
        expect(inputElement).toBeInTheDocument()
    })

    test("finds an element by its data-testid",async()=>{
        render(<FindByQueries />)
        const testElement=await screen.findByTestId(/test-element/i)
        expect(testElement).toBeInTheDocument()
    })

    test("finds an element by its htmlFor Label",async()=>{
        render(<FindByQueries />)
        const labelElement=await screen.findByLabelText(/Test Input Label/i)
        expect(labelElement).toBeInTheDocument()
    })
 })