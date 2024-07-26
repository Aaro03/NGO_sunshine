// import React from 'react'
// import Header from './Header'
// import Footer from './Footer'
// import { useTranslation } from 'react-i18next';

// const Home = () => {

//   return (
//     <div className=''>
//         <Header/>
//         <div className="">
//             <div className='absolute text-white text-xl mt-40 ml-5 '>
//                 This NGO is dedicated to efficiently allocating resources for rebuilding schools and communities post-disaster. We prioritize critical needs, directing supplies and funds where they are most needed to restore essential infrastructure. 
//             </div>
//             <img className="w-[100vw] h-[100vh]" src="https://media.istockphoto.com/id/1495580742/photo/close-up-image-of-small-girl-student-standing-in-park.jpg?b=1&s=612x612&w=0&k=20&c=kCXK5gbnKgiVaGHhXJOqPJDFTb-m_BpDeQRfG2W5c6Y=" alt="banner"/>
//         </div>
//         <div className='flex mb-10'>
//             <div className='pt-10 pb-10 justify-between items-center mt-200 ml-10 bg-orange-300 w-[30vw] h-[40vh] text-3xl'>
//                 <p className='ml-20 text-sm pb-5'>We have helped helped</p>
//                 <h1 className='text-5xl ml-20 font-bold'>50,00</h1>
//                 <p className='ml-20 text-sm pt-5'>people so far with your efforts</p>
//             </div>
//             <div className='pt-10 pb-10 justify-between items-center bg-orange-500 w-[30vw] h-[40vh] text-3xl'> 
//                 <h1 className='text-5xl ml-20 font-bold'>20,00+ Volunteers</h1>
//             </div>
//             <div className='pt-10 pb-10 mb-50 justify-between items-center bg-orange-600 w-[30vw] h-[40vh] text-3xl'> 
//                 <p className='ml-20 text-sm pb-5'>We have raised funds worth</p>
//                 <h1 className='text-5xl ml-20 font-bold'>Rs.10 Lakh</h1>
//                 <p className='ml-20 text-sm pt-5'>so far with your donations</p>
//             </div>
//         </div>
//         <div className='mb-30'>
//             <div className='text-orange-400 text-3xl font-bold ml-10'>
//                 About Us
//             </div>
//             <div className='mt-2'>
//                 <div className='text-black text-base text-justify mr-10 ml-10 pt-30'>
//                     The study to develop a practical and accessible solution for consumers to detect artificially ripened fruits. Using image processing techniques on smartphone-captured photographs of the fruits, the suggested method discovered the features that distinguish artificially ripened fruits from
//                     naturally ripened fruits. This was accomplished with a high accuracy rate of 91%, demonstrating the effectiveness of the
//                     method in identifying the presence of calcium carbide in mangoes. The utilization of Tesseract OCR library to recognize numbers on food labels and packaging. This
//                     method is a low-cost and efficient way to ensure precise and reliable product identification in the food business. These
//                     studies provide significant insights and approaches that can help to improve food safety and consumer protection solutions.
//                 </div>
//                 <div className='text-black text-base ml-10 mr-10 mt-2'>
//                     naturally ripened fruits. This was accomplished with a high accuracy rate of 91%, demonstrating the effectiveness of the
//                     method in identifying the presence of calcium carbide in mangoes. The utilization of Tesseract OCR library to recognize numbers on food labels and packaging. This
//                     method is a low-cost and efficient way to ensure precise and reliable product identification in the food business. The
//                 </div>
//             </div>
//         </div> 
//         <Footer/>
//     </div>
    
//   )
// }

// export default Home


import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Header />
      <div className="">
        <div className='absolute text-white text-xl mt-40 ml-5'>
          {t('header.description')}
        </div>
        <img className="w-[100vw] h-[100vh]" src="https://media.istockphoto.com/id/1495580742/photo/close-up-image-of-small-girl-student-standing-in-park.jpg?b=1&s=612x612&w=0&k=20&c=kCXK5gbnKgiVaGHhXJOqPJDFTb-m_BpDeQRfG2W5c6Y=" alt="banner"/>
      </div>
      <div className='flex mb-10'>
        <div className='pt-10 pb-10 justify-between items-center mt-200 ml-10 bg-orange-300 w-[30vw] h-[40vh] text-3xl'>
          <p className='ml-20 text-sm pb-5'>{t('statistics.helped.title')}</p>
          <h1 className='text-5xl ml-20 font-bold'>{t('statistics.helped.count')}</h1>
          <p className='ml-20 text-sm pt-5'>{t('statistics.helped.description')}</p>
        </div>
        <div className='pt-10 pb-10 justify-between items-center bg-orange-500 w-[30vw] h-[40vh] text-xl'>
          <h1 className='text-4xl ml-20 font-bold'>{t('statistics.volunteers.title')}</h1>
        </div>
        <div className='pt-10 pb-10 mb-50 justify-between items-center bg-orange-600 w-[30vw] h-[40vh] text-3xl'>
          <p className='ml-20 text-sm pb-5'>{t('statistics.funds.title')}</p>
          <h1 className='text-5xl ml-20 font-bold'>{t('statistics.funds.amount')}</h1>
          <p className='ml-20 text-sm pt-5'>{t('statistics.funds.description')}</p>
        </div>
      </div>
      <div className='mb-30'>
        <div className='text-orange-400 text-3xl font-bold ml-10'>
          {t('about.title')}
        </div>
        <div className='mt-2'>
          <div className='text-black text-base text-justify mr-10 ml-10 pt-30'>
            {t('about.content1')}
          </div>
          <div className='text-black text-base ml-10 mr-10 mt-2'>
            {t('about.content2')}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
