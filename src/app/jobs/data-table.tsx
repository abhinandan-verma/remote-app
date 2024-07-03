"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  VisibilityState,
  Row
} from "@tanstack/react-table"
 
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BookmarkIcon, BriefcaseBusiness, Building2, Calendar, CalendarCheck2, DollarSignIcon, LocateFixedIcon, LocateIcon, MapPinIcon, PersonStandingIcon, SearchIcon, Trash } from "lucide-react"
import { CustomInput } from "@/components/custom-input"
import { CustomTooltipProvider } from "@/components/custom-tooltip-provider"
 
interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    disabled?: boolean
    onSave: (rows: Row<TData>[]) => void;
}
  


function DataTable<TData, TValue>({
    columns,
    data,
    disabled,
    onSave,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [filterKey, setFilterKey] = React.useState<string>("role")

    const { toast } = useToast();
  
    const table = useReactTable({
        data,
        columns,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      onSortingChange: setSorting,
      getSortedRowModel: getSortedRowModel(),
      onColumnFiltersChange: setColumnFilters,
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    })
  
  let filterKeyValue = "role";
  switch (filterKey) {
    case "company":
      filterKeyValue = "company";
      break;
    case "minSalary":
      filterKeyValue = "minSalary";
      break;
    case "location":
      filterKeyValue = "location";
      break;
    case "date":
      filterKeyValue = "date";
      break;
    case "tag":
      filterKeyValue = "tag";
      break;
    default:
      filterKeyValue = "role";
      break;
  }
  
  
  
    
  return (
    <div className="w-full">
        <div className="flex items-center justify-center px-2 py-4 w-full bg-transparent bg-opacity-30 gap-0">
          <Input
              placeholder={`Filter by ${filterKeyValue}`}
              value={(table.getColumn(filterKey)?.getFilterValue() as string) ?? ""}
              onChange={(event) =>
                  table.getColumn(filterKey)?.setFilterValue(event.target.value)
              }
              className="max-w-sm rounded-r-none h-[50px] text-lg text-primary"
          />
          <div className="flex gap-1 md:gap-2 px-2 bg-gray-200 dark:bg-black  rounded-r-lg min-h-1.5 h-[50px]">
          <CustomTooltipProvider tooltip="Filter by Comapny">
            <Building2 className="text-primary" size={24}
             onClick={() => { setFilterKey("company")}}
            />
          </CustomTooltipProvider>
          <CustomTooltipProvider tooltip="Filter by Role">
            <BriefcaseBusiness className="text-primary" size={24}
              onClick={() => { setFilterKey("role")}}
            />
          </CustomTooltipProvider>
          <CustomTooltipProvider tooltip="Filter by Min Salary">
            <DollarSignIcon className="text-primary" size={24}
              onClick={() => { setFilterKey("minSalary")}}
            />
          </CustomTooltipProvider>
          <CustomTooltipProvider tooltip="Filter by location">
            <MapPinIcon className="text-primary" size={24}
              onClick={() => { setFilterKey("location") }}
            />
          </CustomTooltipProvider>
          <CustomTooltipProvider tooltip="Filter by Date Posted">
            <CalendarCheck2 className="text-primary" size={24}
              onClick={() => { setFilterKey("date") }}
            />
          </CustomTooltipProvider>
          </div>
        </div>
      <div className="flex items-center py-4">
        {
            table.getFilteredSelectedRowModel().rows.length > 0  && (
                <Button
                disabled={disabled}
                size={'sm'}
                variant={'outline'}
                className="border-primary hover:bg-primary hover:text-white text-primary"
                onClick={async() => {
                 const ok = await confirm();

                  if(ok){
                    toast({
                      title: "Deleting",
                      description: "Deleting the table(s)",
                      variant: "destructive"
                    })
            
                    onSave(table.getFilteredSelectedRowModel().rows)
                    table.resetRowSelection()
                  }

                  
                }}
                >
                    <BookmarkIcon className="mr-2" size={16} />
                    Save to JobCart ({table.getFilteredSelectedRowModel().rows.length})
                </Button>
            )
        }
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide()
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
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
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
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

      <div className="flex items-center justify-between">
        <div className="flex-1 text-sm text-muted-foreground">
              {table.getFilteredSelectedRowModel().rows.length} of{" "}
              {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
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
  )
}

export default DataTable