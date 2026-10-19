import Badge from "../atom/Badge";
import Button from "../atom/Button";
import TableCell from "../atom/TableCell";
import {useQuery} from '@tanstack/react-query'

const ApprovalTableRow = ({
  id,
  submissionId,
  name,
  title,
  requester,
  date,
  bookedQuantity,
  status,
  approvalStatus,
  index,
}) => {


  const displayId = submissionId ?? id ?? (index !== undefined ? index + 1 : "-");
  const displayName = name ?? title ?? "-";
  const displayRequester = name ? title : (requester ?? "-");
const displayQuantityOrDate =
  bookedQuantity !== undefined
    ? `${bookedQuantity} Unit`
    : (date ?? "-");  const displayStatus = approvalStatus ?? status ?? "PENDING";


  return (
    <tr className="border-b border-border hover:bg-gray-50 transition-colors">
      <TableCell>{displayId}</TableCell>

      <TableCell>
        <span className="font-medium text-black">
          {displayName}
        </span>
      </TableCell>

      <TableCell>{displayRequester}</TableCell>

      <TableCell>{displayQuantityOrDate}</TableCell>

      {/* Status */}
      <TableCell>
        <Badge variant={displayStatus}>
          {displayStatus}
        </Badge>
      </TableCell>

      {/* Action */}
      <TableCell>
        <Button className="bg-white text-black border-2 border-gray-300 rounded-lg px-4 hover:bg-gray-100 transition-colors">
          Detail
        </Button>
      </TableCell>
    </tr>
  );
};

export default ApprovalTableRow;