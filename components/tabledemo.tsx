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
  date_created: Date;
  customer: string;
  payment: "paid" | "pending" | "cancelled";
  total: number;
  items: number;
};

const orders: Order[] = [
  {
    order: 1001,
    date_created: new Date("2024-02-01"),
    customer: "John Smith",
    payment: "paid",
    total: 250.0,
    items: 3,
  },
  {
    order: 1002,
    date_created: new Date("2024-02-02"),
    customer: "Jane Doe",
    payment: "pending",
    total: 150.0,
    items: 2,
  },
  {
    order: 1003,
    date_created: new Date("2024-02-03"),
    customer: "Bob Wilson",
    payment: "cancelled",
    total: 350.0,
    items: 4,
  },
  {
    order: 1004,
    date_created: new Date("2024-02-04"),
    customer: "Alice Brown",
    payment: "paid",
    total: 450.0,
    items: 5,
  },
  {
    order: 1005,
    date_created: new Date("2024-02-05"),
    customer: "Charlie Davis",
    payment: "paid",
    total: 550.0,
    items: 6,
  },
  {
    order: 1006,
    date_created: new Date("2024-02-06"),
    customer: "Eve Wilson",
    payment: "pending",
    total: 200.0,
    items: 2,
  },
  {
    order: 1007,
    date_created: new Date("2024-02-07"),
    customer: "Frank Miller",
    payment: "cancelled",
    total: 300.0,
    items: 3,
  },
];

export function TableDemo() {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Orders</SelectItem>
            <SelectItem value="free">Free</SelectItem>
            <SelectItem value="subscription">Subscription</SelectItem>
            <SelectItem value="onetime">One Time Payment</SelectItem>
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
        <TableCaption>A list of your recent orders.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Order #</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Payment</TableHead>
            <TableHead className="text-right">Total</TableHead>
            <TableHead className="text-right">Items</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.order}>
              <TableCell className="font-medium">{order.order}</TableCell>
              <TableCell>{order.date_created.toLocaleDateString()}</TableCell>
              <TableCell>{order.customer}</TableCell>
              <TableCell>{order.payment}</TableCell>
              <TableCell className="text-right">
                ${order.total.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">{order.items}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4}>Total</TableCell>
            <TableCell className="text-right">
              ${orders.reduce((sum, order) => sum + order.total, 0).toFixed(2)}
            </TableCell>
            <TableCell className="text-right">
              {orders.reduce((sum, order) => sum + order.items, 0)}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}
