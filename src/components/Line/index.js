import { useState } from 'react'
import { useEffect } from 'react'
import './Line.css'

const Line = () => {
    const [points, setPoints] = useState({ x: 80, y: 10, x0: 90, y0: 1 })
    const [metrics, setMetrics] = useState({ velocity: 1, acel: 1, gravity: 1 })
    useEffect(() => {
        const interval = setInterval(() => {
            let f = .01 * (points.y - points.y0)
            setMetrics({ 
                velocity: metrics.velocity + (metrics.acel + metrics.gravity * (f * -1)),
                acel: metrics.acel,
                gravity: metrics.gravity
            })
            console.log(f)
            setPoints({ x: points.x, y: points.y + metrics.velocity, x0: points.x0, y0: points.y0 })
        }, 16)
        return () => clearTimeout(interval)
    })
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
            <path d={`M 50 20 q ${points.x} ${points.y} 140 00`} />
        </svg>
    )
}

export default Line