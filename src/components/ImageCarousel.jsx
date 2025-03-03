import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle';
import './Images.Module.css';

export default function ImageCarousel() {
  return (
    <div className='carouselcontainer justify-center height-100 bg-cyan-300'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="5000">
            <img src="../../public/turbosystems.jpg" className="d-block" alt="jotain" />
            </div>
            <div className="carousel-item">
            <img src="../../public/pakosarjat.jpg" className="d-block object-fit-contain" alt="pakosarjat" />
            </div>
            <div className="carousel-item">
            <img src="../../public/img15.jpg" className="d-block" alt="kolmonen" />
            </div>
        </div>
        <button className="carousel-control-prev scale-50" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon scale-400" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next scale-50" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon scale-400" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}
