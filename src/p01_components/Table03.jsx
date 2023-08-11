import React from 'react';

const tableChapters = [{chapter:"Chapter_1",first_page:"7",last_page:"15",num_pages:"9",num_words:"5709"},{chapter:"Chapter_2",first_page:"16",last_page:"19",num_pages:"4",num_words:"2277"},{chapter:"Chapter_3",first_page:"20",last_page:"25",num_pages:"6",num_words:"2874"},{chapter:"Chapter_4",first_page:"26",last_page:"29",num_pages:"4",num_words:"2033"},{chapter:"Chapter_5",first_page:"30",last_page:"33",num_pages:"4",num_words:"2159"},{chapter:"Chapter_6",first_page:"34",last_page:"37",num_pages:"4",num_words:"1611"},{chapter:"Chapter_7",first_page:"38",last_page:"42",num_pages:"5",num_words:"2767"},{chapter:"Chapter_8",first_page:"43",last_page:"48",num_pages:"6",num_words:"3829"},{chapter:"Chapter_9",first_page:"51",last_page:"55",num_pages:"5",num_words:"2703"},{chapter:"Chapter_10",first_page:"56",last_page:"59",num_pages:"4",num_words:"1733"},{chapter:"Chapter_11",first_page:"60",last_page:"62",num_pages:"3",num_words:"1200"},{chapter:"Chapter_12",first_page:"63",last_page:"69",num_pages:"7",num_words:"3883"},{chapter:"Chapter_13",first_page:"70",last_page:"73",num_pages:"4",num_words:"2242"},{chapter:"Chapter_14",first_page:"74",last_page:"77",num_pages:"4",num_words:"1880"},{chapter:"Chapter_15",first_page:"78",last_page:"79",num_pages:"2",num_words:"999"},{chapter:"Chapter_16",first_page:"80",last_page:"81",num_pages:"2",num_words:"1044"},{chapter:"Chapter_17",first_page:"82",last_page:"85",num_pages:"4",num_words:"2397"}]

const Table03 = () => {
  return (
    <div className="overflow-hidden w-fit shadow-md rounded-lg border border-slate-800 my-6">
      <table className="w-full text-sm text-slate-800 text-center">
        <thead className="font-bold bg-slate-200">
          <tr>
            <th className="text-xs sm:text-sm font-bold px-3 py-2">Chapter</th>
            <th className="text-xs sm:text-sm font-bold px-3 py-2">First_page</th>
            <th className="text-xs sm:text-sm font-bold px-3 py-2">Last_page</th>
            <th className="text-xs sm:text-sm font-bold px-3 py-2">Num_pages</th>
            <th className="text-xs sm:text-sm font-bold px-3 py-2">Num_words</th>
          </tr>
        </thead>
        <tbody className="bg-slate-50">
          {tableChapters.map(
            ({ chapter, first_page, last_page, num_pages, num_words }) => (
              <tr className="border border-y-slate-200">
                <th className="text-xs sm:text-sm font-bold md:px-3 py-2">{chapter}</th>
                <td className="text-xs sm:text-sm md:block  md:px-3 py-2">{first_page}</td>
                <td className="text-xs sm:text-sm md:px-3 py-2">{last_page}</td>
                <td className="text-xs sm:text-sm md:px-3 py-2">{num_pages}</td>
                <td className="text-xs sm:text-sm md:px-3 py-2">{num_words}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table03
