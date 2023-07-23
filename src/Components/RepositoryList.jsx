import React from 'react'

const RepositoryList = ({repositories}) => {
  return (
    <div>
    {
    repositories.map((res)=>(
        <div key={res.id}>
          <h2>{res.name}</h2>
          <p>{res.description}</p>
        </div>
    ))
    }
    </div>
  )
}

export default RepositoryList
