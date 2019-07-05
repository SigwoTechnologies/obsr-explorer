
import Component from 'core/Component';
import PropTypes from 'prop-types';
import React from 'react';

import { Table } from 'reactstrap';

import TableHeader from './TableHeader';
// import { forEach } from 'p-iteration';

export default class TableWrapper extends Component {
  static defaultProps = {
    cols: [],
    data: [],
    hasDivider: true,
  };

  static propTypes = {
    cols: PropTypes.array,
    data: PropTypes.array,
    max: PropTypes.number,
    hasDivider: PropTypes.bool,
  };

  componentDidMount() {
  };

  componentWillUnmount() {
  };

  getBody() {
    const { data } = this.props;
    const keys = this.getKeys();

    const rows = data.map((row, idx) => {
      const cells = keys.map((col, i) => {
        console.log(col)
        return (
          <td className={`td-${col}`} key={ i }><span className={`span-${col}`}>{ row[col] }</span></td>
        )
      });

      return (
        <React.Fragment key={idx}>
          <tr>
            { cells }
          </tr>
          <tr className="table-spacer">
            <td />
          </tr>
        </React.Fragment>
      )
    });

    return (
      <tbody>
        { rows }
      </tbody>
    );
  }

  getKeys() {
    const { cols } = this.props;

    const keys = cols.map(col => {
      return (typeof col === 'object') ? col.key : col;
    })

    return keys;
  }

  render() {
    const { props } = this;

    if (!props.data.length) {
      return false;
    }

    return (
      <div className="table-wrapper">
        <div className="table-wrapper__shadow-margin">
          <Table className={ `${ this.props.hasDivider ? 'table--has-divider' : '' } ${ this.props.className || 'animated fadeIn' }` }>
            { this.getBody() }
          </Table>
        </div>
      </div>
    );
  };
}
