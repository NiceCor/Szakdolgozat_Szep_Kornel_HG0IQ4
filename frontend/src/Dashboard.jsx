import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import { Link, Outlet } from 'react-router-dom'

function Dashboard() {

    return(<div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

            <Link to="/dashboard" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Admin profil</span>
                        </Link>
               
            <Link to="/lista" class="nav-link align-middle px-0">
                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Események listája</span>
                    </Link>
                    
                   
            <Link to="/igenylo" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Esemény bejelentő</span> </Link>
                    
                    
                    <Link to="/tagok" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Tagok</span> </Link>
                  
                  <li></li>
                    <Link to="/Login" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-power"></i> <span class="ms-1 d-none d-sm-inline">Kijelentkezés</span> </Link>
                  
             
        
            </div>
        </div>
        <div class="col p-0 m-0">
            <div className = 'p-2 d-flex justify-content-center shadow'> 
           <h4>HELIX fotós/videós igénylő</h4>
        </div>
        <Outlet />
     </div>
    </div>
</div>)
	
}
export default Dashboard