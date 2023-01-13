import React, { useEffect, useState } from 'react'

export const Quote = ({data}) => {

    // const [counter, setCounter] = useState(0)

    // useEffect( () => {
    //     setCounter(counter+1)
    // }, [data])
    

    return (
        <blockquote className="blockquote text-end">
            {
                !!data
                ? data.map( ( {quote, author} ) => (
                        <>
                            <p key={ '94lewj32'+ counter } className="mb-2"> {quote} </p>
                            <footer key={'ndjo2xw'+ counter} className="blockquote-footer"> {author} </footer>
                        </>
                    ))
                : false
            }
        </blockquote>
    )

}
