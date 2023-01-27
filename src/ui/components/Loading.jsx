import React from 'react'



const Loading = ({ message }) => {
    return (
        <div className="card-grid d-flex">
            <div className="lds-ellipsis mx-auto">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <h5 style={{margin: '4px'}}>

                    {message}

                </h5>
            </div>
        </div>
    )
}

export default Loading