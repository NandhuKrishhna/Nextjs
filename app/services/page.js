'use strict'

import Link from "next/link"

export default () => {
    return (
        <>
            <h1>This is a Service Page</h1>
            <p><Link href={'/services/web-dev'}>Web Developement</Link></p>
            <p><Link href={'/services/app-dev'}>App Developement</Link></p>
            <p><Link href={'/services/ml-dev'}>ML Development</Link></p>



        </>
    )
}
