import React from "react";
import { MapPin, Calendar, Settings2, ArrowRight } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  IsGuestsInputOpen: boolean;
  closeGuestsInput: () => void;
  openGuestsInput: () => void;
}

export const DestinationAndDateStep: React.FC<DestinationAndDateStepProps> = ({
  IsGuestsInputOpen,
  closeGuestsInput,
  openGuestsInput,
}) => {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="text-zinc-400" size={20} />
        <input
          disabled={IsGuestsInputOpen}
          type="text"
          placeholder="Para onde você vai? "
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="text-zinc-400" size={20} />
        <input
          disabled={IsGuestsInputOpen}
          type="text"
          placeholder="Quando? "
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none"
        />
      </div>

      <div className="w-px h-6 bg-zinc-800" />

      {IsGuestsInputOpen ? (
        <Button onClick={closeGuestsInput} variant="secondary">
          Alterar local/data
          <Settings2 size={20} />
        </Button>
      ) : (
        // <button
        //
        //   className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        // >
        //   Continuar
        //   <ArrowRight size={20} />
        // </button>
        <Button onClick={openGuestsInput}>
          Continuar
          <ArrowRight size={20} />
        </Button>
      )}
    </div>
  );
};
