import { useEffect } from "react"

function handleClick() {
    console.log(test);
} 

export const Events = () => {
    
    useEffect(() => {
        document.addEventListener("click" handleClick)
    }, [])
    return (
        <button>
            
        </button>
    )
}
