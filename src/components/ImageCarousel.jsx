import React from 'react'
import 'bootstrap/dist/js/bootstrap.bundle';
import './Images.Module.css';

export default function ImageCarousel() {
  return (
    <div className='carouselcontainer justify-center height-100 bg-white -mb-10'>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active carousel-item-center" data-bs-interval="4000">
          <img src="/images/pnpcar3.png" className="d-block !pt-20 !pb-20 md:scale-150 md:!pt-0 md:!pb-0 md:!-mb-8" alt="pnp-power car" />
        </div>

        <div className="carousel-item">
        <img src="/images//turbosystems.jpg" className="d-block" alt="jotain" />
        </div>
        <div className="carousel-item">
        <img src="/images/img5.jpg" className="d-block" alt="pakosarjat" />
        </div>
        <div className="carousel-item">
        <img src="/images/img15.jpg" className="d-block" alt="kolmonen" />
        </div>
        </div>
        <button className="carousel-control-prev scale-50" style={{ marginLeft: 20 }} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon scale-500" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next scale-50" style={{ marginRight: 20 }} type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon scale-500" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

// Use object-fit-contain on the carousel img if the image is not as wide!