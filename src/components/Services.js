/* Icons Import */
import {
  FiCodesandbox,
  FiMusic,
  FiDatabase,
  FiMonitor,
  FiSend,
  FiShoppingCart,
} from 'react-icons/fi';

/* CSS Import */
import './style/Services.css';

function ServicesContainer(props) {
  return (
    <div className="container">
      {props.icon}
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

function Services() {
  const size = '6rem';
  return (
    <div className="services">
      <ServicesContainer
        icon={<FiCodesandbox size={size} />}
        title="Branding"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting"
      />

      <ServicesContainer
        icon={<FiMusic size={size} />}
        title="Music"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting"
      />

      <ServicesContainer
        icon={<FiDatabase size={size} />}
        title="Development"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting"
      />

      <ServicesContainer
        icon={<FiMonitor size={size} />}
        title="Web Design"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting"
      />

      <ServicesContainer
        icon={<FiSend size={size} />}
        title="Social Media"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting"
      />

      <ServicesContainer
        icon={<FiShoppingCart size={size} />}
        title="Ecommerce"
        description="Lorem Ipsum is simply dummy text of the printing and typesetting"
      />
    </div>
  );
}

export default Services;
