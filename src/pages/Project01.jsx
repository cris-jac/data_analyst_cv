import React from 'react';
// import plot_01_frame from '../frames/01_heatmap.html' ;
import { Intro, Pages, ChapterWords, ChapterPages, TotalWords } from '../p01_containers';

const Project01 = () => {
  return (
    <div name='project01'>
        {/* <p className='py-20'>This is a project</p> */}
        
        {/* <Iframe url='../frames/01_words_per_page_heatmap.html' width='640px' height='360px' id='' position='relative'/> */}
        
        {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='../frames/02_boxplot.html'/>"}}></div> */}
        {/* <div dangerouslySetInnerHTML={{ __html: "<iframe src='../frames/my_html.html'/>"}}></div> */}
        {/* <Iframe url='/my_html.html' width='640px' height='360px' id='' position='relative'/> */}
        
        
        {/* <div className='flex md:flex-row flex-col items-center'>
        <Iframe url='/02_boxplot.html' width='360px' height='360px' id='' position='relative'/>
        <Iframe url='/frames/03_boxplot.html' width='360px' height='360px' id='' position='relative'/>
        </div>
        
        <p className='py-20'>This is a project</p> */}
        

        <Intro></Intro>
        <Pages></Pages>
        <ChapterWords></ChapterWords>
        <ChapterPages></ChapterPages>
        <TotalWords></TotalWords>

    </div>
  )
}

export default Project01
