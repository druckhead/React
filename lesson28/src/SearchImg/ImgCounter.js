import {} from 'react-bootstrap'

export default function ImgCounter({ totalSearches, totalFound }) {

  return (
    <div className="d-flex flex-column gap-1 justify-content-center align-items-center">
      <span>
        Total searches: {totalSearches}
      </span>
      <span>
        Total images found: {totalFound}
      </span>
    </div>
  )
}
