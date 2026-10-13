import ApprovalTableRow from "../molecule/ApprovalTableRow";
import { approvalsDummy } from "../../service/ProcService";
import { useEffect, useState } from "react";

const ApprovalTable = () => {
  const [procurement, setProcurement] = useState();

  useEffect(() => {
    setProcurement(approvalsDummy);
  }, []);

  const approvals = [
    {
      id: 1,
      title: "Pengadaan Laptop",
      requester: "Budi",
      date: "07/10/2026",
      status: "PENDING",
    },
    {
      id: 2,
      title: "Pengadaan Monitor",
      requester: "Andi",
      date: "07/10/2026",
      status: "PENDING",
    },
    {
      id: 3,
      title: "Pengadaan Keyboard",
      requester: "Sinta",
      date: "06/10/2026",
      status: "APPROVED",
    },
    {
      id: 4,
      title: "Pengadaan Merpati Putih",
      requester: "Bunted",
      date: "06/10/2026",
      status: "APPROVED",
    },
    {
      id: 5,
      title: "Pengadaan Truck India",
      requester: "Prabskuy",
      date: "17/08/2026",
      status: "APPROVED",
    },
    {
      id: 6,
      title: "Pengadaan Mobil Kopdes",
      requester: "Dadan",
      date: "06/10/2026",
      status: "APPROVED",
    },
    {
      id: 7,
      title: "Pengadaan Laptop Manager Kopdes",
      requester: "Sudaryono",
      date: "06/10/2026",
      status: "REJECTED",
    },
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold">No</th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Pengajuan
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Pemohon
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Tanggal
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {approvalsDummy.map((approval) => (
            <ApprovalTableRow key={approval.id} {...approval} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalTable;
