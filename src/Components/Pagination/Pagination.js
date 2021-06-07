import React from 'react'

const Pagination = ({ launchesPerPage, totalLaunches}) => {

    const pageNumbers = []

    // dynamically determines page numbers by dividing the total number of launches by the number of launches per page (10) 
    for (let i = 1; 1 <= Math.ceil(totalLaunches / launchesPerPage); i++) {
        pageNumbers.push(i)
    }

    // creates navbar for # of page numbers by mapping of pageNumbers array & adding click event to navigate to next page
    return (
        <nav>
            <ul className="pagination" data-testId="pagination">
                {pageNumbers.map(number => {
                    <li key={number}>
                        <a href="linkto next page">
                            {number}
                        </a>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination