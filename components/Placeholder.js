import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaDev,
} from 'react-icons/fa'
import ContactForm from './ContactForm'

export const Placeholder = () => {
  return (
    <div className='h-screen bg-gray-900 flex align-center justify-center text-center '>
      <div className='px-4 pb-16 md:py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
        <div className='mt-16 max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center'>
          <h2 className='mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none'>
            The page is under development!
          </h2>
          <p className='mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg'>
            You can find me on the following platforms:
          </p>
          {/* social */}
          <div className='flex items-center mb-3 justify-center'>
            <a
              href='https://github.com/edindzabija'
              className='text-white text-5xl transition duration-300 hover:shadow-lg'
            >
              <FaGithubSquare />
            </a>
            <a
              href='https://www.linkedin.com/in/edindzabija/'
              className='text-white text-5xl transition duration-300 hover:shadow-lg'
            >
              <FaLinkedin />
            </a>
            <a
              href='https://twitter.com/edindzabija'
              className='text-white text-5xl transition duration-300 hover:shadow-lg'
            >
              <FaTwitterSquare />
            </a>
            <a
              href='https://dev.to/edin'
              className='text-white text-5xl transition duration-300 hover:shadow-lg'
            >
              <FaDev />
            </a>
          </div>
          {/* social */}
          <p className='mb-6 text-base font-thin tracking-wide text-gray-300 md:text-lg'>
            You can also send me a message and I'll get back to you shortly.
          </p>
          <div className='flex flex-col items-center'>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
