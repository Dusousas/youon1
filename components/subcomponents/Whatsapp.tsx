import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Whatsapp() {
    return (
        <>
            <div className="whatsapp">
                <a href="https://wa.me/5511961769308?text=Vim%20através%20do site" target="_blank">
                    <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                </a>
            </div>
        </>
    )
}