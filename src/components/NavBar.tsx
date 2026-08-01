import { useState } from "react"

interface Props {
    title: string,
    items: string[]
}

/**
 * @brief Represents website navbar 
 */
function NavBar({title, items}: Props) {
    const [activeItem, setActiveItem] = useState("nav-0")

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, itemId: string) => {
        e.preventDefault()
        setActiveItem(itemId)
    }

    return <>
        <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand nav-title" href="#">{title}</a>
                {items.map((item, idx) => (
                    
                    (`nav-${idx}` == activeItem) ? (
                        <a 
                            className="nav-link nav-item" 
                            style={{fontWeight: "bold"}}
                            href={`#${item}`} 
                            id={`nav-${idx}`}
                            onClick={(e) => handleClick(e, `nav-${idx}`)}
                        >
                            {item}
                        </a>
                    ) : (
                        <a 
                            className="nav-link nav-item" 
                            href={`#${item}`} 
                            id={`nav-${idx}`}
                            onClick={(e) => handleClick(e, `nav-${idx}`)}
                        >
                            {item}
                        </a>
                    )
                ))}
            </div>
        </nav>
    </>
}

export default NavBar