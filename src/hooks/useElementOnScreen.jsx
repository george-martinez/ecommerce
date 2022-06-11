const { useRef, useState, useEffect } = require("react")

export default function useElementOnScreen (options) {
    const containerRef = useRef(null)
    const [ isVisible, setIsVisible ] = useState(false)

    const callbackFunction = (entries) => {
        const [ entry ] = entries
        setIsVisible(entry.isIntersecting)
    }

    useEffect(() => {

        const observer = new IntersectionObserver(callbackFunction, options)
        
        if(containerRef.current){
            observer.observe(containerRef.current)
        }
        
        return (() => {
            if(containerRef.current){
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.disconnect(containerRef.current)
            }
        })

    }, [containerRef, options])

    return [containerRef, isVisible]

}