import React from 'react'

const libs = [
    {name: "Numpy"},
    {name: "Pandas"},
    {name: "PyPDF2"},
    {name: "Regex"},
    {name: "Matplotlib"},
    {name: "Seaborn"},
    {name: "Plotly"},
    {name: "Pyrae"},
    {name: "Scipy"},
    {name: "WordCloud"},
    {name: "Urllib"},
    {name: "Io"},
]

const Intro = () => {
  return (
    <div className='min-h-screen w-full'>
        <div className='max-w-screen-lg mx-auto flex flex-col pt-20 px-10'>
            <h1 className='text-center font-bold text-4xl py-6'>Exploratory Data Analysis of PDF eBook</h1>

            <h2 className='font-bold text-2xl my-2'>Introduction</h2>
            <p className='text-justify my-2'>Among the types of data, a distinction can be made between structured and unstructured, depending on the organization. In a way, most data on the Internet is unstructured, which makes it common to deal with this type of data. The goal of this project is to acquire data from an unstructured file (such as a PDF), analyze the data, and extract information from it.</p>
            <h3 className='font-bold text-lg my-2'>Libraries</h3>
            <p className='text-justify my-2'>For this project, Python was the main programming language. However, due to the intended analysis, it was necessary to use third party libraries, such as:
            </p>
            <ul className='text-sm pl-10'>
                    { libs.map(({name})=>(
                        <li className='list-disc'>{name}</li>
                    )) }
            </ul>

            <h3 className='font-bold text-lg my-2'>Data Source & Data Extraction</h3>
            <p className='text-justify my-2'>The document selected was 'Ficciones', written by the argentinian writter Jorge Luis Borges. This document is available on <a href="https://ddooss.org/libros/Jorge_Luis_Borges_ficciones.pdf" target='_blank' rel='noreferrer' className='font-bold'>this link</a>. This document is a PDF format file</p>
            <p className='text-justify my-2'>Once the document was acquired, the text of the document had to be passed to a string, and then separate every word, skipping especial characters. This process was done for every page of the document, as part of a pandas dataframe, in which every column represented a particular page of the book</p>
            <h3 className='font-bold text-lg my-2'>Data Cleansing</h3>
            <p className='text-justify my-2'>Part of the cleansing was removing pages that are not part of the book as such, this is the prologues by others authors. The book is divided in two sections, for which each sections title occupies one entire page. All these pages, as columns were dropped from the dataframe.</p>
            <p className='text-justify my-2'>As for the rows, that represent the words of each page, it was found that the first 5 words were the same for almost every column, this is due to the header of each page containing the name of the author, the title of the book and the number of page. The last one was used to rename the each column. After that these 5 rows were removed from the dataframe.</p>
        </div>
        
    </div>
  )
}

export default Intro
