import "../styles/globals.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    // put layout here instead on the index.js. to wrap all the pages
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
//this is a special file
  