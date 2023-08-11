import React from 'react';
import Iframe from 'react-iframe';

const TotalWords = () => {
  return (
    <div className="min-h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col pt-10">
        <h2 className="font-bold text-2xl my-2  px-10">
          Analysis of total words
        </h2>
        <p className="text-justify my-2 px-10">
          For this analysis, a new dataframe was created, containing only 1
          column with words. This was the result of merging each column of the
          word by chapter dataframe and removing null values. With this, it is
          known that the book contains 42013 words (ignoring the section titles)
          of which can be reduced to 9251 different words, without taking into
          account the repeated words.
        </p>
        <p className="text-justify my-2 px-10">
          Based on the above, it is obvious that some words are repeated many
          times, this beeing the case of the word 'de' (spanish for 'of'), which
          was used 2540 times.
        </p>
        <div className="flex flex-col items-center">
          <Iframe
            url="/plots/14_total_words_count.html"
            id=""
            height="456px"
            position="relative"
            className="w-full md:w-[552px]"
          />
        </div>

        <p className="text-justify my-2 px-10">
          On the contrary there were 5798 out of the 9251 unique words that were
          used only once in the book.
        </p>

        <h3 className="font-bold text-lg my-2 px-10">
          Case: Check if a word is in Spanish
        </h3>
        <p className="text-justify my-2 px-10">
          Jorge Luis Borges, the author of the book, is considered a
          cosmopolitan writer, since he continously refer to foreign authors as
          well as characters, but also contries and elements of other cultures.
          For this, is not hard to find words that are not typical spanish
          words.
        </p>
        <p className="text-justify my-2 px-10">
          So out of curiosity, the words mentioned in this book were put through
          a check with the online DLE (Diccionario de la lengua española) in
          order to verify if these existed in the spanish language. With help of
          a third-party API, a request for each word was done. However, due to
          the number of requests limited to 850, the task of making a request
          for each word was not possible, but instead this request was done for
          the 500 most useed words.
        </p>
        <p className="text-justify my-2 px-10">
          As a result, only 60 words were not found in the DLE:
        </p>
        <div className="flex flex-col items-center my-2">
          <p className="md:w-1/2 w-4/5 border bg-slate-50 text-slate-700 rounded-sm  text-sm font-jetbrains pl-2">
            ['es', 'fue', 'años', 'dahlmann', 'eran', 'tlön', 'unos', '1',
            'lönnrot', 'menard', 'veces', 'the', 'sé', 'hladík', 'runeberg',
            'cosas', 'unas', 'funes', 'sólo', 'mis', 'almotásim', 'moon',
            'manos', 'kilpatrick', '2', 'ts', 'ui', 'treviranus', 'uqbar',
            'ireneo', 'hechos', '3', 'pên', 'albert', 'quain', 'fueron',
            'scharlach', 'of', 'madden', 'nombres', 'yarmolinsky', 'herbert',
            'pierre', 'nolan', 'roemerstadt', 'creo', 'obras', 'cervantes',
            'aires', 'aguas', 'soldados', 'bahadur', 'formas', 'azevedo', 'vi',
            'shakespeare', 'bioy', 'caras', 'and', 'nîmes']
          </p>
        </div>
        <p className="text-justify my-2 px-10">
          In the list of apparently non-spanish words, we can find:
        </p>
        <ul className="pl-20 pr-10">
          <li className="list-disc">
            Actual spanish words mistakenly not found due to the plural form of
            common nouns (años, cosas, veces), or conjugated verbs (es, fue,
            eran)
          </li>
          <li className="list-disc">Numbers, such as: 1, 2, 3</li>
          <li className="list-disc">
            Proper nouns: Shakespear, Cervantes, Pierre, Nolan, etc.
          </li>
          <li className="list-disc">
            Actual english words, like: the, moon, of, and
          </li>
        </ul>
        <h3 className="font-bold text-lg my-2 px-10">
          Case: WordCloud for most used words
        </h3>
        <p className="text-justify my-2 px-10">
          Finally, for aesthetics purposes, a worclcoud was generated from a
          string of the total words in th book.
        </p>
        <div className="flex flex-col items-center">
          <Iframe
            url="/plots/17_wordcloud.html"
            id=""
            position="relative"
            height="648px"
            className="w-full"
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm font-semibold">
            This and more is available on my GitHub
          </p>
          <a
            href="https://github.com/cris-jac/EDA_Ficciones/blob/master/Exploratory_Data_Analysis_PDF_format_eBook_Ficciones.ipynb"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-4 py-1 border-2 rounded-lg border-slate-900 bg-transparent hover:bg-slate-900 hover:text-slate-50 text-xl font-semibold ease-in-out">
              Go to Repo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default TotalWords
