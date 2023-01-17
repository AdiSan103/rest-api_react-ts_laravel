import React, { useEffect, useState } from 'react'
import Table from '../Components/Table/Table'
import InputFloatingLabel from '../Components/Input/FloatingLabel'
import Textarea from '../Components/Textarea/Textarea'
import Radio from '../Components/Radio/Radio'
import Button1 from '../Components/Button/Button1'

// servicer
import { GetList } from '../Services/Activity/GetList'
// import { Create } from '../Services/Activity/Create'

const Home = () => {
  // for create data
  const [inputTitle,setInputTitle] = useState("");
  const [inputDescription,setInputDescription] = useState("");
  const [inputActive,setInputActive] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit:any = async (e:any) => {
    //preventDefault prevents page reload
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/api/activity/create/", {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        method: "POST",
        body: JSON.stringify({
          token: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NzM2NzM5NDksImV4cCI6MTY3NTE4NTk0OSwibmJmIjoxNjczNjczOTQ5LCJqdGkiOiJjRWthemlHREtGalFvTG5RIiwic3ViIjoiMiIsInBydiI6ImY2NGQ0OGE2Y2VjN2JkZmE3ZmJmODk5NDU0YjQ4OGIzZTQ2MjUyMGEifQ.G0xd0vErTsfWQxb3DK00h8ngJMg2TGWALyGvnhRu2XM`,
          title: inputTitle,
          description: inputDescription,
          active: inputActive,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        setInputTitle("");
        setInputDescription("");
        setInputActive("");
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // for get data
  const [list, setList] = useState([]);

  useEffect((): () => any => {
    let mounted = true
    GetList()
      .then(items => {
        if (mounted) {
          setList(items)
        }
      })
    return () => mounted = false
  }, [])

  console.log(list);

  return (
  <div className='container mx-auto px-2'>
    <div>
      <h2 className='pt-5 pb-2'>LIST ACTIVITY</h2>
      <Table items={list}/>
    </div>
    <div>
      {message ?
        <div id="alert-border-1" className="flex p-4 mb-4 text-blue-700 bg-blue-100 border-t-4 border-blue-500 dark:text-blue-400 dark:bg-gray-800" role="alert">
          <svg className="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
          <div className="ml-3 text-sm font-medium">
            {message}
          </div>
          <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-100 text-blue-500 rounded-lg focus:ring-2 focus:ring-blue-400 p-1.5 hover:bg-blue-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-blue-300 dark:hover:bg-gray-700" data-dismiss-target="#alert-border-1" aria-label="Close">
            <span className="sr-only">Dismiss</span>
            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </div>
    : null}

      <form onSubmit={handleSubmit} className='shadow-xl my-5 p-5 rounded-lg max-w-xl'>
        <h2 className='pt-5'>ADD NEW ACTIVITY</h2>
        {/* 
        <InputFloatingLabel name='title' />
        <Textarea name='description'/>
        <div className='flex md:flex-row flex-col gap-5 mt-5'>
          <Radio name='active' title='aktif'/>
          <Radio name='active' title='tidak aktif'/>
        </div> 
        <Button1 /> 
          */}

        <div className="relative z-0 mt-4">
          <input type="text" id="floating_standard" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " onChange={event => setInputTitle(event.target.value)} value={inputTitle}/>
          <label className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">title</label>
        </div>

        <div className='mt-4'>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
          <textarea id="message" rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={event => setInputDescription(event.target.value)} value={inputDescription}></textarea>
        </div>

        <div className='flex md:flex-row flex-col gap-5 mt-5'>
          <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 px-10">
              <input id="bordered-radio-1" type="radio" name="active" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={event => setInputActive(event.target.value)} value="1"></input>
              <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Aktif</label>
          </div>
          <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700 px-10">
              <input id="bordered-radio-1" type="radio" name="active" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={event => setInputActive(event.target.value)} value="0"></input>
              <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Tidak Aktif</label>
          </div>
        </div>

        <button type='submit' className="mt-2 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Kirim
          </span>
        </button>

      </form>
    </div>
  </div>
  )
}

export default Home;