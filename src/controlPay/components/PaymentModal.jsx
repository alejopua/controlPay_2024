import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { PiTrashLight } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removePayment } from "@/store/controlSlice/controlSlice";

const PaymentModal = ({ payment }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removePayment(id));
  };
  return (
    <>
      <Dialog>
        <DialogTrigger
          disabled={payment.status === "pending" ? false : true}
          asChild
        >
          <button
            className={`relative size-16 flex items-center justify-center ${
              payment.status === "pending"
                ? "bg-gray-200 border-black border-2"
                : "bg-green-500"
            } rounded-full group`}
          >
            {payment.status === "pending" ? (
              <MdOutlineModeEditOutline className="size-5 text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            ) : (
              <FaCheck className="size-5 text-black " />
            )}
          </button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Pagar</DialogTitle>
            <DialogDescription>Selecciona metodo de pago.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="state" className="text-right">
                Estado
              </Label>
              <Select id="state" placeholder="Select a Payment">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select a Payment" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipo de pago</SelectLabel>
                    <SelectItem value="cash">Efectivo</SelectItem>
                    <SelectItem value="card">Tarjeta</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button
                // onClick={() => handleRemove(payment.id)}
                onClick={() => handleRemove(payment.id)}
                variant="outline"
                size="icon"
              >
                <PiTrashLight className="size-6 text-gray-400" />
              </Button>
            </DialogClose>

            <DialogClose asChild>
              <Button onClick={() => console.log("Pago asignado y guardado")}>
                Guardar
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PaymentModal;
