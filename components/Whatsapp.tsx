import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Whatsapp() {
    return (
        <>
            <div className="whatsapp">
                <a href="https://api.whatsapp.com/send?phone=5511961769308&text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20que%20vocês%20oferecem.%20Poderia%20me%20fornecer%20mais%20informações%20sobre%20como%20vocês%20trabalham%20e%20quais%20são%20as%20opções%20disponíveis%3F" target="_blank">
                    <i><FontAwesomeIcon icon={faWhatsapp} /></i>
                </a>
            </div>
        </>
    )
}