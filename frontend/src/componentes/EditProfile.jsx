import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { BsArrowLeftSquare } from 'react-icons/bs';

const cookies = new Cookies();

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        id: '',
        Correo: '',
        Nombre_U: '',
        Apellido: '',
        Departamento: '',
        Ciudad: '',
        Ocupacion: '',
        telefono: '',
        celular: '',
        direccion: '',
        sitioWeb: '',
        github: '',
        twitter: '',
        instagram: '',
        facebook: ''
      },
      loading: false,
      message: ''
    };
  }

  componentDidMount() {
    // Cargar datos del usuario desde cookies o API
    const userId = cookies.get('Id');
    const userEmail = cookies.get('Correo');
    const userName = cookies.get('Nombre_U');
    const userLastName = cookies.get('Apellido');

    if (userId) {
      this.setState({
        form: {
          ...this.state.form,
          id: userId,
          Correo: userEmail || '',
          Nombre_U: userName || '',
          Apellido: userLastName || ''
        }
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, message: '' });

    try {
      // Aquí harías la petición PUT al backend para actualizar el perfil
      // await axios.put(`http://localhost:4001/api/usuarios/${this.state.form.id}`, this.state.form);
      
      // Por ahora simularemos la actualización
      setTimeout(() => {
        this.setState({ 
          loading: false, 
          message: 'Perfil actualizado exitosamente' 
        });
        
        // Actualizar cookies con nueva información
        cookies.set('Nombre_U', this.state.form.Nombre_U, { path: "/" });
        cookies.set('Apellido', this.state.form.Apellido, { path: "/" });
        cookies.set('Correo', this.state.form.Correo, { path: "/" });
        
      }, 1000);
    } catch (error) {
      this.setState({ 
        loading: false, 
        message: 'Error al actualizar el perfil' 
      });
      console.error('Error:', error);
    }
  };

  render() {
    const { form, loading, message } = this.state;

    return (
      <section style={{ backgroundColor: "#f8f9fa", minHeight: "100vh" }}>
        <div className="container py-4">
          <div className="row">
            <div className="col-12 mb-3">
              <Link to='/profile' className="text-decoration-none">
                <BsArrowLeftSquare size={30} className="text-primary" />
                <span className="ms-2">Volver al perfil</span>
              </Link>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="card shadow">
                <div className="card-header bg-primary text-white">
                  <h4 className="mb-0">Editar Perfil</h4>
                </div>
                <div className="card-body">
                  {message && (
                    <div className={`alert ${message.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                      {message}
                    </div>
                  )}

                  <form onSubmit={this.handleSubmit}>
                    {/* Información Personal */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <h5 className="text-primary border-bottom pb-2">Información Personal</h5>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Nombres *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Nombre_U"
                          value={form.Nombre_U}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Apellidos *</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Apellido"
                          value={form.Apellido}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Correo Electrónico *</label>
                        <input
                          type="email"
                          className="form-control"
                          name="Correo"
                          value={form.Correo}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Ocupación</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Ocupacion"
                          value={form.Ocupacion}
                          onChange={this.handleChange}
                          placeholder="Ej: Desarrollador Full Stack"
                        />
                      </div>
                    </div>

                    {/* Ubicación */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <h5 className="text-primary border-bottom pb-2">Ubicación</h5>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Departamento</label>
                        <select 
                          className="form-select" 
                          name="Departamento"
                          value={form.Departamento}
                          onChange={this.handleChange}
                        >
                          <option value="">Selecciona un departamento</option>
                          <option value="Antioquia">Antioquia</option>
                          <option value="Cundinamarca">Cundinamarca</option>
                          <option value="Valle del Cauca">Valle del Cauca</option>
                          <option value="Atlántico">Atlántico</option>
                          <option value="Santander">Santander</option>
                          <option value="Bolívar">Bolívar</option>
                          <option value="Magdalena">Magdalena</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Ciudad</label>
                        <input
                          type="text"
                          className="form-control"
                          name="Ciudad"
                          value={form.Ciudad}
                          onChange={this.handleChange}
                          placeholder="Ej: Medellín"
                        />
                      </div>
                      <div className="col-12 mb-3">
                        <label className="form-label">Dirección</label>
                        <input
                          type="text"
                          className="form-control"
                          name="direccion"
                          value={form.direccion}
                          onChange={this.handleChange}
                          placeholder="Calle 00 # 00 - 00"
                        />
                      </div>
                    </div>

                    {/* Contacto */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <h5 className="text-primary border-bottom pb-2">Información de Contacto</h5>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Teléfono</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="telefono"
                          value={form.telefono}
                          onChange={this.handleChange}
                          placeholder="(097) 234-5678"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Celular</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="celular"
                          value={form.celular}
                          onChange={this.handleChange}
                          placeholder="(098) 765-4321"
                        />
                      </div>
                    </div>

                    {/* Redes Sociales */}
                    <div className="row mb-4">
                      <div className="col-12">
                        <h5 className="text-primary border-bottom pb-2">Redes Sociales</h5>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Sitio Web</label>
                        <input
                          type="url"
                          className="form-control"
                          name="sitioWeb"
                          value={form.sitioWeb}
                          onChange={this.handleChange}
                          placeholder="https://misitio.com"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">GitHub</label>
                        <input
                          type="text"
                          className="form-control"
                          name="github"
                          value={form.github}
                          onChange={this.handleChange}
                          placeholder="usuario_github"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Twitter</label>
                        <input
                          type="text"
                          className="form-control"
                          name="twitter"
                          value={form.twitter}
                          onChange={this.handleChange}
                          placeholder="@usuario_twitter"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Instagram</label>
                        <input
                          type="text"
                          className="form-control"
                          name="instagram"
                          value={form.instagram}
                          onChange={this.handleChange}
                          placeholder="@usuario_instagram"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label className="form-label">Facebook</label>
                        <input
                          type="text"
                          className="form-control"
                          name="facebook"
                          value={form.facebook}
                          onChange={this.handleChange}
                          placeholder="Usuario Facebook"
                        />
                      </div>
                    </div>

                    {/* Botones */}
                    <div className="row">
                      <div className="col-12">
                        <hr />
                        <div className="d-flex justify-content-between">
                          <Link to="/profile" className="btn btn-secondary">
                            Cancelar
                          </Link>
                          <button 
                            type="submit" 
                            className="btn btn-primary"
                            disabled={loading}
                          >
                            {loading ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Guardando...
                              </>
                            ) : (
                              'Guardar Cambios'
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EditProfile;