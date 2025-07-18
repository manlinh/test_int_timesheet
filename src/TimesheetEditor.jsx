
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const initialData = [
  { teacher: "Tr亮", date: "2025-07-07", time: "9:30~11:45", hours: 2.25, editedBy: "" },
  { teacher: "Tr羽", date: "2025-07-07", time: "9:30~11:45", hours: 2.25, editedBy: "" },
  { teacher: "TrCY", date: "2025-07-07", time: "14:00~15:00", hours: 1.0, editedBy: "" },
];

export default function TimesheetEditor() {
  const [username, setUsername] = useState("");
  const [data, setData] = useState(initialData);

  const handleEdit = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    newData[index].editedBy = username || "匿名";
    setData(newData);
  };

  return (
    <div className="p-6 space-y-4">
      <Card>
        <CardContent className="space-y-2 p-4">
          <label className="font-bold">輸入使用者名稱以編輯：</label>
          <Input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="例如：TrAnn" />
        </CardContent>
      </Card>

      <table className="w-full table-auto border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2">教師</th>
            <th className="border px-4 py-2">日期</th>
            <th className="border px-4 py-2">時段</th>
            <th className="border px-4 py-2">時數</th>
            <th className="border px-4 py-2">最後編輯者</th>
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
                  title={`最後編輯：${row.editedBy || "無"}`}
                />
              </td>
              <td className="border px-4 py-2">
                <Input
                  value={row.time}
                  onChange={(e) => handleEdit(index, "time", e.target.value)}
                  title={`最後編輯：${row.editedBy || "無"}`}
                />
              </td>
              <td className="border px-4 py-2">
                <Input
                  type="number"
                  value={row.hours}
                  onChange={(e) => handleEdit(index, "hours", parseFloat(e.target.value))}
                  title={`最後編輯：${row.editedBy || "無"}`}
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
