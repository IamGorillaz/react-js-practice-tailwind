import Badge from "../atom/Badge";
import Button from "../atom/Button";
import TableCell from "../atom/TableCell";

const ApprovalTableRow = ({
  id,
  title,
  requester,
  date,
  status,
}) => {
  return (
    <tr className="border-b border-border">
      <TableCell>{id}</TableCell>

      <TableCell>
        <span className="font-medium text-black">
          {title}
        </span>
      </TableCell>

      <TableCell>{requester}</TableCell>

      <TableCell>{date}</TableCell>

      {/* Status */}
      <TableCell>
        <Badge variant={status}>
          {status}
        </Badge>
      </TableCell>

      {/* Action */}
      <TableCell>
        <Button className="bg-primary text-white rounded-lg px-4">
          Detail
        </Button>
      </TableCell>
    </tr>
  );
};

export default ApprovalTableRow;