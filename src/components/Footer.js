import { useTheme } from '../hooks/useTheme'
import './Footer.css'
export default function Footer() {
    const { color } = useTheme()

    return (
        <div className="footer" style={{ background: color }}>
            <p>&copy; Tomassetti.net</p>
        </div>
    )
}

