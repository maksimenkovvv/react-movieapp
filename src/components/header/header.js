import React from 'react';
import { Tabs } from 'antd';
import PropTypes from 'prop-types';

import './header.css';

const Header = (props) => {
  const { active, setActive } = props;
  const arr = [
    {
      key: 'search',
      label: 'Search',
    },
    {
      key: 'rated',
      label: 'Rated',
    },
  ];

  return (
    <div className="ant-tabs">
      <Tabs defaultActiveKey="1" items={arr} onChange={setActive} selectedkeys={active} />
    </div>
  );
};

Header.defaultProps = {
  setActive: () => {},
  active: 'search',
};

Header.propTypes = {
  setActive: PropTypes.func,
  active: PropTypes.string,
};

export default Header;
