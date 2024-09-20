export default function Cta() {
    return (
        <>
            <section id="portfolio" className='customH py-10'>
                <div className='maxWidth flex items-center justify-center'>
                    {/* Card */}
                    <div className="border  border-BluePrimary bgCard  py-8 px-8 flex items-center flex-col rounded-3xl">
                        <h1 className="text-[42px] text-white font-bold text-center outlined-text1 font-Poppins ">Não perca mais tempo</h1>
                        <h1 className="text-[42px] text-white font-bold text-center font-Poppins ">aumente sua presença online</h1>
                        <p className="font-Poppins font-thin text-white text-xl"> e gere mais negócios com um site profissional.</p>
                        <div className="text-center">
                            <button className='text-white bg-LightBluePrimary py-2 px-6 rounded-xl uppercase mt-8 gradient1 font-medium'>Faça um orçamento</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
