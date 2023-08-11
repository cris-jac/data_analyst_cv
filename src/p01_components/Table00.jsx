import React from 'react'

const Table00 = () => {
  return (
    <div className="overflow-hidden w-fit shadow-md rounded-lg border border-slate-800 my-6">
      <table className="w-full text-sm text-slate-800 text-center">
        <thead className="font-bold bg-slate-200">
          <tr>
            <th className="font-bold px-3 py-2"></th>
            <th className="font-bold px-3 py-2">23</th>
            <th className="font-bold px-3 py-2">47</th>
          </tr>
        </thead>
        <tbody className="bg-slate-50">
          <tr className="border border-y-slate-200">
            <td className="font-bold px-3 py-2">122</td>
            <td className="px-3 py-2">atención</td>
            <td className="px-3 py-2">ficciones</td>
          </tr>
          <tr className="border border-y-slate-200">
            <td className="font-bold px-3 py-2">362</td>
            <td className="px-3 py-2">ficciones</td>
            <td className="px-3 py-2">la</td>
          </tr>
          <tr className="border border-y-slate-200">
            <td className="font-bold px-3 py-2">375</td>
            <td className="px-3 py-2">la</td>
            <td className="px-3 py-2">ficciones</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table00
