import React, { useEffect, useRef } from 'react'

const ScrollComponent = () => {
    const elementRef = useRef();
    useEffect(() => elementRef.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" }));
    return <div ref={elementRef} />;
}

export default ScrollComponent