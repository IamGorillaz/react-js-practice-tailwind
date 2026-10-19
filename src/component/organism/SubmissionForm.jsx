
import { useEffect, useState } from "react";
import Button from "../atom/Button";
import Label from "../atom/Label";
import TextArea from "../atom/TextArea";
import FormField from "../molecule/FormField";
import { SubmissionService } from "../../service/SubmissionService";
import AssetService from "../../service/AssetService";

const SubmissionForm = () => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    assetCategoryId: "",
    assetTypeId: "",
    quantity: 1,
  });

  const [category, setCategory] = useState([]);
  const [assetTypes, setAssetTypes] = useState([]);

  const [loading, setLoading] = useState(false);
  const [loadingTypes, setLoadingTypes] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const result = await AssetService.getCategory();
        const body = result?.data ?? result;

        const items = Array.isArray(body)
          ? body
          : Array.isArray(body?.data)
            ? body.data
            : [];

        setCategory(items);
      } catch (err) {
        console.error(
          "Gagal mengambil kategori:",
          err?.response?.data || err?.message || err
        );

        setError(err?.message || err?.error || "Gagal memuat kategori aset.");
      }
    };

    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = async (e) => {
    const categoryId = e.target.value;

    setForm((prev) => ({
      ...prev,
      assetCategoryId: categoryId,
      assetTypeId: "",
    }));

    setAssetTypes([]);
    setError("");
    setSuccess("");

    if (!categoryId) {
      return;
    }

    setLoadingTypes(true);

    try {
      const result = await AssetService.getAssetTypeById(
        Number(categoryId)
      );

      const body = result?.data ?? result;

      const items = Array.isArray(body)
        ? body
        : Array.isArray(body?.data)
          ? body.data
          : [];

      setAssetTypes(items);

      if (items.length === 0) {
        setError("Tidak ada tipe aset pada kategori ini.");
      }
    } catch (err) {
      console.error(
        "Gagal mengambil tipe aset:",
        err?.response?.data || err?.message || err
      );

      setError(
        err?.message || err?.error || "Gagal memuat tipe aset."
      );
    } finally {
      setLoadingTypes(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!form.assetCategoryId) {
      setError("Silakan pilih kategori aset.");
      return;
    }

    if (!form.assetTypeId) {
      setError("Silakan pilih tipe aset.");
      return;
    }

    setLoading(true);

    const payload = {
      title: form.title,
      description: form.description,
      assetTypeId: Number(form.assetTypeId),
      employeeId: 2,
      quantity: Number(form.quantity),
      createdBy: 2,
    };

    try {
      console.log("Payload submission:", payload);

      const response =
        await SubmissionService.createSubmission(payload);

      console.log("Response API:", response);

      setSuccess("Pengajuan aset berhasil dibuat.");

      setForm({
        title: "",
        description: "",
        assetCategoryId: "",
        assetTypeId: "",
        quantity: 1,
      });

      setAssetTypes([]);
    } catch (err) {
      console.error(
        "Error response:",
        err.response?.data || err.message
      );

      setError(
        err.response?.data?.message ||
          "Gagal membuat pengajuan aset."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      title: "",
      description: "",
      assetCategoryId: "",
      assetTypeId: "",
      quantity: 1,
    });

    setAssetTypes([]);
    setError("");
    setSuccess("");
  };

  return (
    <form onSubmit={handleSubmit} className="gap-4 space-y-2">
      <h1 className="text-sm font-light">
        Judul <strong className="text-error">*</strong>
      </h1>

      <FormField
        name="title"
        label="Title"
        placeholder="Masukkan Judul"
        value={form.title}
        onChange={handleChange}
        required
        className="w-full resize-none rounded-lg border border-border px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-primary"
      />

      <h1 className="text-sm font-light">
        Deskripsi <strong className="text-error">*</strong>
      </h1>

      <div>
        <Label>Description</Label>

        <TextArea
          name="description"
          placeholder="Jelaskan Kebutuhan"
          value={form.description}
          onChange={handleChange}
          required
        />
      </div>

      <h1 className="text-sm font-light">
        Kategori Aset <strong className="text-error">*</strong>
      </h1>

      <div>
        <Label>Asset Category</Label>

        <select
          name="assetCategoryId"
          value={form.assetCategoryId}
          onChange={handleCategoryChange}
          required
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary"
        >
          <option value="" disabled>
            Pilih kategori aset
          </option>

          {category.map((item) => (
            <option key={item.assetId} value={item.assetId}>
              {item.assetName}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-sm font-light">
        Tipe Aset <strong className="text-error">*</strong>
      </h1>

      <div>
        <Label>Asset Type</Label>

        <select
          name="assetTypeId"
          value={form.assetTypeId}
          onChange={handleChange}
          required
          disabled={!form.assetCategoryId || loadingTypes}
          className="w-full rounded-lg border border-border bg-white px-4 py-3 text-sm outline-none focus:border-primary disabled:cursor-not-allowed disabled:bg-gray-100"
        >
          <option value="" disabled>
            {!form.assetCategoryId
              ? "Pilih kategori terlebih dahulu"
              : loadingTypes
                ? "Memuat tipe aset..."
                : "Pilih tipe aset"}
          </option>

          {assetTypes.map((item) => (
            <option
              key={item.assetTypeId}
              value={item.assetTypeId}
            >
              {item.assetTypeName}
            </option>
          ))}
        </select>
      </div>

      <h1 className="text-sm font-light">
        Kuantitas <strong className="text-error">*</strong>
      </h1>

      <FormField
        name="quantity"
        label="Quantity"
        type="number"
        min="1"
        placeholder="Masukkan Jumlah Aset"
        value={form.quantity}
        onChange={handleChange}
        required
        className="w-1/3 resize-none rounded-lg border border-border px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-primary"
      />

      {error && (
        <p className="text-sm text-error">
          {error}
        </p>
      )}

      {success && (
        <p className="text-sm text-green-600">
          {success}
        </p>
      )}

      <div className="flex justify-end gap-8 pt-4">
        <Button
          type="button"
          variant="Cancel"
          onClick={handleReset}
          className="w-32 rounded-lg bg-error py-1 text-sm text-white shadow-sm"
        >
          Batal
        </Button>

        <Button
          type="submit"
          variant="Submit"
          disabled={loading || loadingTypes}
          className="w-32 rounded-lg bg-primary py-1 text-sm text-white shadow-sm"
        >
          {loading ? "Mengirim..." : "Submit"}
        </Button>
      </div>
    </form>
  );
};

export default SubmissionForm;
