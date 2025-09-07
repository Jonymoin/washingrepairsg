import React from "react";

const Invoice = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-4 mb-6">
        <div>
          <h1 className="text-xl font-bold text-blue-900">
            ASIAN CONSTRUCTIONS & ENGINEERING PTE. LTD
          </h1>
          <p className="text-sm">
            Company Registration No: 202334587K <br />
            7030 Ang Mo Kio Ave 5, #01-53, Singapore 569880 <br />
            Tel: +65 8530 1773 <br />
            Email: washingsolutionsg@gmail.com
          </p>
        </div>
        <div className="text-right">
          <p className="font-semibold">DATE: 07/09/2025</p>
          <p className="font-semibold">INV NO: 432</p>
        </div>
      </div>

      {/* Invoice To */}
      <div className="mb-6">
        <p className="font-semibold">TO:</p>
        <p>5b Ridley Park</p>
        <p></p>
        <p>Singapore 248478</p>
      </div>

      {/* Table */}
      <table className="w-full border-collapse border border-gray-300 mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 px-4 py-2 text-left">S/N</th>
            <th className="border border-gray-300 px-4 py-2 text-left">
              DESCRIPTION
            </th>
            <th className="border border-gray-300 px-4 py-2 text-right">
              AMOUNT
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-gray-300 px-4 py-2">1.</td>
            <td className="border border-gray-300 px-4 py-2">
              Toshiba error code 30
            </td>
            <td className="border border-gray-300 px-4 py-2 text-right">
              $150.00
            </td>
          </tr>
        </tbody>
      </table>

      {/* Total */}
      <div className="flex justify-end mb-6">
        <div className="w-1/3 border-t-2 border-gray-700">
          <p className="text-right font-bold mt-2">TOTAL: $180.00</p>
        </div>
      </div>

      {/* Bank Details */}
      <div className="mb-6 text-sm">
        
        <p>
          <span className="font-semibold">PAYNOW:</span> 202334587K
        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center mt-12">
        <p>Thank you</p>
        <div className="text-right">
          <p className="font-semibold">For ASIAN CONS & ENGG PTE LTD</p>
          <p className="mt-8">______________________</p>
        </div>
      </div>
    </div>
  );
};

export default Invoice;
