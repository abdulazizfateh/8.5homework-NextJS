import React from 'react'

const Loading = () => {
    return (
        <div className="w-full h-screen bg-white flex items-center justify-center">
            <span className="loader"></span>
        </div>
    )
}

export default React.memo(Loading);