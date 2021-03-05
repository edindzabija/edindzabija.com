import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaDev,
} from 'react-icons/fa'
import ContactForm from './ContactForm'

export const Placeholder = () => {
  return (
    <div className='h-screen bg-gray-900 flex align-center justify-center'>
     
      <div className='px-4 pb-16 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className=' max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
          <h2 className='mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
            The page is under development!
          </h2>
          <p className='mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg'>
            You can find me on the following platforms:
          </p>
          {/* social */}
          <div className='flex items-center mb-3 sm:justify-center'>
            <a
              href='/'
              className='text-white text-5xl transition duration-300 hover:shadow-lg'
            >
              <FaGithubSquare />
            </a>
            <a
              href='/'
              className='text-white text-5xl transition duration-300 hover:shadow-lg'
            >
              <FaLinkedin />
            </a>
            <a
              href='/'
              className='text-white text-5xl transition duration-300 hover:shadow-lg'
            >
              <FaTwitterSquare />
            </a>
            <a
              href='/'
              className='text-white text-5xl transition duration-300 hover:shadow-lg'
            >
              <FaDev />
            </a>
          </div>
          {/* social */}
          <p className='mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg'>
            You can also send me a message and I'll get back to you shortly!
          </p>
          <div className='flex flex-col items-center'>
            <ContactForm />
          </div>
          
          {/* <a
            href='/'
            aria-label='Scroll down'
            className='flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='12'
              height='12'
              viewBox='0 0 12 12'
              fill='currentColor'
            >
              <path d='M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z' />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  )
}
