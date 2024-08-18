import PropTypes from 'prop-types';

const Table = ({ netIncomes }) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre de la Marca</th>
                        <th>Ingreso Neto</th>
                    </tr>
                </thead>
                <tbody>
                    {netIncomes.map((item) => (
                        <tr key={item.brand}>
                            <td>{item.brand}</td>
                            <td>{item.income}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br />
            <p> Promedio: 
                {
                    netIncomes.reduce((acum, valor) => {
                        return (acum + valor.income) 
                    }, 0) / netIncomes.length
                }
            </p>
        </div>
    );
}
Table.propTypes = {
    netIncomes: PropTypes.array.isRequired,
};
export default Table;