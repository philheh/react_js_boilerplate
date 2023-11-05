import React from "react";
import { Route, Routes } from "react-router-dom";
import { Greetings } from "../../Shared/Greetings/Greetings";
import { Button } from "../../Shared/Button/Button";

export const Switches = () => {
  return (
    <Routes>
      <Route path='/' element={<Greetings/>}/>
      <Route path='/page1' element={<h1 style={{background: 'green', fontSize: '25px'}}>page 1</h1>}/>
      <Route path='/page2' element={<h1 style={{background: 'blue', fontSize: '25px'}}>page 2</h1>}/>
      <Route path='*' element={<><h1 style={{background: 'red', fontSize: '25px'}}>404 not found</h1><Button link={'/'}/></>}/>
    </Routes>
  );
};