import React, { useEffect, useState } from 'react';
import '../../assets/css/pagos.css';
import { Link, useLocation } from 'react-router-dom';

const Pagos = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const planName = queryParams.get('plan');
  const [selectedPlan, setSelectedPlan] = useState(planName || '');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [paymentForm, setPaymentForm] = useState('');
  const [errors, setErrors] = useState({});
  const [transactionHistory, setTransactionHistory] = useState([]); 
  const [purchasedPlans, setPurchasedPlans] = useState([]); 

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('transactionHistory')) || [];
    const storedPurchasedPlans = JSON.parse(localStorage.getItem('purchasedPlans')) || [];
    setTransactionHistory(storedHistory);
    setPurchasedPlans(storedPurchasedPlans);
  }, []);

  useEffect(() => {
    if (planName) {
      setSelectedPlan(planName);
    }
  }, [planName]);

    const handleClearTransactionHistory = () => {
      setTransactionHistory([]);
      setPurchasedPlans([]);
      localStorage.removeItem('transactionHistory');
      localStorage.removeItem('purchasedPlans');
      alert(`Membresía cancelada con éxito.`);
    };

  const membershipInfo = {
    day: {
      image: require('../../assets/img/membresia-img/DIA.png'),
      benefits: [
        "Acceso Ilimitado a Equipos de Gimnasio",
        "Sin acceso a inscribirse a clases Grupales"
      ],
      description: "Ideal para aquellos que desean acceso temporal y flexible a las instalaciones.",
      cost: "$5"
    },
    month: {
      image: require('../../assets/img/membresia-img/mensual.png'),
      benefits: [
        "Acceso Ilimitado a Equipos de Gimnasio",
        "Acceso a inscribirse a Clases Grupales",
        "Uso de la Piscina y Sauna",
        "Descuento en Eventos Especiales (5%)"
      ],
      description: "Una opción conveniente para aquellos que buscan un compromiso a corto plazo.",
      cost: "$20"
    },
    quarter: {
      image: require('../../assets/img/membresia-img/trimestral.png'),
      benefits: [
        "Acceso Ilimitado a Equipos de Gimnasio",
        "Acceso a inscribirse a Clases Grupales",
        "Uso de la Piscina y Sauna",
        "Descuento en Eventos Especiales (10%)",
        "Una Sesión Gratuita con un Entrenador Personal"
      ],
      description: "Un plan intermedio que ofrece un equilibrio entre compromiso y flexibilidad.",
      cost: "$50"
    },
    semester: {
      image: require('../../assets/img/membresia-img/semestral.png'),
      benefits: [
        "Acceso Ilimitado a Equipos de Gimnasio",
        "Acceso a inscribirse a Clases Grupales",
        "Uso de la Piscina y Sauna",
        "Descuento en Eventos Especiales (15%)",
        "Tres Sesiones Gratuitas con un Entrenador Personal",
        "Acceso Prioritario a Nuevas Clases"
      ],
      description: "Ideal para usuarios dedicados que desean un plan a mediano plazo.",
      cost: "$60"
    },
    year: {
      image: require('../../assets/img/membresia-img/anual.png'),
      benefits: [
        "Acceso Ilimitado a Equipos de Gimnasio",
        "Acceso a inscribirse a Clases Grupales",
        "Uso de la Piscina y Sauna",
        "Descuento en Eventos Especiales (20%)",
        "Seis Sesiones Gratuitas con un Entrenador Personal",
        "Acceso Prioritario a Nuevas Clases",
        "Descuento del 10% en Productos de la Tienda del Gimnasio"
      ],
      description: "Ideal para usuarios dedicados que desean un plan a largo plazo.",
      cost: "$350"
    }
  };

  const renderMembershipInfo = (plan) => {
    const planInfo = membershipInfo[plan];
    if (!planInfo) {
      return <p>Seleccione un tipo de membresía para ver los detalles.</p>;
    }

    return (
      <div className="membership-info-container">
        <div className="membership-info-image">
          <img src={planInfo.image} alt={`Membresía ${plan}`} />
        </div>
        <div className="membership-info-details">
          <ul>
            <h6 className="text"><b>Beneficios</b></h6>
            {planInfo.benefits.map((benefit, index) => (
              <p key={index}><b>- {benefit}</b></p>
            ))}
            <hr className="divider" />
            <h6 className="text"><b>Descripción</b></h6>
            <p><b>{planInfo.description}</b></p>
            <hr className="divider" />
            <h4 className="text1"><b>Costo: {planInfo.cost}</b></h4>
          </ul>
        </div>
      </div>
    );
  };  
  const handlePaymentMethodChange = (e) => {
    const paymentMethod = e.target.value;
    setSelectedPaymentMethod(paymentMethod);
    setErrors({}); 
    if (paymentMethod === 'credit-card') {
      setPaymentForm(renderCreditCardForm());
    } else if (paymentMethod === 'paypal') {
      setPaymentForm(renderPaypalForm());
    } else {
      setPaymentForm('');
    }
  };

  const renderCreditCardForm = () => {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="tarjeta">Número de Tarjeta:</label>
          <input
            type="text"
            id="tarjeta"
            name="tarjeta"
            placeholder="Número de Tarjeta"
            onChange={handleInputChange}
          />
          {errors.tarjeta && <span className="error-message">{errors.tarjeta}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Titular">Nombre del Titular:</label>
          <input
            type="text"
            id="Titular"
            name="Titular"
            placeholder="Nombre del Titular"
            onChange={handleInputChange}
          />
          {errors.Titular && <span className="error-message">{errors.Titular}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Expira">Expira:</label>
          <input
            type="month"
            id="Expira"
            name="Expira"
            placeholder="MM/YY"
            onChange={handleInputChange}
          />
          {errors.Expira && <span className="error-message">{errors.Expira}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Codigo">Código de control:</label>
          <input
            type="text"
            id="Codigo"
            name="Codigo"
            placeholder="Código de control"
            onChange={handleInputChange}
          />
          {errors.Codigo && <span className="error-message">{errors.Codigo}</span>}
        </div>
        <button onClick={handleSubmit}>Comprar</button>
      </div>
    );
  };

  const renderPaypalForm = () => {
    return (
      <div>
        <div className="form-group">
          <label htmlFor="Correo">Correo Electrónico:</label>
          <input
            type="email"
            id="Correo"
            name="Correo"
            placeholder="Correo Electrónico"
            onChange={handleInputChange}
          />
          {errors.Correo && <span className="error-message">{errors.Correo}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="Contraseña">Contraseña:</label>
          <input
            type="password"
            id="Contraseña"
            name="Contraseña"
            placeholder="Contraseña"
            onChange={handleInputChange}
          />
          {errors.Contraseña && <span className="error-message">{errors.Contraseña}</span>}
        </div>
        <button onClick={handleSubmit}>Comprar</button>
      </div>
    );
  };

  const handleInputChange = (e) => {
    setErrors({ ...errors, [e.target.name]: '' }); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      const newTransaction = {
        date: new Date().toLocaleDateString(),
        description: selectedPlan,
        amount: membershipInfo[selectedPlan].cost,
        status: 'Pagado',
        receipt: '#',
      };

      const updatedHistory = [...transactionHistory, newTransaction];
      const updatedPurchasedPlans = [...purchasedPlans, selectedPlan];

      localStorage.setItem('transactionHistory', JSON.stringify(updatedHistory));
      localStorage.setItem('purchasedPlans', JSON.stringify(updatedPurchasedPlans));

      setTransactionHistory(updatedHistory);
      setPurchasedPlans(updatedPurchasedPlans);

      setSelectedPlan('');
      setSelectedPaymentMethod(''); 
      setPaymentForm('');
      alert('Pago Procesado');
      window.location.reload();
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = () => {
    const errors = {};
    if (selectedPaymentMethod === 'credit-card') {
      if (!document.getElementById('tarjeta').value) errors.tarjeta = 'Este campo es obligatorio';
      if (!document.getElementById('Titular').value) errors.Titular = 'Este campo es obligatorio';
      if (!document.getElementById('Expira').value) errors.Expira = 'Este campo es obligatorio';
      if (!document.getElementById('Codigo').value) errors.Codigo = 'Este campo es obligatorio';
    } else if (selectedPaymentMethod === 'paypal') {
      if (!document.getElementById('Correo').value) errors.Correo = 'Este campo es obligatorio';
      if (!document.getElementById('Contraseña').value) errors.Contraseña = 'Este campo es obligatorio';
    }
    return errors;
  };

  const getPlanName = (planCode) => {
    const planNames = {
      day: "Membresía por Día",
      month: "Membresía por Mes",
      quarter: "Membresía Trimestral",
      semester: "Membresía Semestral",
      year: "Membresía Anual"
    };
    return planNames[planCode] || "Desconocido"; 
  };

  return (
    <div id="container-pay-body">
      <label htmlFor="membership-type-pay">
        <h2 className="select-pay">
          Seleccione el tipo de membresía:
          <select
            id="membership-type-pay"
            className="custom-select-pay"
            value={selectedPlan}
            onChange={(e) => setSelectedPlan(e.target.value)}
          >
            <option value="">Seleccione una opción</option>
            <option value="day" disabled={purchasedPlans.includes('day')}>Membresía por Día</option>
            <option value="month" disabled={purchasedPlans.includes('month')}>Membresía por Mes</option>
            <option value="quarter" disabled={purchasedPlans.includes('quarter')}>Membresía Trimestral</option>
            <option value="semester" disabled={purchasedPlans.includes('semester')}>Membresía Semestral</option>
            <option value="year" disabled={purchasedPlans.includes('year')}>Membresía Anual</option>
          </select>
        </h2>
      </label>

      <div className="container-pay">
        <div className="parte izquierda-pay" id="membership-info-pay">
          {renderMembershipInfo(selectedPlan)}
        </div>

        <div className="parte derecha-pay">
          <form id="membership-form-pay">
            <div className="form-section-pay">
              <p className="metodo-pago">Método de pago:</p>
              <div className="payment-option-pay">
                <input
                  type="radio"
                  id="credit-card"
                  name="payment-method"
                  value="credit-card"
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="credit-card-pay" className="payment-method-label-pay">
                  Tarjeta de crédito/débito
                </label>
                <img src={require('../../assets/img/pagos-img/visa.png')} alt="Visa Logo" />
                <img src={require('../../assets/img/pagos-img/master.png')} alt="MasterCard Logo" />
              </div>
              <div className="payment-option-pay">
                <input
                  type="radio"
                  id="paypal"
                  name="payment-method"
                  value="paypal"
                  onChange={handlePaymentMethodChange}
                />
                <label htmlFor="paypal-pay" className="payment-method-label">
                  PayPal
                </label>
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal Logo" />
              </div>
            </div>
          </form>
          <hr className="divider-pay" />
          <div className="payment-info-pay" id="payment-info-pay">
            {paymentForm}
          </div>
        </div>
      </div>

      <hr className="divider-pay" />
      <div className="detalles-pay">
        <h3 className="history">Historial de Transacciones</h3>
        <div className="historial-transacciones-pay">
          <table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Tipo de Membresía</th>
                <th>Monto</th>
                <th>Estado</th>
                <th>Comprobante</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {transactionHistory.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{getPlanName(transaction.description)}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.status}</td>
                  <td><Link to={transaction.receipt}>Descargar</Link></td>
                  <td>
                    {transaction.status === 'Pagado' && (
                      <button className='cancelar-pago' onClick={handleClearTransactionHistory}>
                        Cancelar
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Pagos;
