import React from 'react'
import LaunchList from '../LaunchList'

// 'renders' component on virtual DOM
import { render, fireEvent } from "@testing-library/react"

// allows us to use extend keyword
import "@testing-library/jest-dom/extend-expect"

// globab variable so functions can access
let getByTestId

// executes before each test is run
beforeEach(() => {
    const component = render(<LaunchList/>)
    getByTestId = component.getByTestID
})

// first param string describing what test is doing
// second param is function that contains logic for test
test("header renders with correct test", () => {
    // destructures "component" to be able to use getByTestID 
    const headerEl = getByTestId("header")

    // "expect" allows us to test for specific item
    expect(headerEl.textContent).toBe("LaunchList")
})

// tests if launch list column headers are displayed on page
test("displays columns: Flight Number, Launch Year, Rocket Name, and Details", () => {
    // const launchesEl = getByTestId("launches")

    // expect(launchesEl.textContent).toBe(" ")
})

test("API results are sorted in launch order", () => {

})

test("row links to presskit", () => {
    // clicks button
    // fireEvent.click(element)
    // expect(element.textContent).toBe("1")
})

test("can page through API results", () => {
    // fireEvent.change(element, {
    //     target: {
    //         value: "5"
    //     }
    // })

    // expect(inputEl.value).toBe("5")
})