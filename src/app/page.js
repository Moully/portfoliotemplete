'use client';
import { Navbar } from '../components/navbar'
import { Pageone } from '../components/pageone'
import { AboutMe } from '../components/aboutme'
import { Skills } from '../components/skill'
import { Getintouch } from '../components/getintouch'
import { Mobilemenu } from '@/components/mobilemenu';
import { createContext, useState } from 'react'

export const darkTheme = createContext()
export default function Home() {
  const [pagemode, setPagemode] = useState(0)
  const [mobilemenu, setMobilemenu] = useState(1)
  return (
    <darkTheme.Provider value={{pagemode, setPagemode}}>
      <div className={"p-10 bg-white max-w-screen-lg m-auto"}
      style={pagemode>0 ? {backgroundColor:"black", color:"white"}:{backgroundColor:"white"}}>
        <Navbar/>
        <Pageone pagemode ={pagemode}/>
        <AboutMe pagemode ={pagemode}/>
        <Skills  pagemode ={pagemode}/>
        <Getintouch pagemode ={pagemode}/>

              <Mobilemenu
          mobileMenu = {mobilemenu}
          mobileMenuClose= {()=>{
            setMobilemenu(1)
            console.log("ajilj baigaa");
          }}
          pagemode ={pagemode}
          pageModeDay = {()=>{
            setPagemode(0)
          }}
          pageModeNight = {()=>{
            setPagemode(1)
          }}
        />
      </div>
    </darkTheme.Provider>
  )
}
