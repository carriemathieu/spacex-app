import React from 'react'
import LaunchList from '../LaunchList'
import Pagination from '../../Pagination/Pagination'
import { fetchLaunches } from '../../../../src/App'

// 'renders' component on virtual DOM
import { render, fireEvent, waitFor } from "@testing-library/react"

// allows us to use extend keyword
import '@testing-library/jest-dom/extend-expect'

// global variable so functions can access destructured getByTestId
let getByTestId;

// executes before each test is run
beforeEach(() => {
    const component = render(<LaunchList/>)
    getByTestId = component.getByTestId
})

// first param string describing what test is doing
// second param is function that contains logic for test
test("page header renders with correct test", () => {
    const headerEl = getByTestId("header")

    // "expect" allows us to test for specific item
    expect(headerEl.textContent).toBe("SpaceX Launches")
})

// tests if launch list column headers are displayed on page
test("displays column headers correctly: Flight Number, Launch Year, Rocket Name, and Details", async () => {
    // destructures "component" to be able to use findByTestID 
    const { findAllByTestId } = render(<LaunchList/>)

    const tableHeaders = await findAllByTestId("table-header")

    // *** would like to do more research on using waitFor in react testing in order to test for array length ***
    expect(tableHeaders).not.toContain('')
})

// need to do more research on testing API calls
test("API results are sorted in launch order", async () => {
    // const { findAllByTestId } = render(<LaunchList/>)

    // // get all years in year column
    // await waitFor(() => expect(fetchLaunches).toHaveBeenCalledTimes(1))
    // const years = await findAllByTestId("flight-year")
})

test("row links to presskit", () => {
    
    // expect(element.textContent).toBe("1")
})

test("can page through API results", () => {
    const { findByTestId } = render(<Pagination/>)
    const pageButton = findByTestId("page-button-2")
    fireEvent.click(pageButton)
   
})