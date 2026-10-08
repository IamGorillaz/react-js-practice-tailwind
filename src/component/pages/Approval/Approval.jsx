import ApprovalTable from "../../organism/ApprovalTable";
import ApprovalLayout from "../../template/ApprovalLayout";
function Approval() {
  return (
    <ApprovalLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-text">
          Approval aset
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Approve pengajuan aset.
        </p>

        <div className="w-full  rounded-xl bg-white p-6 shadow-md mt-10">
          <ApprovalTable/>
        </div>
      </div>
    </ApprovalLayout>
  );
}


export default Approval;