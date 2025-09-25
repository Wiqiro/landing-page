import useCountUp from "@/hooks/useCountUp";

export const InterestsSection = () => {
  const elevation = useCountUp(210984, 3000);
  const distance = useCountUp(14345, 3000);
  const time = useCountUp(679, 3000);

  return (
    <div className="mx-auto max-w-7xl">
      <h2 className="text-4xl font-bold text-orange-400 mb-8 text-center">
        Mes Intérêts
      </h2>
      <h3 className="text-3xl font-bold mb-4 text-center">Cyclisme</h3>
      <p className="mb-16">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit
        amet ultrices est, eu sollicitudin sem. Integer maximus sit amet nisi ut
        malesuada. Curabitur nec eros sit amet ipsum condimentum imperdiet id
        condimentum risus. Maecenas euismod malesuada lobortis.
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between space-y-12 mb-12 md:mb-0 md:items-baseline">
        <div className="flex flex-col items-center w-100 space-y-2">
          <p className="text-orange-400 font-bold text-5xl">
            {elevation.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} m
          </p>
          <p>Dénivelé</p>
        </div>
        <div className="flex flex-col items-center w-100 space-y-2">
          <p className="text-orange-400 font-bold text-5xl">
            {distance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} km
          </p>
          <p>Distance</p>
        </div>
        <div className="flex flex-col items-center w-100 space-y-2">
          <p className="text-orange-400 font-bold text-5xl">
            {(time / 24).toFixed(1)} jours
          </p>
          <p>Temps</p>
        </div>
      </div>
    </div>
  );
};
