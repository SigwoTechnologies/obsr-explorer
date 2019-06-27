const getPageName = (local) => {
    if (local == '/') {
      return 'Overview'
    }
    if (local == '/peer') {
      return 'Connections'
    }
    if (local == '/api') {
      const term = 'api';
      return term.toUpperCase();
    }
    if (local == '/coin') {
      return 'OBSR Info'
    }
    const formatLocal = local.replace('/', '');
    return formatLocal;
}

export default getPageName;