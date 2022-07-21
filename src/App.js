import './App.scss';
import Frame from './hoc/frame/Frame';
import Context from './context/Context';
import {Route, Routes} from 'react-router-dom';
import AppService from './services/appService';
import React, {useMemo, useEffect} from 'react';
import MarkupService from './services/markupService';
import Main from './components/presentation/main/Main';


const App = () => {
  const appService = useMemo(() => new AppService(navigator.language), []);
  const markupService = useMemo(() => new MarkupService(navigator.language), []);
   
  useEffect(() => {
    document.title = appService.checkLanguage() ? 'Портфолио' : 'Portfolio';
    document.documentElement.lang = appService.checkLanguage() ? 'ru-Ru' : 'en-En';
  },[appService]);

  return (
    <Context.Provider value={{appService, markupService}}>
      <Frame>
        <Routes>   
          <Route path={'/'} element={<Main/>}/>       
        </Routes>
      </Frame>
    </Context.Provider>
  );
};


export default App;
