import React from 'react'

type Props = {
  title: string,
  description:string,
  active: boolean
}

export function Create({title, description, active} :Props) {
 return fetch('http://127.0.0.1:8000/api/activity/create?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NzM2NzM5NDksImV4cCI6MTY3NTE4NTk0OSwibmJmIjoxNjczNjczOTQ5LCJqdGkiOiJjRWthemlHREtGalFvTG5RIiwic3ViIjoiMiIsInBydiI6ImY2NGQ0OGE2Y2VjN2JkZmE3ZmJmODk5NDU0YjQ4OGIzZTQ2MjUyMGEifQ.G0xd0vErTsfWQxb3DK00h8ngJMg2TGWALyGvnhRu2XM&=', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: title,
    description: description,
    active: active
  }),
})
  .then(data => data.json())
}


// https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react