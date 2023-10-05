import { Fragment } from "react"

import { Button } from "react-bootstrap"

import { useDispatch, useSelector } from "react-redux"

import { Link } from "react-router-dom"

 

 

import { MDBDataTable} from 'mdbreact'

import {toast } from 'react-toastify'

 

export const AdminDashboard = () => {

    const {user}=useSelector((state)=>state.users)

 

    const dispatch = useDispatch();

 

    const setUsers = () => {

        const data = {

            columns : [

                {

                    label: 'ID',

                    field: 'id',

                    sort: 'asc'

                },

                {

                    label: 'Name',

                    field: 'name',

                    sort: 'asc'

                },

                {

                    label: 'Email',

                    field: 'email',

                    sort: 'asc'

                },

                {

                    label: 'Actions',

                    field: 'actions',

                    sort: 'asc'

                }

            ],

            rows : []

        }

 

        user.forEach( user => {

            data.rows.push({

                id: user.id,

                name: user.name,

                email : user.email,

                actions: (

                    <Fragment>

                        <Link to={`/admin/user/${user.id}`} className="btn btn-outline-info"> VIEW</Link>

                       

                    </Fragment>

                )

            })

        })

 

        return data;

    }

 

    const deleteHandler = (e, id) => {

        e.target.disabled = true;

       

    }

 

 

 

 

    return (

        <div className="row pic">

        <div className="col-12 col-md-2">
        <Link to="/admin/login" className="btn btn-outline-danger mt-2">Logout</Link>
             

        </div>

        <div className="col-12 col-md-7">

            <h1 className="my-4 text-info">User Cart</h1>

            <Fragment>

                {  

                    <MDBDataTable

                        data={setUsers()}

                        bordered

                        striped

                        hover

                        className="px-3"

                    />

                }

            </Fragment>

        </div>

    </div>

    )

}
