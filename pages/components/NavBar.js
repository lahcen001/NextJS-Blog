import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'


const NavBar = () => {
    const router = useRouter
    console.log("router :", router)
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    {/* <Link href="/"><a class="navbar-brand" >Navbar</a></Link> */}

                    <Image src="/logo.png" width="50" height="50" />
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link href="/"><a class={"nav-link " + `${router.pathname === "/" ? "active" : ""}` + ""} aria-current="page" >Home</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/blog"><a class={"nav-link " + `${router.pathname === "/blog" ? "active" : ""}` + ""} >Blog</a></Link>
                            </li>
                            <li class="nav-item">
                                <Link href="/about"><a blog class={"nav-link " + `${router.pathname === "/about" ? "active" : ""}` + ""} >About</a></Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default NavBar
