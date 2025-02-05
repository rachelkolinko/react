import logo from './logo.svg';
import './App.css';
import Test from './components/test';
//import ChangeImg from './lesson_2/components/ChangeImg';
import Example from './lesson_3/components/Example';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Link } from "react-router-dom"
import Home from './lesson_4/components/Home';
import Contact from './lesson_4/components/Contact';
import Service from './lesson_4/components/Service';
import About from './lesson_4/components/About';
import Thank from './lesson_4/components/Thank';
import i18n from './i18n';
import { I18nContext } from 'react-i18next';

// function App() {
//   return (
//   //   <div className="App">
//   //     <header className="App-header">
//   //       <img src={logo} className="App-logo" alt="logo" />
//   //       <p>
//   //         Edit <code>src/App.js</code> and save to reload.
//   //       </p>
//   //       <a
//   //         className="App-link"
//   //         href="https://reactjs.org"
//   //         target="_blank"
//   //         rel="noopener noreferrer"
//   //       >
//   //         Learn React
//   //       </a>
//   //     </header>
//   // </div>
//   <>
//       {/* <ChangeImg></ChangeImg> */}
//       <Example></Example>
//   </>
//   );
// }

import React from 'react';
import { useTranslation } from 'react-i18next';
import { Provider } from "react-redux";
import store from './lesson_5/redux/store';
import TodoList from './lesson_5/components/TodoList';


function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    // <div >
    //   <BrowserRouter>
    //     <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
    //       <button type="button" class="btn btn-light" onClick={() => changeLanguage('en')}> english</button>
    //       <button type="button" class="btn btn-light" onClick={() => changeLanguage('he')}>עברית</button>
    //       <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/">{t('Home.title')}</Link>|
    //       <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/about">{t('About.title')}</Link>|
    //       <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/contact">{t('Contact.title')}</Link>|
    //       <Link class="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover" to="/service">{t('Service.title')}</Link>
    //     </nav>
    //     <Routes>
    //       <Route path="/" element={<Home/>}/>
    //       <Route path="/about" element={<About/>}/>
    //       <Route path="/contact" element={<Contact/>}/>
    //       <Route path="/service" element={<Service/>}/>
    //       <Route path="/Thank" element={<Thank/>}/>
    //     </Routes>
    //     </BrowserRouter>
      
    // </div>
    <Provider store={store}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
