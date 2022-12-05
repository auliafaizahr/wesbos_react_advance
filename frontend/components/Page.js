import PropTypes from 'prop-types';

export default function Page({ children, cool }) {
  return (
    <div>
      <p>Hello! This is page components hehehe</p>
      {children}
      <p>Halo yang ini {cool} </p>
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
