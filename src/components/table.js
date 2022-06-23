import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

function Table() {
  const [list, setlist] = useState([])

  const getdata = async () => {
    let response = await axios.get("https://62401a5c2aeb48a9af703b1b.mockapi.io/formik")
    setlist(response.data)
  }

  useEffect(() => {
    getdata()
  }, [])

  const reduce = async (item) => {
    const data = {
      book: item.book,
      number: item.number - 1
    }
    let response = await axios.put(`https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/${item.id}`, data)
    getdata()
  }

  const increase = async (item) => {
    const data = {
      book: item.book,
      number: item.number + 1
    }
    let response = await axios.put(`https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/${item.id}`, data)
    getdata()
  }

  const deletehandle = async (id) => {
    let response = await axios.delete(`https://62401a5c2aeb48a9af703b1b.mockapi.io/formik/${id}`)
    getdata()
  }
  return (
    <div>
      {
        list == "" ? <h1>No Data To Display</h1>
          : (
            <table className='table'>
              <thead>
                <tr>
                  <th>SL.NO</th>
                  <th>Book Name</th>
                  <th>Number of Books</th>
                  <th colSpan={"4"}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  list.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td>{item.id}</td>
                        <td>{item.book}</td>
                        <td>{item.number}</td>
                        <td>
                          <button onClick={() => reduce(item)} className="minus"> - </button>
                        </td>
                        <td>
                          <button onClick={() => increase(item)} className="plus"> + </button>
                        </td>
                        <td>
                          <NavLink to={`/edit/${item.id}`} ><button className='editbtn'>Edit</button></NavLink>
                        </td>
                        <td>
                          <button onClick={() => deletehandle(item.id)} className="deletebtn">Delete</button>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          )
      }
    </div>
  )
}

export default Table;