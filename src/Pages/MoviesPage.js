import React, {useState} from 'react'
import AddMovieForm from '../Components/Forms/AddMovieForm';
import Popup from '../Components/Popup/Popup';

function MoviesPage() {
    const [buttonPopup, setButtonPopup] = useState(false);
    return (
        <div>
            <div>
                <div>
                    <br/>
                    <h1>Lista filmów: </h1>
                    <button onClick={() => setButtonPopup(true)}>Dodaj film</button>
                    <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <AddMovieForm/>
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default MoviesPage
