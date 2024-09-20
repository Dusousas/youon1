import CardSingleAss from "./subcomponents/CardSingleAss";
import CardSingleEx from "./subcomponents/CardSingleEx";
import CardsingleFix from "./subcomponents/CardSingleFix";


export default function Plans() {
  return (
    <>
      <section id="plans" className='customH bg-GrayP py-10'>
        <div className='maxWidth'>
          <h1 className="text-[55px] font-bold uppercase text-center outlined-text font-Poppins lg:text-[100px]">Planos</h1>
          <h2 className="text-white relative top-[-28px] text-3xl uppercase font-black text-center  lg:top-[-46px] lg:text-5xl">Quanto custa?</h2>
          <article className="flex flex-col items-center mt-10 gap-6 justify-center lg:flex-row">

            <CardSingleAss />
            <CardsingleFix />
            <CardSingleEx />

          </article>

        </div>
      </section>
    </>
  );
}