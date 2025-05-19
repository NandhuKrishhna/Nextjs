'use strict'

import Link from "next/link"

export default () => {
    return (
        <>
            <h1>This is a Service Page</h1>
            <p><Link href={'/'}>App Developement</Link></p>
            <p><Link href={'/'}>Web Developement</Link></p>
            <p><Link href={'/'}>Software Developement</Link></p>

        </>
    )
}
