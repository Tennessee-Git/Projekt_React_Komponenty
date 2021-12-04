import React from 'react'
import ShowingControls from './ShowingControls'
import '../Movie Components/MovieDetails.css'
import PropTypes from "prop-types"

const ShowingDetails = ({id, date, movieTitle, roomId, availableSeats}) => {
    return (
        <div className="movie-card">
            <div className="showing-details">
                <div className="showing-date">{date}</div>
                <div className="movie-title">{movieTitle}</div>
                <div className="showing-room">Sala {roomId} </div>
                <div className="showing-seats">{availableSeats} wolnych miejsc</div>
            </div>
            <div className="overlay">
                <ShowingControls id={id} />
            </div>
        </div>
    )
}

ShowingDetails.propTypes = {
    date: PropTypes.string.isRequired,
    movieTitle: PropTypes.string,
    roomId: PropTypes.number,
    availableSeats: PropTypes.number
}

export default ShowingDetails
