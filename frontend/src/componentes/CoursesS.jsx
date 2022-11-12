import React from "react";
// import { Link } from 'react-router-dom';

//Imagenes
// import robotica from '../images/robotica.jpg';
// import fullstack from '../images/fullstack.png';
// import uiux from '../images/uiux.jpg';
import idesoftware from "../images/idesoftware.png";
// import cienciadatos from '../images/cienciadatos.jpg';
// import gerenciaproyectos from '../images/gerenciaproyectos.png';
// import pythonML from '../images/pythonML.png';
// import metaios from '../images/metaios.jpg';
// import googleux from '../images/googleux.webp';
//Estilos
import "../styles/courses.css";

//Iconos
// import { BiTime } from 'react-icons/bi';
// import { GoFileSubmodule } from 'react-icons/go';
// import { VscRemoteExplorer } from 'react-icons/vsc';
// import { BsCalendar3 } from 'react-icons/bs';
import { FaUniversity } from "react-icons/fa";
import { Link } from "react-router-dom";

function CoursesS() {
  return (
    <div className="row p-2 ps-3 pe-0">
      <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 g-3">
        <div className="col">
          <div className="text-center">
            <p>
              <button
                class="btn btn-danger col-10"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                Manicure
              </button>
            </p>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 px-3">
              <div class="collapse" id="collapseExample">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>

                    <div className="col-9">
                      <label class="form-check-label" for="flexCheckDefault">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapseExample">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                    </div>

                    <div className="col-9">
                      <label
                        class="form-check-label"
                        for="flexCheckChecked"
                        checked
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapseExample">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked2"
                      />
                    </div>

                    <div className="col-9">
                      <label
                        class="form-check-label"
                        for="flexCheckChecked2"
                        checked
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapseExample">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked3"
                      />
                    </div>

                    <div className="col-9">
                      <label
                        class="form-check-label"
                        for="flexCheckChecked3"
                        checked
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p>
              <button
                class="btn btn-danger col-10"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample2"
              >
                Pedicure
              </button>
            </p>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 px-3">
              <div class="collapse" id="collapseExample2">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault4"
                      />
                    </div>

                    <div className="col-9">
                      <label class="form-check-label" for="flexCheckDefault4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapseExample2">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked5"
                      />
                    </div>

                    <div className="col-9">
                      <label
                        class="form-check-label"
                        for="flexCheckChecked5"
                        checked
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapseExample2">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked6"
                      />
                    </div>

                    <div className="col-9">
                      <label
                        class="form-check-label"
                        for="flexCheckChecked6"
                        checked
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapseExample2">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked7"
                      />
                    </div>

                    <div className="col-9">
                      <label
                        class="form-check-label"
                        for="flexCheckChecked7"
                        checked
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <p>
              <button
                class="btn btn-danger col-10"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample3"
              >
                Decoraciones y efectos
              </button>
            </p>
            <div className="row row-cols-1 row-cols-md-1 row-cols-lg-1 px-3">
              <div class="collapse" id="collapseExample3">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault8"
                      />
                    </div>

                    <div className="col-9">
                      <label class="form-check-label" for="flexCheckDefault8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapseExample3">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked9"
                      />
                    </div>

                    <div className="col-9">
                      <label
                        class="form-check-label"
                        for="flexCheckChecked9"
                        checked
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapseExample3">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked10"
                      />
                    </div>

                    <div className="col-9">
                      <label
                        class="form-check-label"
                        for="flexCheckChecked10"
                        checked
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="collapse" id="collapseExample3">
                <div class=" card">
                  <div className="row">
                    <div className="col-3 text-center pt-5 mt-3">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked11"
                      />
                    </div>

                    <div className="col-9">
                      <label
                        class="form-check-label"
                        for="flexCheckChecked11"
                        checked
                      >
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Sapiente eum beatae soluta quod perferendis vero
                        quasi facere, quaerat ex, nemo aspernatur nihil corporis
                        voluptates recusandae ea deleniti magni blanditiis
                        molestiae!
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Link to="/profile">
            <div className="card">
              <img
                src={idesoftware}
                alt="Maestria en ingenieria de software"
                className="card-img-top "
              />

              <div className="card-body">
                <p>
                  <small>
                    <FaUniversity />
                    Harvard University
                  </small>
                </p>
                <h6 className="card-title">
                  {" "}
                  <strong>Maestria en ingenieria de software</strong>
                </h6>
                <p className="card-text">
                  <small>
                    <strong>Habilidades que obtendras:</strong> Software
                    Engineering, Computer Programming, Software Architecture,
                    Theoretical Computer Science, Computer Programming Tools,..
                  </small>
                </p>
                <p>
                  <small>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#FAE832"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                    </svg>{" "}
                    4.8 (3.5k reseñas)
                  </small>
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              src={idesoftware}
              alt="Maestria en ingenieria de software"
              className="card-img-top"
            />

            <div className="card-body">
              <p>
                <small>
                  <FaUniversity />
                  Harvard University
                </small>
              </p>
              <h6 className="card-title">
                {" "}
                <strong>Maestria en ingenieria de software</strong>
              </h6>
              <p className="card-text">
                <small>
                  <strong>Habilidades que obtendras:</strong> Software
                  Engineering, Computer Programming, Software Architecture,
                  Theoretical Computer Science, Computer Programming Tools,..
                </small>
              </p>
              <p>
                <small>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="#FAE832"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  4.8 (3.5k reseñas)
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoursesS;
