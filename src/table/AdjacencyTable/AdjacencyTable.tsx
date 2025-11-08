import sampleGraphs from "../../constants/sampleGraphs";
import {useEffect, useState} from "react";

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
        <table>
            <thead>
            <tr>
                {headers.map(header => <th>{header}</th>)}
            </tr>
            </thead>
            <tbody>
            {
                tbody.map((row) => {
                    return (
                        <tr>
                            {
                                row.map((td) => {
                                    return (
                                        <td>
                                            {td}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    )
                })
            }
            </tbody>

        </table>
    )
}
