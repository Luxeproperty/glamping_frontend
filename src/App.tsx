import { Routes, Route } from 'react-router-dom';
import Home from './features/Home';
import ContactUs from './features/ContactUs';
import NotFound from './components/common/NotFound';
import Layout from './components/common/Layout'; // Layout component
import OurStory from './features/OurStory';
import { The68Cafe } from './features/The68Cafe';
import DigitalDetox from './features/DigitalDetox';

import { TheCosy } from './features/TheCosy';
import TheFamily from './features/TheFamily';
import TheHideaway from './features/TheHideaway';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />

      <Route
        path="/our-story"
        element={
          <Layout>
            <OurStory />
          </Layout>
        }
      />
      <Route
        path="contact-us"
        element={
          <Layout>
            <ContactUs />
          </Layout>
        }
      />
      <Route
        path="the-68-cafe"
        element={
          <Layout>
            <The68Cafe />
          </Layout>
        }
      />
      <Route
        path="digital-detox"
        element={
          <Layout>
            <DigitalDetox />
          </Layout>
        }
      />
      <Route
        path="the-cosy"
        element={
          <Layout>
            <TheCosy />
          </Layout>
        }
      />
      <Route
        path="the-family"
        element={
          <Layout>
            <TheFamily />
          </Layout>
        }
      />
      <Route
        path="the-hideaway"
        element={
          <Layout>
            <TheHideaway />
          </Layout>
        }
      />
      <Route
        path="*"
        element={
          <Layout>
            <NotFound />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
