import { useEffect, useState } from 'react';
import './cursor.css'

const Cursor = () => {
    // Positions
    const [x, setX] = useState();
    const [y, setY] = useState();
    useEffect(() => {
        const update = (e) => {
            setX(e.x);
            setY(e.y);
        };
        window.addEventListener("mousemove", update);
        window.addEventListener("touchmove", update);

        return () => {
            window.removeEventListener("mousemove", update);
            window.removeEventListener("touchmove", update);
        };
    }, [setX, setY])

  return (
    <div className='cursor' style={{position: 'fixed', left: `${x}px`, top: `${y}px`}}></div>
  )
}

export default Cursor