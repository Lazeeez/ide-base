/*
next-global-css is needed to import monaco-editor properly
See https://github.com/vercel/next.js/discussions/27953#discussioncomment-1992992
*/
const { withGlobalCss } = require('next-global-css');

const withConfig = withGlobalCss();

module.exports = withConfig({
  env: {
    IS_TEST_ENV: process.env.IS_TEST_ENV,
    NEW_NEXT_PUBLIC_FIREBASE_PROJECT_ID: 'ide-base',
    NEW_FIREBASE_PRIVATE_KEY:
      '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCuUVBlCg285L1M\n9VNHDg6NsVN/58WfLlJJZWOBTKWjCzVfEOnDS1O/XeNc7C8iETDdQPnNtEqQ6WEd\nVT9G/oDTZycub/K3MEA99tWep54s2Jcbw8V4veTHRa66c6RIg3TKLzaf+dmsSihy\nzoV4lK26ds5TlvWG6l67O3S+ZkNNRamwJTWLbCNo7JNaqEsRYzSbfyTbz/e0LKAG\nT2qOOvD9kB415GBKv3JZXyWC3XTY0jvZKbVvkQGehrAhmr3Z8czkSgr6po63HrVJ\njEno3lVl5OGWFMkjSIenZ61s8CQbYHymBN1Ajnmj8X5QQgNUK7Ey3l6cx8y0gDUV\nzR2nyFCPAgMBAAECggEAG5vta9Nn0Z85DFNe2UY0r+SCISQIfOnNRqq0U+pb4bMI\nxQHcxH3NyeWI+VK/NFocry53YklH9iPAqfCykQAGT3VrE0PP4YvW4PmTZAmQV/IG\nHPOo9zK8ZYN35TgjsQiBGvTXZgcgntUwCt8C7NI/oeTnUP377V55mpYUK4Pu7PH0\neniq5fAg7OTAwtodk1ZdhyQ0b88bitBwnu3Yo/UpFD1Ba2kpHIJB5F46e/WUTC/B\n5vsGucjyNRJhTtgKkZMIitzPVYLbl+HnqVK0WZVBSd2G9lH2gCQrewpVbzDPsEP9\njygkDa5zBsor+AxkiWIfzEk6lkY2gk5PQ1JXeN7qgQKBgQDnFsux8SDMQ+dGglVR\ncmxt8lgEzk1WYtUEQ5e9syp0RqpKzXMZ2LB/aTBrbZ2H96xBZHg/sLtICtlI7Gks\nofokDXUzuRpkvZ7LXyXVM+n7CJGocT24szIsaSqEPPwQaufJtC4UgxEtRfhNNhaO\nsO99hrPJewJIONdcwVYzMha2kQKBgQDBG9ZGLWhF9D7fJ5Gbq0v9RsE6lvFVNdGn\nasIkkufqepBzmebaxp46441cmzdvWf6p443nReWCYYxL2ehujVwiCOmzY23zDpL2\n9OXF/QdrpnRywo+FlWkJFgsIysfPZWfiHvq2cdxhcqkeGz75YOA60IsXXSPPDPPh\nRFhD23FlHwKBgFr2YSXg+X0OOYpKoVTXCpFYtIbnwg+ABcOQ67jzPoHYkw2ww17o\nKcltWW7gDgNIXZi7+I1xfrbD9nW7AUddVv48AedjNF11On1pLZY3wiFbZSJ9uMLs\nXpKWrvKworO/sQ93ii/uy6MbiLqz0LtIMG0jyb9EWUiefz92pvyt+bzRAoGAS1Hq\nP7ESTMa5hxzN5GPp3b4tPAcH1m6Jeb1gQBe0sXZgxVYv/wEdUmbTCl3YP2xgsi75\neE2A+VvG9wbla8ljODs1vCx6BCWZGQ3oWVMaA9kG7oQIqtfeAhdA8or1aGVrIX1n\n2KWMic3JPN7vryEkFIym09QWVXn93c1kiAMdtY0CgYBSpRGn9YJKQicdDPwQ6fdO\nlOoreb3owgRaWbBfJMDpM4jTebix3SrJl9bG1gos0VxM24/l9zBqkCfqCJJ/Tjtw\nzwCy8Mhug47iY4F15+Wh+NAmfBvy/5tZX28AvrhcViQzX13j1RmUTv/O0T+JGmbT\nqewQs0415mRuT2EflUqa/w==\n-----END PRIVATE KEY-----\n',
    NEW_FIREBASE_CLIENT_EMAIL:
      'firebase-adminsdk-iciu8@ide-base.iam.gserviceaccount.com',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
});
