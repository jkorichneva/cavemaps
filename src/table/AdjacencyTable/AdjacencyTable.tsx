import {useEffect, useState} from "react";
import { TableBody, TableHead, TableCell, TableRow, Table, Typography } from '@mui/material';
import {Graph} from "../../types/graph";

export default function AdjacencyTable({ graph }: { graph: Graph }) {
    const [headers, setHeaders] = useState<string[]>(['0']);
    const [tbody, setTbody] = useState<string[][]>([]);

    useEffect(() => {
        const vertices = Object.keys(graph);
        const headers: string[] = ['0'];
        const rows: string[][] = [];
        vertices.forEach(verticeTh => {
            headers.push(verticeTh);
            const row = [verticeTh];
            vertices.forEach(verticeTd => {
                const value = graph[verticeTd as keyof typeof graph].includes(verticeTh) ? 1 : 0;
                row.push(value.toString());
            })
            rows.push(row);
        });
        setHeaders(headers);
        setTbody(rows);
    }, [graph]);

    return (
        <div>
            <Typography variant="h5">Adjacency Table</Typography>
            <Table sx={{ maxWidth: 300 }}>
            <TableHead>
            <TableRow>
                {headers.map(header => <TableCell>{header}</TableCell>)}
            </TableRow>
            </TableHead>
            <TableBody>
            {
                tbody.map((row) => {
                    return (
                        <TableRow>
                            {
                                row.map((td) => {
                                    return (
                                        <TableCell>
                                            {td}
                                        </TableCell>
                                    )
                                })
                            }
                        </TableRow>
                    )
                })
            }
            </TableBody>
        </Table>
        </div>
    )
}
