function TableCell({ children, className = "" }) {
  return (
    <td className={`px-6 py-4 text-sm ${className} align-middle`}>
      {children}
    </td>
  );
}

export default TableCell;