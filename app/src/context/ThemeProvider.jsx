import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import ThemeContext from './ThemeContext';

function ThemeProvider({ children }) {
  const [isActive, setIsActive] = useState(false);

  const contextTheme = useMemo(() => ({
    isActive,
    setIsActive,
  }), [isActive]);
  return (
    <ThemeContext.Provider value={ contextTheme }>
      { children }
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
ThemeProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
