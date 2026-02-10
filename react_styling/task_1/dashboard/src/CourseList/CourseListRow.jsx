function CourseListRow({ isHeader = false, textFirstCell = '', textSecondCell = null }) {
  if (isHeader) {
    return (
      <tr>
        {textSecondCell === null ? (
          <th
            colSpan={2}
            className="bg-table-header border border-gray-400 opacity-66 px-2 py-1"
          >
            {textFirstCell}
          </th>
        ) : (
          <>
            <th className="bg-table-header border border-gray-400 opacity-66 px-2 py-1">
              {textFirstCell}
            </th>
            <th className="bg-table-header border border-gray-400 opacity-66 px-2 py-1">
              {textSecondCell}
            </th>
          </>
        )}
      </tr>
    );
  } else {
    return (
      <tr>
        <td className="bg-table-rows border border-gray-400 pl-2 py-1 opacity-45">
          {textFirstCell}
        </td>
        <td className="bg-table-rows border border-gray-400 pl-2 py-1 opacity-45">
          {textSecondCell}
        </td>
      </tr>
    );
  }
}

export default CourseListRow;
