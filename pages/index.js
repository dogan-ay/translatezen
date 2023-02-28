import Head from "next/head"
import TextareaAutosize from 'react-textarea-autosize';


export default function Home() {
  return (
    <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=League+Spartan&family=Strait&display=swap" rel="stylesheet" />
    </Head>
     <main>
        <div className="panel">
          <span className="panel-center"><p>⇄</p></span>
        </div>
        <div className="container">
          <div className="text-container first-container">
            <div className="textarea-wrapper">
            <TextareaAutosize autoFocus placeholder="Lorem ipsum dolor"/>

            </div>
            <div className="text-selections">
              <span className="icon">
                <svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 5L4.99998 19M5.00001 5L19 19" stroke="#B1C5E0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>              
              </span>
              <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 16V4C3 2.89543 3.89543 2 5 2H15M9 22H18C19.1046 22 20 21.1046 20 20V8C20 6.89543 19.1046 6 18 6H9C7.89543 6 7 6.89543 7 8V20C7 21.1046 7.89543 22 9 22Z" stroke="#B1C5E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </span>
            </div>
          </div>  
          <div className="text-container">
            <div className="textarea-wrapper"></div>
            <div className="text-selections">
              <span></span>
              <span className="icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 16V4C3 2.89543 3.89543 2 5 2H15M9 22H18C19.1046 22 20 21.1046 20 20V8C20 6.89543 19.1046 6 18 6H9C7.89543 6 7 6.89543 7 8V20C7 21.1046 7.89543 22 9 22Z" stroke="#B1C5E0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              </span>
            </div>
          </div>  

        </div>   

     </main>
    </>
  )
}
