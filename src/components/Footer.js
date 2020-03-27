import React from 'react'

function Footer() {
    return (
        <footer class="py-4 bg-dark mt-auto">
        <div class="container-fluid " style={{textDecoration: "none",color: "white"}}>
            <div class="d-flex align-items-center justify-content-between small">
                <div class="text-muted">Made with 
                <svg id="i-heart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <path stroke-width="0" fill="#f44336" d="M4 16 C1 12 2 6 7 4 12 2 15 6 16 8 17 6 21 2 26 4 31 6 31 12 28 16 25 20 16 28 16 28 16 28 7 20 4 16 Z"></path>
            </svg>by 
            <a href="https://github.com/devxa2602" target="_BLANK" style={{textDecoration: "none",color: "white"}}> Akshay Rawate
            </a>
                </div>
                <div>
            <p class="white-text mb-0 text-center" style={{paddingTop: "10px !important"}}>Checkout <a href="https://github.com/amodm/api-covid19-in" target="_BLANK" >COVID-19 Stats API</a>
            </p>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer
