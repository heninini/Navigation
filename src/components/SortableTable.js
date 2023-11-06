import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import useSort from "../hooks/use-sort";
import Table from "./Table";
function SortableTable(props) {
  const { config, data } = props;
  const { sortBy, sortOrder, sortedData, setSortColumn } = useSort({
    data,
    config,
  });
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th onClick={() => setSortColumn(column.label)}>
          {getIcons(column.label, sortBy, sortOrder)}
          {column.label}
        </th>
      ),
    };
  });
  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <IoIosArrowDown />
        <IoIosArrowUp />
      </div>
    );
  }

  if (sortOrder === null) {
    return (
      <div>
        <IoIosArrowDown />
        <IoIosArrowUp />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <IoIosArrowDown />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <IoIosArrowUp />
      </div>
    );
  }
}
export default SortableTable;
