import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const RaptorVids = () =>{
    return (
	<div>
    <h1 className="videos">Raptor Videos!!!</h1>
        <div class="ratio ratio-4x3">
  <iframe src="https://www.youtube.com/embed/VML3OWyQ9a0" title="YouTube video" allowfullscreen></iframe>
        </div>
        <br/>
        <div class="ratio ratio-4x3">
  <iframe src="https://www.youtube.com/embed/3ZJ5sBmQEEY" title="YouTube video" allowfullscreen></iframe>
        </div>
        <br/>
        <div class="ratio ratio-4x3">
  <iframe src="https://www.youtube.com/embed/Fqy4FQqYPw8" title="YouTube video" allowfullscreen></iframe>
        </div>
	</div>
    )
}

export default RaptorVids



