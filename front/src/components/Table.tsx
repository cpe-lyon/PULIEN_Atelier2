// import {
//     Table,
//     TableBody,
//     TableCell,
//     TableHead,
//     TableHeader,
//     TableRow,
//   } from "@/components/ui/table";

//   const cards = [
//     {
//       cardId: 1,
//       name: "Card 1",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 1",
//       pace: 80,
//       weight: 70,
//       height: 180,
//       price: 100,
//       rating: 85,
//     },
//     {
//       cardId: 2,
//       name: "Card 2",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 2",
//       pace: 75,
//       weight: 65,
//       height: 175,
//       price: 200,
//       rating: 90,
//     },
//     {
//       cardId: 3,
//       name: "Card 3",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 3",
//       pace: 90,
//       weight: 80,
//       height: 190,
//       price: 300,
//       rating: 88,
//     },
//     {
//       cardId: 4,
//       name: "Card 4",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 4",
//       pace: 85,
//       weight: 75,
//       height: 185,
//       price: 150,
//       rating: 92,
//     },
//     {
//       cardId: 5,
//       name: "Card 5",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 5",
//       pace: 78,
//       weight: 68,
//       height: 178,
//       price: 250,
//       rating: 87,
//     },
//     {
//       cardId: 6,
//       name: "Card 6",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 6",
//       pace: 82,
//       weight: 72,
//       height: 182,
//       price: 120,
//       rating: 86,
//     },
//     {
//       cardId: 7,
//       name: "Card 7",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 7",
//       pace: 77,
//       weight: 67,
//       height: 177,
//       price: 210,
//       rating: 89,
//     },
//     {
//       cardId: 8,
//       name: "Card 8",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 8",
//       pace: 88,
//       weight: 78,
//       height: 188,
//       price: 320,
//       rating: 91,
//     },
//     {
//       cardId: 9,
//       name: "Card 9",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 9",
//       pace: 83,
//       weight: 73,
//       height: 183,
//       price: 170,
//       rating: 84,
//     },
//     {
//       cardId: 10,
//       name: "Card 10",
//       image: "https://via.placeholder.com/150",
//       nation: "Nation 10",
//       pace: 79,
//       weight: 69,
//       height: 179,
//       price: 190,
//       rating: 85,
//     },
//   ];
  
//   const InventoryTable = ()=> {
//     return (
//       <div className="h-screen overflow-hidden rounded-lg flex justify-center items-center p-4">
//         <div className="h-[90%] w-full max-w-6xl rounded-lg overflow-y-auto overflow-x-hidden">
//           <Table className="bg-white w-full  shadow">
//             <TableHeader>
//               <TableRow>
//                 <TableHead className="w-[100px]">ID</TableHead>
//                 <TableHead>Name</TableHead>
//                 <TableHead>Image</TableHead>
//                 <TableHead>Nation</TableHead>
//                 <TableHead>Pace</TableHead>
//                 <TableHead>Weight</TableHead>
//                 <TableHead>Height</TableHead>
//                 <TableHead>Price</TableHead>
//                 <TableHead>Rating</TableHead>
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {cards.map((card) => (
//                 <TableRow key={card.cardId}>
//                   <TableCell className="font-medium">{card.cardId}</TableCell>
//                   <TableCell>{card.name}</TableCell>
//                   <TableCell><img src={card.image} alt={card.name} className="w-16 h-16" /></TableCell>
//                   <TableCell>{card.nation}</TableCell>
//                   <TableCell>{card.pace}</TableCell>
//                   <TableCell>{card.weight}</TableCell>
//                   <TableCell>{card.height}</TableCell>
//                   <TableCell>{card.price}</TableCell>
//                   <TableCell>{card.rating}</TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </div>
//       </div>
//     );
//   }
  
//   export default InventoryTable;




// import * as React from "react"
// import {
//   CaretSortIcon,
//   ChevronDownIcon,
//   DotsHorizontalIcon,
// } from "@radix-ui/react-icons"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table"

// import { Button } from "@/components/ui/button"
// import { Checkbox } from "@/components/ui/checkbox"
// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu"
// import { Input } from "@/components/ui/input"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"

// const data: Payment[] = [
//   {
//     id: "m5gr84i9",
//     amount: 316,
//     status: "success",
//     email: "ken99@yahoo.com",
//   },
//   {
//     id: "3u1reuv4",
//     amount: 242,
//     status: "success",
//     email: "Abe45@gmail.com",
//   },
//   {
//     id: "derv1ws0",
//     amount: 837,
//     status: "processing",
//     email: "Monserrat44@gmail.com",
//   },
//   {
//     id: "5kma53ae",
//     amount: 874,
//     status: "success",
//     email: "Silas22@gmail.com",
//   },
//   {
//     id: "bhqecj4p",
//     amount: 721,
//     status: "failed",
//     email: "carmella@hotmail.com",
//   },
// ]

// export type Payment = {
//   id: string
//   amount: number
//   status: "pending" | "processing" | "success" | "failed"
//   email: string
// }

// export const columns: ColumnDef<Payment>[] = [
//   {
//     id: "select",
//     header: ({ table }) => (
//       <Checkbox
//         checked={
//           table.getIsAllPageRowsSelected() ||
//           (table.getIsSomePageRowsSelected() && "indeterminate")
//         }
//         onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//         aria-label="Select all"
//       />
//     ),
//     cell: ({ row }) => (
//       <Checkbox
//         checked={row.getIsSelected()}
//         onCheckedChange={(value) => row.toggleSelected(!!value)}
//         aria-label="Select row"
//       />
//     ),
//     enableSorting: false,
//     enableHiding: false,
//   },
//   {
//     accessorKey: "status",
//     header: "Status",
//     cell: ({ row }) => (
//       <div className="capitalize">{row.getValue("status")}</div>
//     ),
//   },
//   {
//     accessorKey: "email",
//     header: ({ column }) => {
//       return (
//         <Button
//           variant="ghost"
//           onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//         >
//           Email
//           <CaretSortIcon className="ml-2 h-4 w-4" />
//         </Button>
//       )
//     },
//     cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
//   },
//   {
//     accessorKey: "amount",
//     header: () => <div className="text-right">Amount</div>,
//     cell: ({ row }) => {
//       const amount = parseFloat(row.getValue("amount"))

//       // Format the amount as a dollar amount
//       const formatted = new Intl.NumberFormat("en-US", {
//         style: "currency",
//         currency: "USD",
//       }).format(amount)

//       return <div className="text-right font-medium">{formatted}</div>
//     },
//   },
//   {
//     id: "actions",
//     enableHiding: false,
//     cell: ({ row }) => {
//       const payment = row.original

//       return (
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="ghost" className="h-8 w-8 p-0">
//               <span className="sr-only">Open menu</span>
//               <DotsHorizontalIcon className="h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             <DropdownMenuLabel>Actions</DropdownMenuLabel>
//             <DropdownMenuItem
//               onClick={() => navigator.clipboard.writeText(payment.id)}
//             >
//               Copy payment ID
//             </DropdownMenuItem>
//             <DropdownMenuSeparator />
//             <DropdownMenuItem>View customer</DropdownMenuItem>
//             <DropdownMenuItem>View payment details</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       )
//     },
//   },
// ]
// const InventoryTable =()=> {
//   const [sorting, setSorting] = React.useState<SortingState>([])
//   const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
//     []
//   )
//   const [columnVisibility, setColumnVisibility] =
//     React.useState<VisibilityState>({})
//   const [rowSelection, setRowSelection] = React.useState({})

//   const table = useReactTable({
//     data,
//     columns,
//     onSortingChange: setSorting,
//     onColumnFiltersChange: setColumnFilters,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     onColumnVisibilityChange: setColumnVisibility,
//     onRowSelectionChange: setRowSelection,
//     state: {
//       sorting,
//       columnFilters,
//       columnVisibility,
//       rowSelection,
//     },
//   })

//   return (
//     <div className="w-full">
//       <div className="flex items-center py-4">
//         <Input
//           placeholder="Filter emails..."
//           value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
//           onChange={(event) =>
//             table.getColumn("email")?.setFilterValue(event.target.value)
//           }
//           className="max-w-sm"
//         />
//         <DropdownMenu>
//           <DropdownMenuTrigger asChild>
//             <Button variant="outline" className="ml-auto">
//               Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
//             </Button>
//           </DropdownMenuTrigger>
//           <DropdownMenuContent align="end">
//             {table
//               .getAllColumns()
//               .filter((column) => column.getCanHide())
//               .map((column) => {
//                 return (
//                   <DropdownMenuCheckboxItem
//                     key={column.id}
//                     className="capitalize"
//                     checked={column.getIsVisible()}
//                     onCheckedChange={(value: any) =>
//                       column.toggleVisibility(!!value)
//                     }
//                   >
//                     {column.id}
//                   </DropdownMenuCheckboxItem>
//                 )
//               })}
//           </DropdownMenuContent>
//         </DropdownMenu>
//       </div>
//       <div className="rounded-md border">
//         <Table>
//           <TableHeader>
//             {table.getHeaderGroups().map((headerGroup) => (
//               <TableRow key={headerGroup.id}>
//                 {headerGroup.headers.map((header) => {
//                   return (
//                     <TableHead key={header.id}>
//                       {header.isPlaceholder
//                         ? null
//                         : flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                     </TableHead>
//                   )
//                 })}
//               </TableRow>
//             ))}
//           </TableHeader>
//           <TableBody>
//             {table.getRowModel().rows?.length ? (
//               table.getRowModel().rows.map((row) => (
//                 <TableRow
//                   key={row.id}
//                   data-state={row.getIsSelected() && "selected"}
//                 >
//                   {row.getVisibleCells().map((cell) => (
//                     <TableCell key={cell.id}>
//                       {flexRender(
//                         cell.column.columnDef.cell,
//                         cell.getContext()
//                       )}
//                     </TableCell>
//                   ))}
//                 </TableRow>
//               ))
//             ) : (
//               <TableRow>
//                 <TableCell
//                   colSpan={columns.length}
//                   className="h-24 text-center"
//                 >
//                   No results.
//                 </TableCell>
//               </TableRow>
//             )}
//           </TableBody>
//         </Table>
//       </div>
//       <div className="flex items-center justify-end space-x-2 py-4">
//         <div className="flex-1 text-sm text-muted-foreground">
//           {table.getFilteredSelectedRowModel().rows.length} of{" "}
//           {table.getFilteredRowModel().rows.length} row(s) selected.
//         </div>
//         <div className="space-x-2">
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.previousPage()}
//             disabled={!table.getCanPreviousPage()}
//           >
//             Previous
//           </Button>
//           <Button
//             variant="outline"
//             size="sm"
//             onClick={() => table.nextPage()}
//             disabled={!table.getCanNextPage()}
//           >
//             Next
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default InventoryTable;



import * as React from "react";
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Données factices pour les cartes
const cards = [
  {
    cardId: 1,
    name: "Card 1",
    image: "https://via.placeholder.com/150",
    nation: "Nation 1",
    pace: 80,
    weight: 70,
    height: 180,
    price: 100,
    rating: 85,
  },
  {
    cardId: 2,
    name: "Card 2",
    image: "https://via.placeholder.com/150",
    nation: "Nation 2",
    pace: 75,
    weight: 65,
    height: 175,
    price: 200,
    rating: 90,
  },
  {
    cardId: 3,
    name: "Card 3",
    image: "https://via.placeholder.com/150",
    nation: "Nation 3",
    pace: 90,
    weight: 80,
    height: 190,
    price: 300,
    rating: 88,
  },
  {
    cardId: 4,
    name: "Card 4",
    image: "https://via.placeholder.com/150",
    nation: "Nation 4",
    pace: 85,
    weight: 75,
    height: 185,
    price: 150,
    rating: 92,
  },
  {
    cardId: 5,
    name: "Card 5",
    image: "https://via.placeholder.com/150",
    nation: "Nation 5",
    pace: 78,
    weight: 68,
    height: 178,
    price: 250,
    rating: 87,
  },
  {
    cardId: 6,
    name: "Card 6",
    image: "https://via.placeholder.com/150",
    nation: "Nation 6",
    pace: 82,
    weight: 72,
    height: 182,
    price: 120,
    rating: 86,
  },
  {
    cardId: 7,
    name: "Card 7",
    image: "https://via.placeholder.com/150",
    nation: "Nation 7",
    pace: 77,
    weight: 67,
    height: 177,
    price: 210,
    rating: 89,
  },
  {
    cardId: 8,
    name: "Card 8",
    image: "https://via.placeholder.com/150",
    nation: "Nation 8",
    pace: 88,
    weight: 78,
    height: 188,
    price: 320,
    rating: 91,
  },
  {
    cardId: 9,
    name: "Card 9",
    image: "https://via.placeholder.com/150",
    nation: "Nation 9",
    pace: 83,
    weight: 73,
    height: 183,
    price: 170,
    rating: 84,
  },
  {
    cardId: 10,
    name: "Card 10",
    image: "https://via.placeholder.com/150",
    nation: "Nation 10",
    pace: 79,
    weight: 69,
    height: 179,
    price: 190,
    rating: 85,
  },
];

export type Card = typeof cards[0];

export const columns: ColumnDef<Card>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "cardId",
    header: "ID",
    cell: ({ row }) => <div>{row.getValue("cardId")}</div>,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <img src={row.getValue("image")} alt={row.getValue("name")} className="w-16 h-16" />
    ),
  },
  {
    accessorKey: "nation",
    header: "Nation",
    cell: ({ row }) => <div>{row.getValue("nation")}</div>,
  },
  {
    accessorKey: "pace",
    header: "Pace",
    cell: ({ row }) => <div>{row.getValue("pace")}</div>,
  },
  {
    accessorKey: "weight",
    header: "Weight",
    cell: ({ row }) => <div>{row.getValue("weight")}</div>,
  },
  {
    accessorKey: "height",
    header: "Height",
    cell: ({ row }) => <div>{row.getValue("height")}</div>,
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div>{row.getValue("price")}</div>,
  },
  {
    accessorKey: "rating",
    header: "Rating",
    cell: ({ row }) => <div>{row.getValue("rating")}</div>,
  },
];

const InventoryTable = () => {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data: cards,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize: 4,
      },
    },
  });

  return (
    <div className="w-full h-screen overflow-hidden rounded-lg flex justify-center items-center p-4">
      <div className="h-screen  w-full max-w-6xl flex justify-between flex-col rounded-lg overflow-y-auto overflow-x-hidden">
        <div className="">
        <div className="flex items-center  py-4">
          <Input
            placeholder="Filter names..."
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="ml-auto">
                Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {table
                .getAllColumns()
                .filter((column) => column.getCanHide())
                .map((column) => {
                  return (
                    <DropdownMenuCheckboxItem
                      key={column.id}
                      className="capitalize"
                      checked={column.getIsVisible()}
                      onCheckedChange={(value: any) =>
                        column.toggleVisibility(!!value)
                      }
                    >
                      {column.id}
                    </DropdownMenuCheckboxItem>
                  )
                })}
              </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="rounded-md border bg-white">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id} >
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                  className={`${parseInt(row.id,10) % 2 == 0  ? 'bg-white' : 'bg-gray-200'} focus:scale-90`}
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4" >
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InventoryTable;





