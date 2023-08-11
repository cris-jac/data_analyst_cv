import React from 'react';
import Table01 from '../p01_components/Table01';
import Iframe from 'react-iframe';

const ChapterWords = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col pt-10">
        <h2 className="font-bold text-2xl my-2  px-10">
          Analysis of words per chapter
        </h2>
        <p className="text-justify my-2 px-10">In the previous dataset the data values (words) were distributed per page, if a larger partition was made, the words could be distributed per chapter. As can be seen in the book's index, the book contained 17 chapters divided in two sections.</p>
        <p className="text-justify my-2 px-10">To achieve this, a new dataframe was created in which each column represented a chapter. Having to pass the columns from the previous dataframe specifying where these chapters begin and end. This was done using a function that took the start page and end page as parameters for each chapter.</p>
        <div className='flex flex-col items-center'>
          <Iframe url='/plots/06_words_per_chapter_heatmap.html' height='456px' id='' position='relative' className='w-full md:w-[552px]'/>
        </div>
        <p className="text-justify my-2 px-10">Now, with data grouped by a less abstract unit -such as a page- it is possible to observe some patterns in the document.</p>

        <h3 className='font-bold text-lg mb-2 mt-4 px-10'>Case: Dispersion and outliers</h3>
        <p className="text-justify my-2 px-10">As seen in the heatmap, the length of the chapters is heterogeneous, having chapters with more than 1000 words while a particular chapter has more than 6400 words. If we look at the dispersion of the data, metrics such as the quartiles and IQR (interquartile range) allows us to establish cut-off points to detect outliers. Using these limits, the presence of one outlier is found, Chapter 1.</p>
        <div className='flex flex-col md:flex-row items-center'>
          <Iframe url='/plots/07_words_per_chapter_boxplot.html'  height='456px' id='' position='relative' className='w-full md:w-[552px]'/>
          <Iframe url='/plots/08_words_per_chapter_no_ol_boxplot.html' height='456px' id='' position='relative' className='w-full md:w-[552px] '/>
        </div>
        <p className="text-justify my-2 px-10">It is not uncommon to discard outlier, in order to reduce the heterogeneity of the data. Removing the single outlier (chapter 1) and repeating the anlysis, none of the other values exceed any of the cut points, meaning there are no outliers.</p>
        <div  className='flex flex-col items-center'>
        <Table01></Table01>
        </div>
        
        <p className="text-justify my-2 px-10">However, since the data is so limited, this outlier is not removed and is still considered as part of the data for further analysis.</p>

      </div>
    </div>
  );
}

export default ChapterWords
