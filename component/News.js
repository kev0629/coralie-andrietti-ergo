
import React from 'react'
import Link from 'next/link'

export default function News() {
    return (
        <div className='centered-content'>
            <div>
                <Link href='/actu' passHref><button type="button" name="myButton" className='button'>Actualités</button></Link>
            </div>
        </div>
    )
}
