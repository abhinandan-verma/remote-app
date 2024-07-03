"use client"
 
import { Button } from "@/components/ui/button";
import { convertDateToDaysPassed, convertSalaryToCurrency } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";
import Link from "next/link";
import { ArrowUpDown, MoreHorizontal } from "lucide-react"
 
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator";

export type applyStatus = "applied" | "not-applied" | "interview" | "offer" | "rejected";

export type Job = {
    id: string;
    company: string;
    avatar?: string;
    companyLink?: string;
    role: string;
    status: "active" | "inactive" | "completed";
    date: Date;
    type?: "Full-time" | "Part-time" | "Contract" | "Internship";
    tag?: "New" | "Featured" | "Urgent" | "Hot" | "Recommended";
    minSalary?: number;
    maxSalary?: number;
    location?: string;
    applyStatus?: applyStatus
}

export const columns: ColumnDef<Job>[] = [
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
        accessorKey: "company",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Company
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell: ({ row }) => {
            const company: string = row.getValue("company")
            const avatar: string = row.getValue("avatar")
            const companyLink: string = row.getValue("companyLink")
            return (
                <div className="flex items-center space-x-2">
                    {avatar && (
                        <Image
                            src={avatar}
                            alt={company as string}
                            className="w-10 h-10 rounded-full"
                            width={40}
                            height={40}
                        />
                    )}
                    <Link href={companyLink} className="font-medium text-blue-600 hover:underline">{company}</Link>
                </div>
            )
        }
    },
    {
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Role
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        accessorKey: "role",
    },
    {
        accessorKey: "minSalary",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Minimum Salary
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell: ({ row }) => {
            const minSalary = parseFloat(row.getValue("minSalary"))
            const formatted = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(minSalary/1000)
       
            return <div className="text-right font-medium">{formatted}K</div>
        },
    },
    {
        accessorKey: "maxSalary", 
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Max Salary
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell: ({ row }) => {
            const maxSalary = parseFloat(row.getValue("maxSalary"))
            const formatted = new Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(maxSalary/1000)
       
            return <div className="text-right font-medium">{formatted}K</div>
        }

    },
    {
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Location
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        accessorKey: "location",
        cell: ({ row }) => {
            const location: string = row.getValue("location")
            return <div>{location || "Remote"}</div>
        }
    },
    {
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Type
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        accessorKey: "type",
    },
    {
        accessorKey: "date",
        header: ({ column }) => {
            return (
              <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              >
                Date
                <ArrowUpDown className="ml-2 h-4 w-4" />
              </Button>
            )
          },
        cell: ({ row }) => {
            const days = convertDateToDaysPassed(row.getValue("date"))
            return <div className="text-right">{days}</div>
        }
    },

    {
        header: "Action",
        accessorKey: "action",
        cell: ({ row }) => {
            const applyStatus: applyStatus = row.getValue("applyStatus")
            const company: string = row.getValue("company")
            const role: string = row.getValue("role")
            const applyLink: string = `https://jobs.${company.toLowerCase()}.com/${role.toLowerCase()}`
            const minSalary: number = parseFloat(row.getValue("minSalary"))
            const maxSalary: number = parseFloat(row.getValue("maxSalary"))
            const salaryRange: string = convertSalaryToCurrency(minSalary, maxSalary)

            switch (applyStatus) {
                case "applied":
                    return <Button variant={'link'} className="w-32">Applied</Button>
                case "interview":
                    return <Button variant={'link'} className="w-32">Interview</Button>
                case "offer":
                    return <Button variant={'link'} className="w-32">Offer</Button>
                case "rejected":
                    return <Button variant={'outline'} className="w-32">Rejected</Button>
                default:
                    return <Sheet>
                    <SheetTrigger asChild>
                      <Button className="w-32">Apply</Button>
                    </SheetTrigger>
                    <SheetContent className="lg:min-w-[800px] w-full md:min-w-[600px] min-h-full">
                      <SheetHeader>
                        <h3>Apply To Your Dream Job</h3>
                        <SheetDescription>
                           Read the Job Description and Apply
                        </SheetDescription>
                      </SheetHeader>
                     <SheetDescription>
                                <h2 className="text-4 mb-6">
                                    {role} at {company}       
                                </h2>
                                <h3 className="text-2">
                                  Salary Range:  {salaryRange} 
                                </h3>
                                <Separator className=""/>
                                <h3 className="text-2">
                                    Location: {row.getValue("location")}
                                </h3>
                                <Separator />
                                <h3 className="text-2">
                                    Type: {row.getValue("type")}
                                </h3>
                                <Separator />
                                <h3 className="text-2">
                                    Posted: {convertDateToDaysPassed(row.getValue("date"))}
                                </h3>
                                <Separator />
                                <h3 className="text-2">
                                    Key Responsiblities:
                                </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Quaerat harum molestiae quam officia hic quo excepturi odio
                                    iusto voluptates doloribus placeat commodi voluptas recusandae
                                    consequuntur adipisci, quos quisquam, modi necessitatibus.
                                </p>
                                <Separator />
                                <h3 className="text-2">
                                    Requirements:
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Quaerat harum molestiae
                                    quam officia hic quo excepturi odio                          
                                </p>
                                <Separator />
                                <h3 className="text-2">
                                    Tech Stack:
                                </h3>
                                <Separator />
                                <h3 className="text-2">
                                    Benefits:
                                </h3>
                                <p>
                                    Lorem ipsum dolor sit amet
                                    consectetur adipisicing elit.
                                    Quaerat harum molestiae
                                    quam officia hic quo excepturi odio
                                </p>
                      </SheetDescription>
                        <SheetFooter className="w-full px-2">
                          <SheetClose asChild>
                            <div className="flex flex-col md:flex-row gap-4 w-full items-end">
                              <Button type="button" variant={'ghost'} className="w-full">Cancel</Button>
                              <Button type="submit" className="w-full">Apply</Button>
                            </div>
                            </SheetClose>
                        </SheetFooter>
                    </SheetContent>
                  </Sheet>
            }

        }
    },
    {
        header: "",
        accessorKey: "avatar",
        cell: ({ row }) => { }
    },
    {
        accessorKey: "companyLink",
        header: "",
        cell: ({ row }) => { }
    },
    {
        header: "",
        accessorKey: "status",
        cell: ({ row }) => { }
    },
    {
        header: "",
        accessorKey: "applyStatus",
        cell: ({ row }) => { }
    }
]
    