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
// import { StarPay } from "../components/StartPay";
// import PaymentModal from "../components/PaymentModal";
// import { MiddlePay } from "../components/MiddlePay";
// import { EndPay } from "../components/EndPay";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "@/store/auth/thunks";
import { splitNext } from "@/store/controlSlice/controlSlice";
import { PaymentItem } from "../components/PaymentItem";
import PaymentModal from "../components/PaymentModal";
import { EndPay } from "../components/EndPay";

export const ControlPayPage = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);
  const { payments, isEditing, totalAmount } = useSelector(
    (state) => state.control
  );

  const onLogout = () => {
    console.log("logout");
    dispatch(startLogout());
  };

  const handleSplitNext = (id) => {
    console.log(id);
    dispatch(splitNext(id));
  };

  // const handleUpdatePayment = (id, name, amount, percentage, date) => {
  //   dispatch(updatePayment({ id, name, amount, percentage, date }));
  // };

  // const handleUpdateAmount = (id, newAmount) => {
  //   dispatch(updateAmount({ id, amount: newAmount }));
  // };

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
            <h2 className="font-bold">
              {displayName.charAt(0).toUpperCase() + displayName.slice(1)}
            </h2>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <Avatar className="h-9 w-9 sm:flex">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Avatar"
                  />
                  <AvatarFallback>
                    {displayName.slice(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>Logout</DropdownMenuItem>
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
                  To collect{" "}
                  <CardTitle className="w-24 text-right">
                    {totalAmount} USD
                  </CardTitle>
                </span>
              </div>
            </CardHeader>
            <CardContent>
              <hr />
              <PaymentsLayout>
                {payments.map((payment, index) => {
                  return (
                    <PaymentItem
                      key={payment.id}
                      position={index}
                      last={payments.length - 1}
                      payment={payment}
                      isEditing={isEditing}
                      totalAmount={totalAmount}
                      splitNext={() => handleSplitNext(payment.id)}
                    />
                  );
                })}
              </PaymentsLayout>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
