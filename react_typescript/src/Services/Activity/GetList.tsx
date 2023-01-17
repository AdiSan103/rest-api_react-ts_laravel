import React from 'react'

export function GetList() {
 return fetch('http://127.0.0.1:8000/api/activity/all?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL2F1dGgvbG9naW4iLCJpYXQiOjE2NzM2NzM5NDksImV4cCI6MTY3NTE4NTk0OSwibmJmIjoxNjczNjczOTQ5LCJqdGkiOiJjRWthemlHREtGalFvTG5RIiwic3ViIjoiMiIsInBydiI6ImY2NGQ0OGE2Y2VjN2JkZmE3ZmJmODk5NDU0YjQ4OGIzZTQ2MjUyMGEifQ.G0xd0vErTsfWQxb3DK00h8ngJMg2TGWALyGvnhRu2XM&=')
   .then(data => data.json())
}