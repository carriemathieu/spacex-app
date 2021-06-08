import React from 'react'

const Pagination = ({ launchesPerPage, totalLaunches, paginate }) => {

    const pageNumbers = []

    // dynamically determines page numbers by dividing the total number of launches by the number of launches per page (10) 
    if (totalLaunches > 0) { 
        for (let i = 1; i <= Math.ceil(totalLaunches / launchesPerPage); i++) {
            pageNumbers.push(i)
        }
    }

    // creates navbar for # of page numbers by mapping of pageNumbers array & adding click event to navigate to next page
    return (
        <nav id="pagination-navbar">
            <ul className="pagination" data-testid="pagination">
                {pageNumbers.map(number => {
                    return <li key={number} className='page-item'>
                        <button data-testid={`page-button-${number}`} onClick={() => paginate(number)}  className='page-link'>
                            {number}
                        </button>
                    </li>
                })}
            </ul>
        </nav>
    )
}

export default Pagination