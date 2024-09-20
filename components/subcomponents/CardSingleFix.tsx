export default function CardSingleAss() {
  return (
    <>
      <div className="bg-GrayP py-6 px-8 max-w-[400px] rounded-xl">
        <div className="">
          <h1 className="uppercase font-bold text-3xl text-white text-center ">Contrate um site profissional</h1>

          <div className="hidden lg:mt-20 lg:block">
            <img src="plan3d.png" alt="" />
          </div>
          <p className="text-center text-BluePrimary mt-8">Em caso de dúvida entre em contato com um de nossos especialistas</p>
        </div>

        <div className="text-center">
          <button className='text-white border border-BluePrimary py-2 px-6 rounded-xl uppercase mt-8  font-medium'>Entre em contato</button>
        </div>


      </div>
    </>
  );
}