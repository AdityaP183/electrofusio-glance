import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { usersData } from "@/utils/data";
import {
	flexRender,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";

const TableColumns = [
	{
		accessorKey: "username",
		header: "Username",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "password",
		header: "Password",
	},
];

export default function DataTableDisplay() {
	const allUsers = usersData;

	const table = useReactTable({
		data: allUsers,
		columns: TableColumns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div className="mt-4 border rounded-md">
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => {
						return (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef
															.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						);
					})}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows?.map((row) => (
							<TableRow
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
							<TableCell
								colSpan={TableColumns.length}
								className="h-24 text-center"
							>
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
		</div>
	);
}
