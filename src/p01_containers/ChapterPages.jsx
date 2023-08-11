import React from 'react';
import Table03 from '../p01_components/Table03';
import Iframe from 'react-iframe';

const ChapterPages = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col pt-10">
        <h2 className="font-bold text-2xl my-2  px-10">
          Analysis of pages per chapter
        </h2>

        <p className="text-justify my-2 px-10">
          Continuing with the chapter analysis, the data could be divided by
          number of pages contained in a specific chapter. For this, it is
          necessary to know where the chapter begins and where it ends, which
          can be done by consulting book's index.
        </p>

        <div className="flex flex-col items-center">
          <Iframe
            url="/plots/11_chapter_proportion_pie.html"
            height="552px"
            id=""
            position="relative"
            className="w-full md:w-[552px] "
          />
        </div>

        <p className="text-justify my-2 px-10">
          For this, a mini-dataframe was created, with few columns for the 17
          chapters. Based on this, it is notorious that the first chapter
          occupies most of the book, representing the 11.7% of the total.
        </p>

        <h3 className="font-bold text-lg mb-2 mt-4 px-10">
          Case: Linear regression
        </h3>
        <p className="text-justify my-2 px-10">
          By adding another numeric attribute to the minidataframe such as the
          number of words per chapter, a relationship can be established between
          these two attributes for each chapter.
        </p>
        <div className="flex flex-col lg:flex-row items-center">
          <Table03></Table03>
          <Iframe
            url="/plots/12_words_vs_pages_reg.html"
            height="456px"
            id=""
            position="relative"
            className="w-full md:w-[552px] "
          />
        </div>
        <p className="text-justify my-2 px-10">
          This linear regression shows a positive correlation (R2=0.9402)
          between the number of pages and the number of words in a chapter. This
          relationship can help establish a mathematical equation.
        </p>
        <div className="md:w-1/2 w-full mx-auto px-10 italic text-sm">
          <p className="text-center">y = -563.5463 + 661.3024 x</p>
          <p className="text-left">
            Where:<br></br>y = number of words <br></br>x = number of pages
          </p>
        </div>

        <p className="text-justify my-2 px-10">
          With this equation, we could project how many words a chapter would
          have, based solely on the number of pages and viceversa. Here are some
          examples of using this equation.
        </p>
        <div className="flex flex-col items-center">
          <p className="md:w-1/2 w-4/5 border bg-slate-50 text-slate-700 rounded-sm  text-sm font-jetbrains pl-2">
            A chapter with 12 pages would have 7372 words<br></br>A chapter with
            6 pages would have 3404 words<br></br>A chapter with 1 pages would
            have 98 words
          </p>
        </div>

        <p className="text-justify my-2 px-10">
          At this point it is necessary to remember that this linear regression
          as well as many of the analyzes in this section are not significant,
          since the book only contains 17 chapters, therefore only 17 values are
          available.
        </p>

        <h3 className="font-bold text-lg mb-2 mt-4 px-10">Case: Probability distribution</h3>
        <p className="text-justify my-2 px-10">
          On average, a chapter contains 5 pages. Chapters like 15 and 16 have
          only 2 pages, containing the least number of pages, while Chapter 1
          has 9 pages, this being the maximum number of pages.
        </p>
        <p className="text-justify my-2 px-10">
          With this data, the probability that a chapter has a certain length
          (in terms of pages) can be obtained. In this regard, the Poisson
          distribution was used, taking as event a certain length of a chapter.
        </p>
        <div className="flex flex-col items-center">
          <Iframe
            url="/plots/16_poisson_distribution.html"
            id=""
            height="456px"
            position="relative"
            className="w-full md:w-[552px]"
          />
        </div>
        <p className="text-justify my-2 px-10">
          The probability distribution considered only values between the range
          of pages per chapter for this book, being from 2 pages to 9 pages. As
          a result, it is established the probability of a chapter being between
          4 and 5 pages is greater than any other length.
        </p>

        
      </div>
    </div>
  );
}

export default ChapterPages
