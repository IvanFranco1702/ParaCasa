import React from 'react'
// import { HeroeSerch } from '../components/HeroeSerch'
import { useLocation } from 'react-router-dom';
import queryString from 'query-string'

export const Serch = () => {
  const location= useLocation()
  console.log(location)
const {q= ''} = queryString.parse(location.search)
  return (
  <>
  <h1>{q}</h1>
  </>
  )
}
