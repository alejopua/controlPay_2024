import { Link } from "react-router-dom";
import { Menu, Package2, Pencil } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { PaymentsLayout } from "../layout/PaymentsLayout";
import { StarPay } from "../components/StartPay";
import PaymentModal from "../components/PaymentModal";
import { MiddlePay } from "../components/MiddlePay";
import { EndPay } from "../components/EndPay";

const DEFAULT_STATE = {
  payments: [
    {
      id: crypto.randomUUID(),
      name: "Anticipo",
      amount: 91.0,
      percentage: 100,
      status: "pending",
      date: "2022-01-22",
    },
    {
      id: crypto.randomUUID(),
      name: "pago 1",
      amount: 91.0,
      percentage: 100,
      status: "pending",
      date: "2022-01-23",
    },
    {
      id: crypto.randomUUID(),
      name: "pago 2",
      amount: 91.0,
      percentage: 100,
      status: "pending",
      date: "2022-01-24",
    },
    {
      id: crypto.randomUUID(),
      name: "pago 3",
      amount: 91.0,
      percentage: 100,
      status: "pending",
      date: "2022-01-25",
    },
  ],
  totalAmount: 182.0,
};

export const ControlPayPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="sticky top-0 flex h-16 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
        <nav className="hidden gap-6 font-medium md:flex md:flex-row md:items-center md:text-sm">
          <Package2 className="h-6 w-6" />
          <Link to="/" className="hover:text-zinc-700">
            Dashboard
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Package2 className="h-6 w-6" />
              <Link to="/" className="hover:text-zinc-700">
                Dashboard
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-auto items-center justify-between gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar className="h-9 w-9 sm:flex">
                  <AvatarImage src="/avatars/01.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="w-full grid gap-4 md:gap-8 ">
          <Card className="xl:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="grid gap-2">
                <CardTitle>Pagos</CardTitle>
                <CardDescription>Recent transaction.</CardDescription>
              </div>
              <div className="flex flex-row items-center gap-3">
                <Button
                  asChild
                  size="sm"
                  className="ml-auto gap-1 cursor-pointer"
                >
                  <span>
                    Edit
                    <Pencil className="ml-1 h-4 w-4" />
                  </span>
                </Button>
                <span className="text-sm">
                  To collect <CardTitle>182 USD</CardTitle>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <hr />
              <PaymentsLayout>
                {/* Start pay */}
                <StarPay
                  title={"Anticipo"}
                  amount={91.0}
                  percentage={100}
                  date={"2022-01-22"}
                  addPrevPay={() => {}}
                  addNextPay={() => {}}
                  PaymentModalComponent={PaymentModal}
                  paymentModalProps={{ id: "oeee S" }}
                  statusPay={"pendings"}
                />

                {/* pay middle */}
                <MiddlePay
                  title={"pago 1"}
                  amount={91.0}
                  percentage={100}
                  date={"2022-01-23"}
                  addNextPay={() => {}}
                  PaymentModalComponent={PaymentModal}
                  paymentModalProps={{ id: "oeee M" }}
                  statusPay={"pendings"}
                />

                {/* End Pay */}
                <EndPay
                  title={"pago 1"}
                  amount={91.0}
                  percentage={100}
                  date={"2022-01-23"}
                  addNextPay={() => {}}
                  PaymentModalComponent={PaymentModal}
                  paymentModalProps={{ id: "oeee M" }}
                  statusPay={"pendings"}
                />
              </PaymentsLayout>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
