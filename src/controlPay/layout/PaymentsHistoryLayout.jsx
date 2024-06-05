import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { Plus } from "lucide-react";

export const DashboardLayout = () => {
  const handleToggleEditing = () => {
    // dispatch(toggleEditing());
  };

  return (
    <Card className="xl:col-span-2">
      <CardHeader className="flex flex-row items-center justify-between px-7">
        <div className="grid gap-2">
          <CardTitle>Mis Pagos</CardTitle>
          <CardDescription>Historial</CardDescription>
        </div>
        <div className="flex flex-row items-center gap-3">
          <Button
            size="sm"
            onClick={handleToggleEditing}
            className="w-full text-sm ml-auto gap-1 pl-1.5 pr-3"
          >
            <span className="flex items-center">
              <Plus className="ml-1 h-4 w-4" />
              Nuevo pago
            </span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Descripción</TableHead>
              <TableHead className="hidden sm:table-cell">Status</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="hidden sm:table-cell"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Shopping</TableCell>
              <TableCell className="hidden sm:table-cell">
                <Badge className="text-xs" variant="outline">
                  Successful
                </Badge>
              </TableCell>
              <TableCell className="hidden md:table-cell">2023-06-24</TableCell>
              <TableCell className="text-right">$150.00</TableCell>
              <TableCell className="sm:table-cell">
                <div className="flex justify-end">Refund</div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
