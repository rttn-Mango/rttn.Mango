const Logo = () => {
    return(
        //currentcolor on fill allows the path color value to be changed on css using color property
        <svg width="80" height="49" id="logo" viewBox="0 0 80 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_87_152)">
            <path d="M76.5 30.2619L27.5 30.2619V27.7419L76.5 27.7419V30.2619Z" fill="currentcolor"/>
            <path d="M7.25 47L7.25 12H9L9 29.15L25.55 12H28.25L11.6 29.3L29.65 47H26.8L9 29.55L9 47H7.25Z" fill="currentcolor"/>
            <path d="M73 45.9L31 45.9V43.44L53.14 29.22L31 15.06V12.6L73 12.6V14.7L34.36 14.7L55.9 28.38V30.06L34.36 43.74L73 43.74V45.9Z" fill="currentcolor"/>
            </g>
            <defs>
            <clipPath id="clip0_87_152">
            <rect width="49" height="80" fill="white" transform="matrix(0 -1 1 0 0 49)"/>
            </clipPath>
            </defs>
        </svg>
    )
}

export default Logo