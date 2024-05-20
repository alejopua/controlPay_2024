import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

export const ControlPayApp = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">App</h1>
      <Button>
        <Trash2 />
      </Button>
    </>
  );
};
