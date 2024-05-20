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
import { BsFillPlusCircleFill } from "react-icons/bs";

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

              <div className="w-full py-6">
                <div className="flex">
                  <div className="w-1/4">
                    <div className="relative mb-2">
                      <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-white w-full">0</span>
                      </div>
                    </div>
                    <div className="text-xs text-center md:text-base">
                      Select Server
                    </div>
                  </div>

                  <div className="w-1/4">
                    <div className="relative mb-2">
                      <div
                        className="absolute flex align-center items-center align-middle content-center"
                        style={{
                          width: "calc(100% - 2.5rem - 1rem)",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <div
                            className="w-0 bg-green-300 py-1 rounded"
                            style={{ width: "100%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-10 h-10 mx-auto bg-green-500 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-white w-full">
                          <svg
                            className="w-full fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              className="heroicon-ui"
                              d="M19 10h2a1 1 0 0 1 0 2h-2v2a1 1 0 0 1-2 0v-2h-2a1 1 0 0 1 0-2h2V8a1 1 0 0 1 2 0v2zM9 12A5 5 0 1 1 9 2a5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H7a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h5a5 5 0 0 1 5 5v2z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-center md:text-base">
                      Add User
                    </div>
                  </div>

                  <div className="w-1/4">
                    <div className="relative mb-2">
                      <div
                        className="absolute flex align-center items-center align-middle content-center"
                        style={{
                          width: "calc(100% - 2.5rem - 1rem)",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <div
                            className="w-0 bg-green-300 py-1 rounded"
                            style={{ width: "50%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-gray-600 w-full"></span>
                      </div>
                    </div>
                    <div className="text-xs text-center md:text-base">
                      Setting
                    </div>
                  </div>

                  <div className="w-1/4">
                    <div className="relative mb-2">
                      <div
                        className="absolute flex align-center items-center align-middle content-center"
                        style={{
                          width: "calc(100% - 2.5rem - 1rem)",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                        }}
                      >
                        <div className="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <div
                            className="w-0 bg-green-300 py-1 rounded"
                            style={{ width: "0%" }}
                          ></div>
                        </div>
                      </div>
                      <div className="w-10 h-10 mx-auto bg-white border-2 border-gray-200 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-gray-600 w-full">
                          <svg
                            className="w-full fill-current"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                          >
                            <path
                              className="heroicon-ui"
                              d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-2.3-8.7l1.3 1.29 3.3-3.3a1 1 0 0 1 1.4 1.42l-4 4a1 1 0 0 1-1.4 0l-2-2a1 1 0 0 1 1.4-1.42z"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-center md:text-base">
                      Finished
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full py-6">
                <div className="flex">
                  <div className="w-1/4">
                    <div className="relative mb-2">
                      <div className="w-1/2 z-0 absolute left-0 top-1/2 transform -translate-y-1/2 ">
                        <div className="h-0.5 w-full bg-gray-200 rounded items-center align-middle align-center flex-1"></div>
                      </div>

                      <div className="z-20 relative w-10 h-10 mx-auto bg-gray-200 rounded-full text-lg text-white flex items-center">
                        <span className="text-center text-white w-full">0</span>
                      </div>

                      <div className="w-1/2 z-0 absolute right-0 top-1/2 transform -translate-y-1/2 ">
                        <div className="h-0.5 w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                          <BsFillPlusCircleFill className="absolute -right-2 w-5 h-5 top-1/2 transform -translate-y-1/2 opacity-0 transition-opacity duration-300 hover:opacity-100" />
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-center md:text-base">
                      Add User
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};
