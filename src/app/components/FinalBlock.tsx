
import volveAVosBlanco from '@/assets/01logos/VolveAVosBlanco.png';

export function FinalBlock() {

  return (
    <div className="bg-black text-white border-x-4 border-b-4 border-black min-h-[60vh] flex items-center justify-center">
      <div className="text-center p-8 lg:p-16 space-y-8">
        <div className="space-y-8">
          <p className="text-3xl lg:text-5xl font-bold leading-tight max-w-3xl mx-auto">
            La pregunta es si vas a dejar pasar este regreso.
          </p>

          <div className="pt-8">
            <img
              src={volveAVosBlanco}
              alt="Volvé a vos"
              className="mx-auto h-auto w-full max-w-[34rem]"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </div>
  );
}