import React from 'react';

const data = {
  primaryCompany: 'Nvidia',
  years: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000],
  values: {
    primary: Array(10).fill(0.02),
    suppliers: [Array(10).fill(0.02), Array(10).fill(0.02), Array(10).fill(0.02)],
    suppliersMedian: Array(10).fill(0.05),
    competitors: [Array(10).fill(0.02), Array(10).fill(0.02), Array(10).fill(0.02)],
    competitorsMedian: Array(10).fill(0.05),
    customers: [Array(10).fill(0.02), Array(10).fill(0.02), Array(10).fill(0.02)],
    customersMedian: Array(10).fill(0.05),
  },
};

const Table = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border bg-customBlue p-2">Attributes</th>
            <th className="border bg-customBlue p-2">Company Name</th>
            {data.years.map((year, index) => (
              <th key={index} className="border bg-customBlue p-2">{year}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className="bg-blue-600 text-white">
            <td rowSpan="1" className="border border-gray-300 p-2">Primary Company</td>
            <td className="border border-gray-300 p-2">{data.primaryCompany}</td>
            {data.values.primary.map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr className="hidden"></tr>
          <tr>
            <td rowSpan="4" className="border bg-customBlue p-2">Suppliers</td>
            <td className="border bg-customLightBlue p-2">Company Name</td>
            {data.values.suppliers[0].map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr>
            <td className="border bg-customLightBlue p-2">Company Name</td>
            {data.values.suppliers[1].map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr>
            <td className="border bg-customLightBlue p-2">Company Name</td>
            {data.values.suppliers[2].map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr className="font-bold border-t-2 border-b-2 border-black">
            <td className="border border-gray-300 p-2">Median</td>
            {data.values.suppliersMedian.map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2 ">{value}</td>
            ))}
          </tr>
          <tr >
            <td rowSpan="4" className="border bg-customBlue p-2">Competitors</td>
            <td className="border bg-customLightBlue p-2">Company Name</td>
            {data.values.competitors[0].map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr>
            <td className="border bg-customLightBlue p-2">Company Name</td>
            {data.values.competitors[1].map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr>
            <td className="border bg-customLightBlue p-2">Company Name</td>
            {data.values.competitors[2].map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr className="font-bold border-t-2 border-b-2 border-black">
            <td className="border border-gray-300 p-2">Median</td>
            {data.values.competitorsMedian.map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr>
            <td rowSpan="4" className="border bg-customBlue p-2">Customers</td>
            <td className="border bg-customLightBlue p-2">Company Name</td>
            {data.values.customers[0].map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr>
            <td className="border bg-customLightBlue p-2">Company Name</td>
            {data.values.customers[1].map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr>
            <td className="border bg-customLightBlue p-2">Company Name</td>
            {data.values.customers[2].map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
          <tr className="font-bold border-t-2 border-b-2 border-black">
            <td className="border border-gray-300 p-2">Median</td>
            {data.values.customersMedian.map((value, index) => (
              <td key={index} className="border-b border-gray-300 p-2">{value}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
