import { connect } from 'react-redux';
import { nameActionCreator } from '../actions/nameActions';

function mapStateToProps({ namesData }) {
  return {
    namesData,
  };
}

const mapDispatchToProps = { ...nameActionCreator };

export function nameConnect(configMapStateToProps = mapStateToProps) {
  return connect(configMapStateToProps, mapDispatchToProps);
}
