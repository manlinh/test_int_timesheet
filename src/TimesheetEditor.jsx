
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const initialData = [
  { teacher: "Träº®", date: "2025-07-07", time: "9:30~11:45", hours: 2.25, editedBy: "" },
  { teacher: "Trç¾½", date: "2025-07-07", time: "9:30~11:45", hours: 2.25, editedBy: "" },
  { teacher: "TrCY", date: "2025-07-07", time: "14:00~15:00", hours: 1.0, editedBy: "" },
];

export default function TimesheetEditor() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(initialData);

  const handleEdit = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    newData[index].editedBy = username || "åŒ¿å";
    setData(newData);
  };

  return (
    <div className="p-6 space-y-4">
      <Card>
        <CardContent className="space-y-2 p-4">
          <label className="font-bold">è¼¸å…¥ä½¿ç”¨è€…åç¨±ä»¥ç·¨è¼¯ï¼š</label>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="ä¾‹å¦‚ï¼šTrAnn" />
        </CardContent>
      </Card>

      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">æ•™å¸«</th>
            <th className="border px-4 py-2">æ—¥æœŸ</th>
            <th className="border px-4 py-2">æ™‚æ®µ</th>
            <th className="border px-4 py-2">æ™‚æ•¸</th>
            <th className="border px-4 py-2">æœ€å¾Œç·¨è¼¯è€…</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-yellow-100">
              <td className="border px-4 py-2">{row.teacher}</td>
              <td className="border px-4 py-2">
                <Input
                  value={row.date}
                  onChange={(e) => handleEdit(index, "date", e.target.value)}
                  title={`æœ€å¾Œç·¨è¼¯ï¼š${row.editedBy || "ç„¡"}`}
                />
              </td>
              <td className="border px-4 py-2">
                <Input
                  value={row.time}
                  onChange={(e) => handleEdit(index, "time", e.target.value)}
                  title={`æœ€å¾Œç·¨è¼¯ï¼š${row.editedBy || "ç„¡"}`}
                />
              </td>
              <td className="border px-4 py-2">
                <Input
                  type="number"
                  value={row.hours}
                  onChange={(e) => handleEdit(index, "hours", parseFloat(e.target.value))}
                  title={`æœ€å¾Œç·¨è¼¯ï¼š${row.editedBy || "ç„¡"}`}
                />
              </td>
              <td className="border px-4 py-2 text-sm text-gray-600">{row.editedBy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
