import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCarta } from '../../actions/carta';

const div100 = {
    width: '100%',
};
const div2 = {
    marginLeft: '2%',
    marginTop: '2%'
};
const divtop = {
    marginTop: '2%'
};
const divleft = {
    marginLeft: '2%',
};

const divcenter = {
    textAlign: 'center'
};
const divcolor1 = {
    color: 'rgb(51, 153, 255)'
};
const divcolorred = {
    color: 'red'
};
const divcolor2 = {
    fontSize: '36px',
    color: 'rgb(51, 153, 255)'
};
const divmargin1 = {
    marginLeft: '4%',
    marginTop: '2%'
};
const divtop2 = {
    marginTop: '60px'
};



export class CartaPage extends Component {

    constructor() {
        super();
        this.state = {
            cif: "",
        };
    }


    static propTypes = {
        cartas: PropTypes.array.isRequired,
        auth: PropTypes.func.isRequired,

    };

    componentDidMount() {
        //this.state.arrayCartas = this.props.getCarta();
        this.state.cif = this.props.auth.user.cif;
        this.props.getCarta(this.props.auth.user.cif);
    }

    render() {
        const { cif = this.props.auth.user.cif } = this.state.cif;
        return (
            <Fragment>
                <section className="hero is-info is-primary  hsl(54%, 15%, 143%) is-bold">
                    <div className="hero-body hsl(90%, 159%, 79%)">
                        <div className="container has-text-centered">

                            <div className='card equal-height'>
                                <div className="card-image has-text-centered">
                                    <figure className="image is-128x128 is-inline-block">
                                        <img className="is-rounded"
                                            src="https://bulma.io/images/placeholders/128x128.png"></img>
                                    </figure>
                                </div>
                            </div>

                            <h1 className="title"> {/* Marca Comercial del Negocio (mapear JSON) */} Cafetería
                                Bar/Ávila </h1>
                            <h2 className="subtitle"> {/* Slogan (mapear JSON) */} "75 años de tradición y tapas en
                                Granada" </h2>

                            <p className="field">
                                <a className="button is-rounded is-medium" id="id_boton">
                                    <span className="icon">
                                        <i className="fab fa-facebook"></i>
                                    </span>
                                </a>
                                <a className="button is-rounded is-medium">
                                    <span className="icon">
                                        <i className="fab fa-tripadvisor"></i>
                                    </span>
                                </a>
                                <a className="button is-rounded is-medium">
                                    <span className="icon">
                                        <i className="fab fa-instagram"></i>
                                    </span>
                                </a>
                            </p>
                            <hr />
                            <div className="container">
                                <div className="buttons">
                                    <div className="columns" style={div100}>
                                        <div className="column">
                                            <button className="button">
                                                <span className="icon">
                                                    <i className=" fas fa-file-pdf"></i>
                                                </span>
                                                <span>Descarga Carta en PDF</span>
                                            </button>
                                        </div>
                                        <div className="column">
                                            <h1 className="title">CARTA</h1>
                                        </div>
                                        <div className="column">
                                            <button className="button">
                                                <span className="icon is-small">
                                                    <i className="fab fa-whatsapp"></i>
                                                </span>
                                                <span>Comparte por Whatsapp</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container box">
                    <hr />
                    <h1 className="title has-text-centered">Añadir Producto a la Carta</h1>
                    <form>
                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <label className="label">Nombre</label>
                                    <div className="control">
                                        <input className="input" type="text" placeholder="Nombre del Producto" />
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Precio 1</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Precio 2</label>
                                            <div className="control">
                                                <input className="input " type="text" placeholder="0" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <div className="field">
                                            <label className="label">Precio 3</label>
                                            <div className="control">
                                                <input className="input" type="text" placeholder="0" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="container">
                                    <h2 className="subtitle">Alergenos</h2>
                                    <div className="columns">
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Apio</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Altramuces</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Cacahuete</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Crustaceo</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Carcara Frutal</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Gluten</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Huevo</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Lacteo</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Molusco</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Mostaza</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Pescado</label>
                                                    </div>
                                                </p>
                                            </div>
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Sesamo</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <div className="field">
                                                <p className="control">
                                                    <div className="b-checkbox">
                                                        <input id="checkbox" className="styled" type="checkbox" />
                                                        <label for="checkbox">  Soja</label>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Descripción</label>
                                    <div className="control">
                                        <textarea className="textarea" placeholder="Descripción del producto." size="99"></textarea>
                                    </div>
                                </div>
                                <div className="columns">
                                    <div className="column">
                                        <br />
                                        <div className="field">
                                            <label className="label">Categoria</label>
                                            <div className="control">
                                                <div className="select">
                                                    <select name="categoria" /*onChange={this.categoriaChange} defaultValue={categoria}*/>
                                                        <option>Categoria 1</option>
                                                        <option>Categoria 2</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <br />
                                        <div className="field">
                                            <label className="label">Tamaño</label>
                                            <div className="control">
                                                <div className="select">
                                                    <select name="tamanio" /*onChange={this.tamanioChange} defaultValue={tamanio}*/>
                                                        <option>S</option>
                                                        <option>M</option>
                                                        <option>L</option>
                                                        <option>XL</option>
                                                        <option>XXL</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <br />
                                        <div className="field">
                                            <label className="label">Carta</label>
                                            <div className="control">
                                                <div className="select">
                                                    <select>
                                                        <option>Carta 1</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <br />
                    <div className="control buttons is-centered">
                        <button className="button">Guardar</button>
                    </div>
                </div>


                <div className="container">
                    <div className="notification">
                        <div className="tabs is-centered is-boxed">
                            <ul>
                                <li className="is-active">
                                    <a>
                                        <span className="icon is-small"><i className="fas fa-clipboard-list"
                                            aria-hidden="true"></i></span>
                                        <span>Entrantes</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="icon is-small"><i className="fas fa-utensils"
                                            aria-hidden="true"></i></span>
                                        <span>Principales</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="icon is-small"><i className="fas fa-stroopwafel"
                                            aria-hidden="true"></i></span>
                                        <span>Postres</span>
                                    </a>
                                </li>
                                <li>
                                    <a>
                                        <span className="icon is-small"><i className="fas fa-cocktail"
                                            aria-hidden="true"></i></span>
                                        <span>Bebidas</span>
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="container">
                            <div className="notification">
                                <div className='card equal-height '>
                                    <div className="columns">
                                        <div className="container">
                                            <div className="column">
                                                <div className="columns">
                                                    <div className="column is-two-thirds"
                                                        style={div2}>
                                                        <h1 className="title">  </h1>

                                                        <h2 className="subtitle has-text-weight-light">  </h2>
                                                    </div>
                                                    <div className="column" style={divtop}>
                                                        <div className="columns is-mobile" style={divcenter}>

                                                            <div className="column">
                                                                <div style={div100}>
                                                                    <span className="icon is-small"
                                                                        style={divcolor1}><i
                                                                            className="fas fa-dot-circle"
                                                                            aria-hidden="true"></i></span>
                                                                </div>
                                                                <span><b> Media Ración </b></span>
                                                                <div style={div100}>
                                                                    <span> <b style={divcolorred}>  4,50€ </b> </span>
                                                                </div>
                                                            </div>


                                                            <div className="column"
                                                                style={divmargin1}>
                                                                <div style={div100}>
                                                                    <span className="icon is-small"
                                                                        style={divcolor2}><i
                                                                            className="fas fa-dot-circle"
                                                                            aria-hidden="true"></i></span>
                                                                </div>
                                                                <span> <b> Ración </b></span>
                                                                <div style={div100}>
                                                                    <span> <b style={divcolorred}>  5,50€ </b> </span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={divleft}>
                                                    <img src="static/frontend/Allergens/huevos.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                    <img src="static/frontend/Allergens/lacteos.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                    <img src="static/frontend/Allergens/soja.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                    <img src="static/frontend/Allergens/cascara.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                    <img src="static/frontend/Allergens/moluscos.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                    <img src="static/frontend/Allergens/fish.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card equal-height ' style={divtop2}>
                                    <div className="columns">
                                        <div className="container">
                                            <div className="column">
                                                <div className="columns">
                                                    <div className="column is-two-thirds"
                                                        style={div2}>
                                                        <h1 className="title">Ensalada Mixta</h1>
                                                        <h2 className="subtitle has-text-weight-light">Mezclum de
                                                        lechugas, cherry, pepino, cebolla,
                                                        remolacha, zanahoria, espárragos, maíz, huevo, atún,
                                                            pepinillos, aceitunas y picos </h2>
                                                    </div>
                                                    <div className="column" style={divtop}>
                                                        <div className="columns is-mobile" style={divcenter}>

                                                            <div className="column">
                                                                <div style={div100}>
                                                                    <span className="icon is-small"
                                                                        style={divcolor1}><i
                                                                            className="fas fa-dot-circle"
                                                                            aria-hidden="true"></i></span>
                                                                </div>
                                                                <span><b> Media Ración </b></span>
                                                                <div style={div100}>
                                                                    <span> <b style={divcolorred}>  4,50€ </b> </span>
                                                                </div>
                                                            </div>


                                                            <div className="column"
                                                                style={divmargin1}>
                                                                <div style={div100}>
                                                                    <span className="icon is-small"
                                                                        style={divcolor2}><i
                                                                            className="fas fa-dot-circle"
                                                                            aria-hidden="true"></i></span>
                                                                </div>
                                                                <span> <b> Ración </b></span>
                                                                <div style={div100}>
                                                                    <span> <b style={divcolorred}>  5,50€ </b> </span>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={divleft}>
                                                    <img src="static/frontend/Allergens/gluten.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                    <img src="static/frontend/Allergens/fish.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                    <img src="static/frontend/Allergens/moluscos.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                    <img src="static/frontend/Allergens/crustaceos.svg"
                                                        alt="triangle with all three sides equal" width="50" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="has-text-centered">
                    <h1>Debug</h1>
                    {this.props.cartas.map(carta =>(
                        <div class="debug">
                            <p>{carta.id}</p>
                            <p>{carta.name}</p>
                            {carta.productos.map(producto =>(
                                <p>{producto.name}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = state => ({
    cartas: state.cartas.cartas,
    auth: state.auth,
});

export default connect(mapStateToProps, { getCarta })(CartaPage);
