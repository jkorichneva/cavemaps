import sampleGraphs from "../../constants/sampleGraphs";
import {useEffect, useState} from "react";
import { TableBody, TableHead, TableCell, TableRow, Table } from '@mui/material';

export default function AdjacencyTable() {
    const [headers, setHeaders] = useState<string[]>(['0']);
    const [tbody, setTbody] = useState<string[][]>([]);

    useEffect(() => {
        const vertices = Object.keys(sampleGraphs);
        const headers: string[] = ['0'];
        const rows: string[][] = [];
        vertices.forEach(verticeTh => {
            headers.push(verticeTh);
            const row = [verticeTh];
            vertices.forEach(verticeTd => {
                const value = sampleGraphs[verticeTd as keyof typeof sampleGraphs].includes(verticeTh) ? 1 : 0;
                row.push(value.toString());
            })
            rows.push(row);
        });
        setHeaders(headers);
        setTbody(rows);
    }, []);

    return (
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
    )
}
