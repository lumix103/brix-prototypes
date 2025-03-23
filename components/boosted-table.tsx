import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Input } from "./ui/input";
import { Search } from "lucide-react";

type Order = {
  order: number;
  type: "1 Day" | "3 Days" | "7 Days" | "14 Days" | "30 Days";
  started: Date;
  vistors: number;
  joined: number;
  sales: number;
};

const orders: Order[] = [
  {
    order: 1001,
    type: "1 Day",
    started: new Date("2024-02-01"),
    vistors: 250.0,
    joined: 250.0,
    sales: 3,
  },
  {
    order: 1002,
    type: "3 Days",
    started: new Date("2024-02-02"),
    vistors: 150.0,
    joined: 150.0,
    sales: 2,
  },
  {
    order: 1003,
    type: "7 Days",
    started: new Date("2024-02-03"),
    vistors: 350.0,
    joined: 350.0,
    sales: 4,
  },
  {
    order: 1004,
    type: "14 Days",
    started: new Date("2024-02-04"),
    vistors: 450.0,
    joined: 450.0,
    sales: 5,
  },
  {
    order: 1005,
    type: "30 Days",
    started: new Date("2024-02-05"),
    vistors: 550.0,
    joined: 550.0,
    sales: 6,
  },
  {
    order: 1006,
    type: "1 Day",
    started: new Date("2024-02-06"),
    vistors: 200.0,
    joined: 200.0,
    sales: 2,
  },
  {
    order: 1007,
    type: "3 Days",
    started: new Date("2024-02-07"),
    vistors: 300.0,
    joined: 300.0,
    sales: 3,
  },
];

export function BoostedTableDemo() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Boosts</SelectItem>
            <SelectItem value="free">1 Day</SelectItem>
            <SelectItem value="subscription">3 Days</SelectItem>
            <SelectItem value="onetime">7 Days</SelectItem>
            <SelectItem value="onetime">14 Days</SelectItem>
            <SelectItem value="onetime">30 Days</SelectItem>
          </SelectContent>
        </Select>

        <div className="relative">
          <Input
            type="text"
            placeholder="Search orders..."
            className="w-[250px]"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        </div>
      </div>

      <Table>
        <TableCaption>A list of your recent boosts.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Boost #</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Started</TableHead>
            <TableHead>Vistors</TableHead>
            <TableHead className="text-right">Joined</TableHead>
            <TableHead className="text-right">Sales</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.order}>
              <TableCell className="font-medium">{order.order}</TableCell>
              <TableCell>{order.type}</TableCell>
              <TableCell>{order.started.toLocaleDateString()}</TableCell>
              <TableCell>{order.vistors}</TableCell>
              <TableCell className="text-right">{order.joined}</TableCell>
              <TableCell className="text-right">{order.sales * 10}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">
              {orders.reduce((sum, order) => sum + order.joined, 0)}
            </TableCell>
            <TableCell className="text-right">
              {orders.reduce((sum, order) => sum + order.sales, 0) * 10}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
