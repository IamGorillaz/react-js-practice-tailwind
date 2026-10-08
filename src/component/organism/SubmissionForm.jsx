import Button from "../atom/Button";
import Label from "../atom/Label";
import TextArea from "../atom/TextArea";
import FormField from "../molecule/FormField";

const SubmissionForm = () => {
  return (
    <form className="gap-4 space-y-2">
      <h1 className="font-light text-sm">
        Judul <strong className="text-error">* </strong>
      </h1>
      <FormField
        className="w-full resize-none rounded-lg border border-border px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-primary"
        label={"Title"}
        placeholder={"Masukkan Judul"}
      />
      <h1 className="font-light text-sm">
        Deskripsi <strong className="text-error">* </strong>
      </h1>
      <div>
        <Label>Description</Label>
        <TextArea placeholder="Jelaskan Kebutuhan" />
      </div>
      <h1 className="font-light text-sm">
        Tipe Aset <strong className="text-error">* </strong>
      </h1>
      <div>
        <Label>Asset</Label>
        <select className="w-full rounded-lg border border-border px-4 py-3 text-sm outline-none focus:border-primary">
          <option value=""> Pilih Tipe Aset</option>
          <option value="1">Laptop</option>
          <option value="2">AC</option>
          <option value="3">Kursi</option>
          <option value="4">Meja</option>
          <option value="5">Keyboard</option>
        </select>
      </div>
      <h1 className="font-light text-sm">
        Kuantitas <strong className="text-error">* </strong>
      </h1>
      <FormField
        label={"Quantity"}
        type="number"
        placeholder={"Masukkan Jumlah Aset"}
        className="w-1/3 resize-none rounded-lg border border-border px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-primary"
      />

      <div className="flex justify-end gap-8 pt-4">
        <Button variant={"Cancel"} className={"bg-error w-32 py-1 rounded-lg text-white text-sm shadow-sm"}>Batal</Button>
        <Button variant={"Submit"} className={"bg-primary w-32 py-1 rounded-lg text-white text-sm shadow-sm"}>Submit</Button>
      </div>
    </form>
  );
};

export default SubmissionForm;
