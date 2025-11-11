const Table = ({ data }) => {
  // get properties
  // this properties only fetch objects
  const properties = [...new Set(data.flatMap((obj) => Object.keys(obj)))];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="">
          <tr>
            {properties.map((property, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {property}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.map((item, index) => (
            <tr key={index}>
              {/* object value fetching */}
              {Object.values(item).map((value, index) => (
                <td
                  key={index}
                  className="px-6 py-4 whitespace-nowrap text-sm text-white"
                >
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
