import Nprogress from 'nprogress'; // For displaying the progress bar
import Router from 'next/router'; // For handling all the changes in routes/router
import Page from '../components/Page';

// TODO : swap with our own
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css';

Router.events.on('routeChangeStart', () => Nprogress.start()); // fires up when a route starts to change; in other words, when a user navigates to a new page.
Router.events.on('routeChangeComplete', () => Nprogress.done()); // is triggered when a route changes completely:
Router.events.on('routeChangeError', () => Nprogress.done()); // This event is triggered when a route fails to change.

export default function MyApp({ Component, pageProps }) {
  return (
    <Page>
      <Component {...pageProps} />
    </Page>
  );
}
