import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <>
            <section id='contact' className='customH bg-GrayP pt-20 pb-10'>
                <div className='maxWidth'>
                    <footer className="flex flex-col items-center justify-center">

                        <div className="">
                            <a id='main' href=""><img className="w-[150px]" src="youlogo.png" alt="" /></a>
                        </div>

                        <div className='text-white mt-6 pl-2 flex justify-center gap-8'>
                            <a target='_blank' href="https://www.instagram.com/youonagencia/"><FontAwesomeIcon icon={faInstagram} size='xl' /></a>
                            <a href=""><FontAwesomeIcon icon={faLinkedinIn} size="xl" style={{ color: "#ffffff", }} /></a>
                            <a target='_blank' href="https://wa.me/5511961769308" ><FontAwesomeIcon icon={faWhatsapp} size="xl" /></a>
                        </div>

                        <h1 className='text-[#48484d] mt-8 uppercase'>&copy; - Copyright 2024 <span className='font-bold'>You on</span></h1>
                        <h1 className='font-bold uppercase text-[#48484d]'>Cnpj: <span className='font-normal'>49.202.463/0001-25</span></h1>


                    </footer>
                </div>
            </section>
        </>
    );
}