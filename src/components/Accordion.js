import { useState } from "react";

import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handlclick = (nextIndex) => {
    expandedIndex === nextIndex
      ? setExpandedIndex(null)
      : setExpandedIndex(nextIndex);
  };
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;
    const icon = (
      <span className="text-xl">
        {isExpanded ? <IoIosArrowDown /> : <IoIosArrowForward />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handlclick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
