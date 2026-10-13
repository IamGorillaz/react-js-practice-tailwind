import SubmissionForm from "../../organism/SubmissionForm";

const CreateSubmission = () => {
return (
<div className="p-8">
<h1 className="text-3xl font-bold text-text">
Buat Pengajuan Aset
</h1>

  <p className="mt-2 text-sm text-gray-500">
    Buat pengajuan aset baru.
  </p>

  <div className="mt-10 w-full rounded-xl bg-white p-6 shadow-md">
    <SubmissionForm />
  </div>
</div>

);
};

export default CreateSubmission;