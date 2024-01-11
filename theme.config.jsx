import { useConfig } from 'nextra-theme-docs';

const logo = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='88'
    height='50'
    viewBox='0 0 88 50'
    fill='none'
  >
    <path
      d='M19.9548 38.1265H7.71116V24.5227C2.59001 24.5227 0 21.957 0 16.7661V0H12.2437V15.4535C12.2437 15.5131 12.3025 15.5728 12.3614 15.5728H15.128C15.1869 15.5728 15.2457 15.5131 15.2457 15.4535V0H27.4894V16.7661C27.4894 21.957 24.9583 24.5227 19.9548 24.5227V38.1265Z'
      fill='currentColor'
    />
    <path
      d='M88 50H51.3279C47.2663 50 45.206 48.4487 45.206 45.2864V23.4487H42.204V38.1265H29.9603V0H42.204V14.6778H45.206V0H57.4497V40.3938C57.4497 40.4535 57.5086 40.5131 57.5674 40.5131H88V50ZM88 38.1265H75.7563V22.9714C75.7563 22.9117 75.6975 22.852 75.6386 22.852H72.7543V38.1265H60.5106V0H81.8782C85.9398 0 87.9411 1.61098 87.9411 4.83294V15.9308C87.9411 17.7804 86.9404 18.7948 84.9391 19.0334C86.9993 19.3317 88 20.3461 88 22.1957V38.1265ZM75.7563 15.1551V9.66587C75.7563 9.60621 75.6975 9.54654 75.6386 9.54654H72.7543V15.2745H75.6386C75.6975 15.2745 75.7563 15.2148 75.7563 15.1551Z'
      fill='currentColor'
    />
  </svg>
);

export default {
  head: () => {
    const { title } = useConfig();

    return (
      <>
        <title>{title || 'Courses'} - YHR</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta property='og:title' content='Courses by Yarala Hruthik Reddy' />
        <meta
          property='og:description'
          content="Course notes for Hruthik Reddy's courses that he teaches on various platforms."
        />
      </>
    );
  },
  logo,
  search: {
    placeholder: 'Search',
  },
  primaryHue: 300,
  primarySaturation: 100,
  footer: {
    text: <span>© Yarala Hruthik Reddy {new Date().getFullYear()}</span>,
  },
  toc: {
    backToTop: true,
  },
};
