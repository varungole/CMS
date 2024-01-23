import React from 'react'

function Topic({title , image , description}) {
  return (
    <div class="topic-frame">
    <h2 class="topic-title">{title}</h2>
    <img src={image} alt="image"></img>
    <p class="topic-description">Test</p>
  </div>
  )
}

export default Topic