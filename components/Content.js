import {
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaDev,
} from 'react-icons/fa'

export const Content = () => {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='max-w-lg sm:text-center sm:mx-auto'>
     
        <h2 className='mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
          <span className='relative inline-block'>
            <svg
              viewBox='0 0 52 24'
              fill='currentColor'
              className='absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-32 lg:-mt-10 sm:block'
            >
              <defs>
                <pattern
                  id='6b0188f3-b7a1-4e9b-b95e-cad916bb3042'
                  x='0'
                  y='0'
                  width='.135'
                  height='.30'
                >
                  <circle cx='1' cy='1' r='.7' />
                </pattern>
              </defs>
              <rect
                fill='url(#6b0188f3-b7a1-4e9b-b95e-cad916bb3042)'
                width='52'
                height='24'
              />
            </svg>
            <span className='relative bg-white'>The</span>
          </span>{' '}
          page is under development!
        </h2>
        <p className='text-base text-gray-700 md:text-lg'>
          You can reach me on the following platforms:
        </p>
        <hr className='my-8 border-gray-300' />
        <div className='flex items-center mb-3 sm:justify-center'>
          <a
            href='/'
            className='text-5xl transition duration-300 hover:shadow-lg'
          >
            <FaGithubSquare />
          </a>
          <a
            style={{ color: '#0a66c2' }}
            href='/'
            className='text-5xl transition duration-300 hover:shadow-lg'
          >
            <FaLinkedin />
          </a>
          <a
            style={{ color: '#4da6e9' }}
            href='/'
            className='text-5xl transition duration-300 hover:shadow-lg'
          >
            <FaTwitterSquare />
          </a>
          <a
            href='/'
            className='text-5xl transition duration-300 hover:shadow-lg'
          >
            <FaDev />
          </a>
        </div>
        <p className='max-w-xs text-xs text-gray-600 sm:text-sm sm:max-w-sm sm:mx-auto'>
          Sed ut unde omnis iste natus accusantium doloremque laudantium omnis
          iste.
        </p>
      </div>
    </div>
  )
}
