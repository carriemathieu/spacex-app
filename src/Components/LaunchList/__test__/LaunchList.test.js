import React from 'react'
import LaunchList from '../LaunchList'

// 'renders' component on virtual DOM
import { render } from "@testing-library/react"

// allows us to use extend keyword
import "@testing-library/jest-dom/extend-expect"


// first param string describing what test is doing
// second param is function that contains logic for test
test("header renders with correct test", () => {
    // destructures "component" to be able to use getByTestID 
    const { getByTestId }= render(<LaunchList/>)
    const headerEl = getByTestId("header")

    // "expect" allows us to test for specific item
    expect(headerEl.textContent).toBe("LaunchList")
})
