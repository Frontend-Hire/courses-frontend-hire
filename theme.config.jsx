export default {
  head: (
    <>
      <title>Courses by YHR</title>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:title' content='Courses by Yarala Hruthik Reddy' />
      <meta
        property='og:description'
        content="Course notes for Hruthik Reddy's courses that he teaches on various platforms."
      />
    </>
  ),
  logo: <span>Courses by Hruthik Reddy</span>,
  search: {
    placeholder: 'Search',
  },
  primaryHue: 300,
  primarySaturation: 100,
  footer: {
    text: <span>© Yarala Hruthik Reddy {new Date().getFullYear()}</span>,
  },
};
