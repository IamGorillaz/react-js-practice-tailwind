import FormField from "../../molecule/FormField";
import SubmissionForm from "../../organism/SubmissionForm";
import DashboardLayout from "../../template/DashboardLayout";


function CreateSubmission() {
  return (
    <DashboardLayout>
      <div className="p-8">
        <h1 className="text-3xl font-bold text-text">
          Buat Pengajuan Aset
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Buat pengajuan aset baru.
        </p>

        <div className="w-full  rounded-xl bg-white p-6 shadow-md mt-10">
          <SubmissionForm/>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default CreateSubmission;