import { useQuery } from "@tanstack/react-query";
import ApprovalTableRow from "../molecule/ApprovalTableRow";
import SubmissionService from "../../service/SubmissionService";

const ApprovalTable = () => {
  const { data: approvalRequest } = useQuery({
    queryKey: ["approvalRequests"],
    queryFn: () => SubmissionService.getSubmission(),
  });

  const approvals = approvalRequest?.data?.data ?? [];

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            {[
              "No",
              "Pengajuan",
              "Pemohon",
              "Tanggal",
              "Status",
              "Action",
            ].map((heading) => (
              <th
                key={heading}
                className="px-6 py-4 text-left text-sm font-semibold"
              >
                {heading}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.isArray(approvals) && approvals.length > 0 ? (
            approvals.map((approval, index) => (
              <ApprovalTableRow
                key={approval.submissionId ?? approval.id ?? index}
                index={index}
                {...approval}
              />
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="py-12 text-center text-sm text-gray-400"
              >
                Tidak ada data pengajuan aset.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ApprovalTable;
