import React from 'react';
import Iframe from 'react-iframe';
import Table00 from '../p01_components/Table00';

const Pages = () => {
  return (
    <div className='min-h-screen w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col pt-10'>
            <h2 className='font-bold text-2xl my-2 px-10'>Analysis of word per pages</h2>
            <p className='text-justify my-2  px-10'>By this point, the dataframe size was 79 columns x 741 pages and the memory usage 457.5+ KB. It had 0 not null values, meaning that every column had at least one word.</p>

            <div className='flex flex-col items-center'>
                <Iframe url='/plots/01_words_per_page_heatmap.html' id='' height='456px' position='relative' className='w-full md:w-[552px]'/>
            </div>

            <h3 className='font-bold text-lg mb-2 mt-4 px-10'>Case: Search for a word</h3>
            <p className='text-justify my-2  px-10'>In this dataframe, there are xxxxx words, so if it's required to find a specific word, it should be seeked column by column. However this would result repetitive, so here a simple filter is used for both columns and rows, in order to obtained these 'coordinates'.</p>
            <p className='text-justify my-2  px-10'>For this the title of the book is used as an example. So first all columns containing 'ficciones' were selected, detecting 2 columns ('23', '47'). The same was applied for the rows, detecting 3 rows (122, 362, 375). Knowing this, the 'coordinates' can be used to check if the word is there</p>
            
            <div  className='flex flex-col items-center'>
            <Table00></Table00>
            </div>   

            <h3 className='font-bold text-lg mb-2 mt-4 px-10'>Case: Find sentence</h3>
            <p className='text-justify my-2  px-10'>In a more specific approach to the document, since it is a book, it could be relevant to know the context in which this word is mentioned. And for this, finding the word is not enough, so it is necessary to find at least the sentence in which it was used. So, to find the sentence in which the word is used, it was required to use a regular expression for the pdf document, this was implemented in a function that requires two parameters, the word to search for ('ficciones') and the page number (which was previously obtained).</p>
            <p className='text-justify my-2  px-10'>As a result, a list of the sentences were returned.</p>
            <div className="flex flex-col items-center gap-2">
          <p className="md:w-1/2 w-4/5 border bg-slate-50 text-slate-700 rounded-md  text-sm font-jetbrains pl-2">
          [' Éste, de un modo burdo, opone a las ficciones caballerescas la pobre realidad provinciana de su país; Menard elige como «realidad» la tierra de Carmen durante el siglo de Lepanto y de Lope']
- p. 23
          </p>
          <p className="md:w-1/2 w-4/5 border bg-slate-50 text-slate-700 rounded-md  text-sm font-jetbrains pl-2">
          [" En todas las ficciones, cada vez que un hombre se enfrenta con diversas alternativas, opta por una y elimina las otras; en la del casi inextricable Ts'ui Pên, opta -simultáneamente- por todas", ' Yo oía con decente veneración esas viejas ficciones, acaso menos admirables que el hecho de que las hubiera ideado mi sangre y de que un hombre de un imperio remoto me las restituyera, en el curso de una desesperada aventura, en una isla occidental']
- p. 47
          </p>
        </div>

            <p className='text-justify my-2  px-10'>This approach can be done with other words in other pdf files, as long as this PDFs contain text.</p>

        </div>
    </div>
  )
}

export default Pages
