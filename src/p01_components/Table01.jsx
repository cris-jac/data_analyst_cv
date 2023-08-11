import React from 'react';

const Table01 = () => {
  return (
    <div className='overflow-hidden w-fit shadow-md rounded-lg border border-slate-800 my-6'>
      <table className='w-full text-sm text-slate-800 text-center'>
        <thead className='font-bold bg-slate-200'>
            <tr>
                <th className='rounded-tl-md font-bold px-3 py-2'>Metric</th>
                <th className='font-bold px-3 py-2'>With_outliers</th>
                <th className='font-bold px-3 py-2'>Without_outliers</th>
            </tr>
        </thead>
        <tbody className='bg-slate-50'>
            <tr className=''>
                <td className='font-bold px-3 py-2'>Q1</td>
                <td className='px-3 py-2'>469.25</td>
                <td className='px-3 py-2'>514.00</td>
            </tr>
            <tr className='border border-y-slate-200'>
                <td className='font-bold px-3 py-2'>Q3</td>
                <td className='px-3 py-2'>642.25</td>
                <td className='px-3 py-2'>653.50</td>
            </tr>
            <tr className='border border-y-slate-200'>
                <td className='font-bold px-3 py-2'>Median</td>
                <td className='px-3 py-2'>594.00</td>
                <td className='px-3 py-2'>606.00</td>
            </tr>
            <tr className='border border-y-slate-200'>
                <td className='font-bold px-3 py-2'>IQR</td>
                <td className='px-3 py-2'>173.00</td>
                <td className='px-3 py-2'>139.50</td>
            </tr>
            <tr className='border border-y-slate-200'>
                <th className='font-bold px-3 py-2'>Min_Lim</th>
                <td className='px-3 py-2'>209.75</td>
                <td className='px-3 py-2'>304.75</td>
            </tr>
            <tr className='border border-y-slate-200'>
                <th className='font-bold px-3 py-2'>Max_Lim</th>
                <td className='px-3 py-2'>901.75</td>
                <td className='px-3 py-2'>862.75</td>
            </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table01
