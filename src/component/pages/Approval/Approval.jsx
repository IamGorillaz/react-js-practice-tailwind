import ApprovalTable from "../../organism/ApprovalTable";

function Approval() {
return (
<div className="p-8">
<h1 className="text-3xl font-bold text-text">
Approval Aset
</h1>

  <p className="mt-2 text-sm text-gray-500">
    Approve pengajuan aset.
  </p>

  <div className="mt-10 w-full rounded-xl bg-white p-6 shadow-md">
    <ApprovalTable />
  </div>
</div>

);
}

export default Approval;